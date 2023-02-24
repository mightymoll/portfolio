import { ReactComponent as Logo } from '../assets/logo.svg';
import { Link } from 'react-router-dom';

// allows for smooth-scrolling to sections on home page
import { HashLink } from 'react-router-hash-link';

import { useState, useEffect } from 'react';

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);

  return scrollDirection;
};

function Header() {
  const scrollDirection = useScrollDirection();
  return (
    <header className={`header ${scrollDirection === "down" ? "hide" : "show"}`}>
      <div className="header_container">
        <Logo className='header_logo' alt='Molly Felts Vallin Logo' />
        <nav className='header_nav'>
          <Link to="/" className='header_link'>
            Home
          </Link>
          <HashLink smooth to='/#projects'>
            Projects
          </HashLink>
          <HashLink smooth to='/#about'>
            About
          </HashLink>
        </nav>
      </div>
    </header>
  )
};

export default Header;