// src/pages/Blogs.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Blogs = () => {
  const { id } = useParams(); // Get the blog ID from the URL (if present)
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchBlog = async () => {
        try {
          const response = await fetch(`/blogs/${id}.json`);
          if (!response.ok) throw new Error(`Failed to fetch ${id}.json`);
          const data = await response.json();
          setBlog(data);
        } catch (err) {
          console.error('Error fetching blog:', err);
          setError(`Failed to load blog: ${err.message}`);
        }
      };

      fetchBlog();
    }
  }, [id]);

  if (id && blog) {
    if (error) {
      return <div className="text-red-500 text-center">Error: {error}</div>;
    }

    if (!blog) {
      return <div className="text-center">Loading...</div>;
    }

    return (
      <div className="container mx-auto p-4">
        <button
          onClick={() => navigate('/blogs')}
          className="mb-4 px-4 py-2 bg-gray-500 text-white rounded shadow hover:bg-gray-700 transition"
        >
          Back to Blog List
        </button>
        <div className="p-4">
          <h1 className="text-3xl font-serif font-bold text-center mb-6">{blog.title}</h1>
          <h1 className="text-2xl font-bold ml-12 mb-6">{blog.head1}</h1>
          {blog.image && (
            <img
              src={blog.image}
              alt={blog.title}
              className="mx-auto mb-6 rounded-lg shadow-lg w-full lg:w-2/3"
            />
          )}
          <div className="mx-auto font-serif w-[90vw] md:w-[70vw] px-auto text-xl my-5">
        {blog.text1.split('\n').map((line, index) => (
          <p className="mx-auto"key={index}>{line}</p>
        ))}
      </div>
          <h1 className="text-2xl font-bold ml-12 mb-6">{blog.head2}</h1>

          <div className="mx-auto font-serif w-[90vw] md:w-[70vw] px-auto text-xl my-5">
        {blog.text2.split('\n').map((line, index) => (
          <p className="mx-auto"key={index}>{line}</p>
        ))}
      </div>
          <h1 className="text-2xl font-bold ml-12 mb-6">{blog.head3}</h1>

          <div className="mx-auto font-serif w-[90vw] md:w-[70vw] px-auto text-xl my-5">
        {blog.text3.split('\n').map((line, index) => (
          <p className="mx-auto"key={index}>{line}</p>
        ))}
      </div>
          <h1 className="text-2xl font-bold ml-12 mb-6">{blog.head4}</h1>

          <div className="mx-auto font-serif w-[90vw] md:w-[70vw] px-auto text-xl my-5">
        {blog.text4.split('\n').map((line, index) => (
          <p className="mx-auto"key={index}>{line}</p>
        ))}
      </div>
          <h1 className="text-2xl font-bold ml-12 mb-6">{blog.head5}</h1>

          <div className="mx-auto font-serif w-[90vw] md:w-[70vw] px-auto text-xl my-5">
        {blog.text5.split('\n').map((line, index) => (
          <p className="mx-auto"key={index}>{line}</p>
        ))}
      </div>
          <h1 className="text-2xl font-bold ml-12 mb-6">{blog.head6}</h1>

          {blog.video1 && (
            <div className="mb-6 mx-auto w-full max-w-screen-lg">
              <div className="bg-white p-4 rounded-lg shadow-lg  w-full relative "style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full rounded-lg" frameBorder="0"
                  allowFullScreen
                  src={blog.video1}
                  title={blog.title}
                ></iframe>
              </div>
            </div>
          )}
          

          {blog.video2 && (
            <div className="mb-6 mx-auto w-full max-w-screen-lg">
              <div className="bg-white p-4 rounded-lg shadow-lg  w-full relative "style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full rounded-lg" frameBorder="0"
                  allowFullScreen
                  src={blog.video2}
                  title={blog.title}
                ></iframe>
              </div>
            </div>
          )}

          {blog.video3 && (
            <div className="mb-6 mx-auto w-full max-w-screen-lg">
              <div className="bg-white p-4 rounded-lg shadow-lg  w-full relative "style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full rounded-lg" frameBorder="0"
                  allowFullScreen
                  src={blog.video3}
                  title={blog.title}
                ></iframe>
              </div>
            </div>
          )}

          <h1 className='text-3xl font-bold text-center my-7'>▬▬▬▬▬▬ Connect with me ▬▬▬▬▬▬</h1>
        </div>
      </div>
    );
  }

  return null; // Return null if no ID is provided
};

export default Blogs;
