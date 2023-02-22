import { ReactComponent as Logo } from '../assets/logo.svg';
import { Link } from "react-router-dom";

// allows for smooth-scrolling to sections on home page
import { HashLink } from 'react-router-hash-link';

function Header() {
  return (
    <header className='header'>
      <Logo className='header_logo' alt='Molly Felts Vallin Logo' />
      <nav className='header_nav'>
        <Link to="/" className="header_link">
          Home
        </Link>
        <HashLink smooth to="/#projects">
          Projects
        </HashLink>
        <HashLink smooth to="/#about">
          About
        </HashLink>
      </nav>
    </header>
  )
}

export default Header