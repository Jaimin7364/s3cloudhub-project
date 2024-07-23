import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BlogListPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogFiles = Array.from({ length: 15 }, (_, i) => `blog${i + 1}.json`);

        const blogData = await Promise.all(
          blogFiles.map(async (file) => {
            const response = await fetch(`/blogs/${file}`);
            if (!response.ok) throw new Error(`Failed to fetch ${file}`);
            const data = await response.json();
            return { id: file.replace('.json', ''), ...data };
          })
        );
        setBlogs(blogData);
      } catch (err) {
        console.error('Error fetching blogs:', err);
        setError(`Failed to load blogs: ${err.message}`);
      }
    };

    fetchBlogs();
  }, []);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  if (error) {
    return <div className="text-red-500 text-center">Error: {error}</div>;
  }

  if (blogs.length === 0) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8 font-sans"><span className='text-red-600'>S3</span>CloudHub Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentBlogs.map((blog) => (
          <div key={blog.id} className="border border-gray-300 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover"/>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-3">{blog.title}</h2>
              <p className="text-gray-500 mb-3">{new Date(blog.date).toLocaleDateString()}</p>
              <Link to={`/blogs/${blog.id}`} className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-8">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-400 hover:bg-blue-700 transition"
        >
          Previous
        </button>
        <span className="mx-4 text-lg">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-400 hover:bg-blue-700 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogListPage;
