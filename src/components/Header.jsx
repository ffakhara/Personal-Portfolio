
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (

    
     <div id="main">
      <nav className='navbar navbar-expand-lg navbar-light'>
        <div className='container-fluid'>
          <Link to="/" className='navbar-brand' href="#main">
            <h1 className='logo'>ff</h1>
          </Link>
          <button
            className='navbar-toggler'
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse justify-content-end'
            id="navbarNavDropdown"
          >
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link to="/about"  className='nav-link'>About</Link> 
              </li>
              <li className="nav-item">
              <Link to="/projects"  className='nav-link'>Projects</Link>
              </li>
              <li className="nav-item">
              <Link to="/contact"  className='nav-link'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    

  )
}

export default Header;