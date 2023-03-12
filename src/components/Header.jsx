import { ReactComponent as Logo } from '../assets/logo.svg';
import { useState } from 'react';
import { Link } from 'react-scroll';


function Header() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <header>
      <div className="header_container">
        <Logo className='header_logo' alt='Molly Felts Vallin Logo' />
        <nav className='header_nav'>
          <Link to="projects" smooth={true} duration={500} className="header_link">Projects</Link>
          <Link to="contact" smooth={true} duration={500} className="header_link">Contact</Link>
        </nav>
      </div>
    </header>
  )
};

export default Header;