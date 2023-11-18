/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";

export function NavLink({to, children, ...props}) {
  return (
    <li className="nav-item">
      <Link className="nav-link fs-5" to={to} {...props}>
        { children }
      </Link>
    </li>
  );
}

export default function Navbar() {
  return (
    <nav
      className="py-1 px-4 navbar">
      <div className="nav-brand">
        <a className="nav-link fs-2"  href="/">
          Home
        </a>
      </div>
      <ul className="nav nav-underline">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        {/* <NavLink to="/login" className="fs-5 btn btn-primary">Login</NavLink> */}
      </ul>
    </nav>
  );
}
