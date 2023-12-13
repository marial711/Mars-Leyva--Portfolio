/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";

export function NavLink({to, children, ...props}) {
  return (
    <li className="nav-item">
      <a className="nav-link fs-5" {...props}>
        { children }
      </a>
    </li>
  );
}

export default function Navbar() {
  return (
    <>
      <nav className='navigation'>
          <ul>          
            <NavLink href="#home" smooth>Home</NavLink>
            <NavLink href="#about" smooth>About</NavLink>
            <NavLink href="#contact" smooth>Contact</NavLink>
          </ul>
      </nav>

  );
}
