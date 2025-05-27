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
              <Link to="/explore" className="link">
                Explore
              </Link>
            </li>
            <li>
              <Link to="/designer" className="link">
                Hire a designer
              </Link>
            </li>
            <li>
              <Link to="/find-jobs" className="link">
                Find Jobs
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="link">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <Link to="/login" className="signup-btn">
            Sign up
          </Link>
          <Link to="/signup" className="login-btn">
            Log in
          </Link>
        </div>
      </nav>
    );
}

export default Navbar;