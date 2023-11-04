/* eslint-disable jsx-a11y/alt-text */
import React from "react";


export default function Navbar() {
  return (
    <nav className="px-4 py-8 flex items-center justify-between">
      <div>
        <a href="/">Home</a>
      </div>
      <ul className="inline-flex items-center gap-8 px-8 mb-0">
        <li>
          <a href="/#about-section">About</a>
        </li>
        <li>
          <a href="/#contact-section">Contact</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
        <li>
          <button className="px-2 py-1.5 border rounded">
            Login
          </button>
        </li>
      </ul>
    </nav>
  );
}
