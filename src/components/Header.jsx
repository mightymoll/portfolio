import { ReactComponent as Logo } from '../assets/logo.svg';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <header>
      <div className="header_container">
        <Logo className='header_logo' alt='Molly Felts Vallin Logo' />
        <nav className='header_nav'>
          <Link to="/" className="header_link">Home</Link>
          <Link to="/" className="header_link">Projects</Link>
          <Link to="about" className="header_link">About</Link>
        </nav>
      </div>
    </header>
  )
};

export default Header;