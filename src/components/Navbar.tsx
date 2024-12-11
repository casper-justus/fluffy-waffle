import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Home, User, MessageSquare, Image, Settings } from 'lucide-react';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const [activeItem, setActiveItem] = useState('home');

  return (
    <nav className="navigation bg-white shadow-lg">
      <ul>
        <li className={activeItem === 'home' ? 'list active' : 'list'} onClick={() => setActiveItem('home')}>
          <Link to="/">
            <span className="icon"><Home /></span>
            <span className="text">Home</span>
          </Link>
        </li>
        <li className={activeItem === 'profile' ? 'list active' : 'list'} onClick={() => setActiveItem('profile')}>
          <Link to="/profile">
            <span className="icon"><User /></span>
            <span className="text">Profile</span>
          </Link>
        </li>
        <li className={activeItem === 'messages' ? 'list active' : 'list'} onClick={() => setActiveItem('messages')}>
          <Link to="/messages">
            <span className="icon"><MessageSquare /></span>
            <span className="text">Messages</span>
          </Link>
        </li>
        <li className={activeItem === 'products' ? 'list active' : 'list'} onClick={() => setActiveItem('products')}>
          <Link to="/products">
            <span className="icon"><Image /></span>
            <span className="text">Products</span>
          </Link>
        </li>
        <li className={activeItem === 'admin' ? 'list active' : 'list'} onClick={() => setActiveItem('admin')}>
          <Link to="/admin">
            <span className="icon"><Settings /></span>
            <span className="text">Admin</span>
          </Link>
        </li>
        <div className="indicator"></div>
      </ul>
    </nav>
  );
};

export default Navbar;