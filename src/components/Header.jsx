import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Campus Logo" className="logo-image" />
      </div>
      <nav>
        <Link to="/" className="nav-link">
          HOME
        </Link>
      </nav>
    </header>
  );
}
