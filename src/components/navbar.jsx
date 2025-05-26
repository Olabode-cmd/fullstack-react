import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="brand">
          <div className="logo">
            <span className="logo">Dribble</span>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="#" className="link">Explore</Link>
            </li>
            <li>
              <Link to="#" className="link">Hire a designer</Link>
            </li>
            <li>
              <Link to="#" className="link">Find Jobs</Link>
            </li>
            <li>
              <Link to="#" className="link">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div>
          <button className="signup-btn">Sign up</button>
          <button className="login-btn">Log in</button>
        </div>
      </nav>
    );
}

export default Navbar;