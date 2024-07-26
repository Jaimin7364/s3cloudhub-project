// src/components/Layout.jsx
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavbar = location.pathname === '/login'; // or any other path where Navbar should be hidden

  return (
    <div>
      {!hideNavbar && <Navbar />}
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
