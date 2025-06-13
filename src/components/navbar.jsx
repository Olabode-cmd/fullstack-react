import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="flex justify-between items-center mb-4">
        <div className="brand flex gap-x-3">
          <div className="logo">
            <span className="logo">Dribble</span>
          </div>

          <ul className="nav-links flex gap-x-3">
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
            
          </ul>
        </div>

        <div className="flex items-center gap-x-3">
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