import { Link } from 'react-router-dom';
import { Home, Users, TrendingUp } from 'lucide-react'; // Using icons for menu items
import './Navbar.css'; // Import the CSS file for styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="menu">
          <li className="menu-item-wrapper">
            <Link to="/feed" className="menu-item">
              <Home size={24} className="menu-icon" />
              <span className="menu-text">Feed</span>
            </Link>
          </li>
          <li className="menu-item-wrapper">
            <Link to="/topusers" className="menu-item">
              <Users size={24} className="menu-icon" />
              <span className="menu-text">Top Users</span>
            </Link>
          </li>
          <li className="menu-item-wrapper">
            <Link to="/trendingposts" className="menu-item">
              <TrendingUp size={24} className="menu-icon" />
              <span className="menu-text">Trending Posts</span>
            </Link>
          </li>
        </ul>

        {/* Center logo */}
        <div className="logo-container">
          <img src="/af.jpg" alt="Logo" className="logo" />
        </div>

        <div className="right-placeholder"></div>
      </div>
    </nav>
  );
};

export default Navbar;
