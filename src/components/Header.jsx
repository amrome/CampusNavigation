import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Campus Logo" className="logo-image" />
      </div>
      <nav>
        <Link to="/" className="nav-link" aria-label="Home">
          <svg
            className="home-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="28"
            height="28"
          >
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        </Link>
      </nav>
    </header>
  );
}
