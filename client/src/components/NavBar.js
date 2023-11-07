/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";

export function NavLink({to, children, ...props}) {
  return (
    <li className="text-xl ">
      <Link className="text-black no-underline" to={to} {...props}>
        { children }
      </Link>
    </li>
  );
}

export default function Navbar() {
  return (
    <nav
      className="navbar p-4 flex items-center justify-between">
      <div>
        <a className="text-black no-underline text-xl"  href="/">
          Home
        </a>
      </div>
      <ul className="navbar-nav inline-flex flex-row items-center gap-8 pl-8 mb-0">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/login">Login</NavLink>
      </ul>
    </nav>
  );
}
