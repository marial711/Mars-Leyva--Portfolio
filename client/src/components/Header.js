import MenuIcon from '../assets/svg/menu-icon';
import {useState} from 'react';
import {NavHashLink} from "react-router-hash-link";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const closeNav = () => setShowNav(false);
  
  const toggleNavItems = () => {
    setShowNav(!showNav)
  }

  return (
    <header>
      <nav className='navigation'>
        <div>
          <button className='menu-icon' type="button" onClick={toggleNavItems}>
            <MenuIcon  />
          </button>
        </div>
        
        <div className={showNav ? "nav-elements expand" : "nav-elements"} >
          <ul>
            <NavHashLink to="/#homepage" onClick={closeNav} smooth>Home</NavHashLink>
            <NavHashLink to="/#about" onClick={closeNav} smooth>About</NavHashLink>
            <NavHashLink to="/#contact" onClick={closeNav} smooth>Contact</NavHashLink>
          </ul>
        </div>

      </nav>
    </header>
  );
  }