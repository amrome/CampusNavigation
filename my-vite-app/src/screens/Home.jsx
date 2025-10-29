import React from "react";
import "../App.css";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div className="home-page">
      {/* Header with logo */}
      <Header />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Campus Navigation</h1>
          <p>
            Campus Navigation is a web-based application that helps students,
            faculty, and staff easily locate rooms, classrooms, lecture halls,
            and faculty offices across the university. It also displays
            real-time room availability using data from the class schedule.
          </p>
        </div>
      </section>

      {/* Action Buttons */}
      <Navigation />

      {/* General Information Section */}
      <section className="general-info">
        <h2>General Information</h2>
        <div className="building-cards">
          {/* Main Building */}
          <div className="building-card building-main">
            <div>
              <h3>Main Building</h3>
              <p>
                Body text for whatever you'd like to say. Add main takeaway
                points, quotes, anecdotes, or even a very short story.
              </p>
            </div>
            <img src="/main-building.jpg" alt="Main Building" />
          </div>

          {/* Library & Gym */}
          <div className="building-card building-library">
            <div>
              <h3>Library & Gym</h3>
              <p>
                Body text for whatever you'd like to say. Add main takeaway
                points, quotes, anecdotes.
              </p>
              <p>
                Body text for whatever you'd like to add to the main point. It
                provides details, explanations, and context.
              </p>
            </div>
            <img src="/library-gym.jpg" alt="Library & Gym" />
          </div>

          {/* Tuwaiq Building */}
          <div className="building-card building-tuwaiq">
            <div>
              <h3>Tuwaiq Building</h3>
              <p>
                Body text for whatever you'd like to say. Add main takeaway
                points, quotes, anecdotes.
              </p>
              <div className="subheading">Subheading</div>
              <p>
                Body text for whatever you'd like to add to the main point. It
                provides details, explanations, and context.
              </p>
            </div>
            <img src="/tuwaiq-building.jpg" alt="Tuwaiq Building" />
          </div>

          {/* Najd Building */}
          <div className="building-card building-najd">
            <div>
              <h3>Najd Building</h3>
              <p>
                Body text for whatever you'd like [unreadable text]. Add main
                takeaway points, quotes.
              </p>
              <p>
                Body text for whatever you'd like [unreadable text] to the main
                point. It provides details, explanations, and context.
              </p>
            </div>
            <img src="/najd-building.jpg" alt="Najd Building" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-logo">
          {/* Add logo */}
          <span>Logo</span>
        </div>
        <h3>Made with &lt;3</h3>
        <p>Abdullah Meraj, Ruqaya Siddiq, Amro Elian</p>
        <p>gdsc@yu.edu.sa</p>
        <p>Al Qassim Highway,</p>
        <p>Riyadh Region 11512</p>
        <div className="social-links">{/* Add social icons */}</div>
      </footer>
    </div>
  );
}
