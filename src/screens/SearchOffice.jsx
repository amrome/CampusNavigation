import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../App.css";
import Header from "../components/Header";

export default function SearchOffice() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOffice, setSelectedOffice] = useState(null);

  const titleRef = useRef(null);
  const formRef = useRef(null);

  // GSAP Animations
  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      formRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.8, delay: 0.4, ease: "back.out(1.5)" }
    );
  }, []);

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
          <h1 ref={titleRef}>Looking for a Lecturer's Office?</h1>

          <form onSubmit={handleSearch} className="search-form" ref={formRef}>
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
