// src/App.jsx
import './App.css';
import Blogs from './pages/Blogs';
import Courses from './pages/Courses';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import CourseVideo from './pages/CourseVideo';
import BlogListPage from './components/BlogListPage';
import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatbotWidget from './components/ChatBot';

function App() {
  return (
    <>
    <ChatbotWidget />
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/blogs" element={<BlogListPage />} />
          <Route path="/blogs/:id" element={<Blogs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/coursevideo" element={<CourseVideo />} />
        </Routes>
      </Layout>
    </Router>
    </>
  );
}

export default App;
