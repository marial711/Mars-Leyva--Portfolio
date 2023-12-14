/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import MenuIcon from '../assets/svg/menu-icon';

function NavLink({to, children, ...props}) {
  return (
    <li className="nav-item">
      <a className="nav-link fs-5" {...props}>
        { children }
      </a>
    </li>
  );
};

window.onload= () => {
  const menuIcon = document.getElementById("menu-icon");
  let mobileNav = document.getElementById("mobile-navigation");
  const mobileNavLinks = document.querySelectorAll("#mobile-links > li");

  menuIcon.addEventListener("click", () => {
    mobileNav.style.animation = "slide-down 2s ease-in-out";
      mobileNav.style.display = `block`;
      menuIcon.style.visibility = `hidden`;
  });

  for(let i =0; i < mobileNavLinks.length; i++) {
    mobileNavLinks[i].addEventListener("click", () => {

      menuIcon.style.visibility = `visible`;
      mobileNav.style.display = `none`;
    });
  }
};

export default function Navbar() {
  return (
    <>
      <nav className='navigation'>
          <ul>          
            <NavLink href="#home" smooth="true">Home</NavLink>
            <NavLink href="#about" smooth="true">About</NavLink>
            <NavLink href="#contact" smooth="true">Contact</NavLink>
          </ul>
      </nav>

      <div className="menu-icon" id="menu-icon">
          <MenuIcon  />
      </div>

      <nav className='mobile-navigation' id="mobile-navigation">
        <ul id='mobile-links'>          
          <NavLink href="#home" smooth>Home</NavLink>
          <NavLink href="#about" smooth>About</NavLink>
          <NavLink href="#contact" smooth>Contact</NavLink>
        </ul>
      </nav>
    </>
  );
}
