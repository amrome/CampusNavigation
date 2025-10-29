import { useState } from "react";
import "../App.css";
import Header from "../components/Header";

export default function SearchOffice() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOffice, setSelectedOffice] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    // Search logic here
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="search-office-page">
      {/* Header */}
      <Header />

      {/* Search Section */}
      <section className="search-section">
        <div className="search-hero">
          <h1>Looking for a Lecturer's Office?</h1>

          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-button">
              Button
            </button>
          </form>
        </div>
      </section>

      {/* Office Details Card (example result) */}
      <div className="office-details-card">
        <h2>DR MARWA ALTUNISI</h2>
        <div className="office-info">
          <p>
            <strong>TUWAIQ</strong>
          </p>
          <p>G Floor</p>
          <p>
            <strong>Room Number:</strong> [Number not visible in screenshot]
          </p>
          <p>
            <strong>Office Hours:</strong> [Hours not visible in screenshot]
          </p>
          <p>
            <strong>Contact:</strong> [Contact not visible in screenshot]
          </p>
        </div>
      </div>
    </div>
  );
}
