/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";

export function NavLink({to, children, ...props}) {
  return (
    <li className="nav-item">
      <Link className="nav-link" to={to} {...props}>
        { children }
      </Link>
    </li>
  );
}

export default function Navbar() {
  return (
    <nav
      className="p-4 navbar nav ">
      <div className="nav-brand">
        <a className="fs-3 text-decoration-none"  href="/">
          Home
        </a>
      </div>
      <ul className="nav nav-underline">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/login" className="btn btn-primary">Login</NavLink>
      </ul>
    </nav>
  );
}
