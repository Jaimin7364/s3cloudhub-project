import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { MessageCircle, Send, X, RefreshCw, Clipboard } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';
const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (message) => {
    try {
      const response = await axios.post(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
        contents: [
          {
            parts: [
              {
                text: message
              }
            ]
          }
        ]
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const candidates = response.data.candidates;
      if (candidates && candidates.length > 0) {
        const candidate = candidates[0];
        let content = candidate.content?.parts?.[0]?.text || 'No content available';
        content = content.replace(/\*\*\*/g, ''); // Remove triple asterisks
        return content;
      } else {
        return 'No response from AI.';
      }
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      return 'Error occurred while fetching response.';
    }
  };

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    const userMessage = { text: input, sender: 'user' };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput('');
    setIsLoading(true);

    const aiResponse = await sendMessage(input);
    const botMessage = { text: aiResponse, sender: 'bot' };
    setMessages(prevMessages => [...prevMessages, botMessage]);
    setIsLoading(false);
  };

  const handleNewChat = () => {
    setMessages([]); // Clear messages
    setInput(''); // Clear input field
    setIsLoading(false); // Ensure loading is stopped
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Code copied to clipboard');
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  };

  const renderMessage = (message) => {
    // Split message by triple backticks to identify code blocks
    const parts = message.text.split(/```/);
    return parts.map((part, index) => (
      index % 2 === 0 ? (
        <div key={index} className="mb-2 p-2 bg-gray-100 rounded-md shadow-sm">
          {part.split('\n').map((line, i) => (
            <p key={i} className="mb-1">{line}</p>
          ))}
        </div>
      ) : (
        <div key={index} className="relative mb-2">
          <button
            className="absolute top-1 right-1 p-1 bg-gray-800 text-white rounded-md"
            onClick={() => copyToClipboard(part.trim())}
          >
            <Clipboard size={16} />
          </button>
          <SyntaxHighlighter language="javascript" style={dracula}>
            {part.trim()}
          </SyntaxHighlighter>
        </div>
      )
    ));
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-600 transition-colors"
        >
          <MessageCircle size={24} />
        </button>
      )}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-96 h-[500px] flex flex-col">
          <div className="bg-blue-500 text-white p-4 rounded-t-lg flex items-center">
            <button
              onClick={handleNewChat}
              className="text-white hover:text-gray-200 mr-2"
              title="New Chat"
            >
              <RefreshCw size={20} />
            </button>
            <h3 className="font-bold flex-grow">S3CloudHub AI</h3>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
              <X size={20} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 relative">
            {messages.length === 0 ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-600">
                <p className="text-lg font-semibold">Welcome to S3CloudHub</p>
                <p className="mt-2 text-gray-500">How can I assist you today?</p>
              </div>
            ) : (
              messages.map((message, index) => (
                <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                  {renderMessage(message)}
                </div>
              ))
            )}
            {isLoading && (
              <div className="mb-2 p-2 bg-yellow-100 text-yellow-700 rounded">
                Thinking...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-4 border-t flex items-center">
            <div className="flex-1 flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type a message..."
                className="flex-1 border rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-500 text-white rounded-r-lg p-2 hover:bg-blue-600 transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotWidget;
