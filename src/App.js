import './App.css';
import Blogs from './pages/Blogs';
import Courses from './pages/Courses';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import CourseVideo from './pages/CourseVideo';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/coursevideo" element={<CourseVideo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
