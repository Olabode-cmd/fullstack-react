import Navbar from './components/navbar';
import Footer from './components/footer'
import { MdOutlineSearch } from "react-icons/md";
import { Link } from 'react-router-dom';

const App = () => {
  return (
    // react fragment
    <>
      <Navbar />

      <section className="hero-section">
        <div className="wrapper">
          <h1 className="title">Discover the world's top designers</h1>
          <p className="subtitle">
            Explore work from the most talented and accomplished designers{" "}
            <br /> ready to take on your next project
          </p>

          <Link to='/about'>Go to about page</Link>

          {/* Input field */}
          <div className="relative">
            <input
              type="text"
              className="search-input"
              placeholder="What are you looking for?"
            />

            <select className="search-select">
              <option>Shots</option>
              <option>Mobile</option>
              <option>Work</option>
            </select>

            <div className="icon-bg">
              <MdOutlineSearch className="icon" />
            </div>
          </div>

          {/* Trending searches */}
          <div className="trending-searches">
            <div>
              <p>Trending Searches</p>
            </div>

            <div className="trend">
              <span>landing page</span>
              <span>e-commerce</span>
              <span>mobile app</span>
              <span>ui/ux</span>
              <span>digital marketing</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;

// Component
// This is a simple React component is a function that renders/returns JSX.
// JSX is a syntax extension for JavaScript that looks similar to HTML.

// 3 things - variable name, arrow function, return