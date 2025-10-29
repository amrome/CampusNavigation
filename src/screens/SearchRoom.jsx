import React, { useState } from "react";
import "../App.css";
import Header from "../components/Header";

export default function SearchRoom() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  // Dummy instructor/room data
  const instructorRooms = [
    {
      id: 1,
      instructorName: "Dr. Ahmed Al-Mansoori",
      building: "Tuwaiq Building",
      floor: "2nd Floor",
      roomNumber: "T211",
      officeHours: "Sun-Wed: 10:00-12:00",
      nearestLandmark: "Main Elevator",
      accessType: "Key Card Required",
    },
    {
      id: 2,
      instructorName: "Dr. Fatima Al-Zahrani",
      building: "Main Building",
      floor: "3rd Floor",
      roomNumber: "M305",
      officeHours: "Mon-Thu: 09:00-11:00",
      nearestLandmark: "Library Entrance",
      accessType: "Open Access",
    },
    {
      id: 3,
      instructorName: "Prof. Mohammed Al-Qahtani",
      building: "Najd Building",
      floor: "1st Floor",
      roomNumber: "N102",
      officeHours: "Sun-Tue: 13:00-15:00",
      nearestLandmark: "IT Department",
      accessType: "Key Card Required",
    },
    {
      id: 4,
      instructorName: "Dr. Sarah Al-Mutairi",
      building: "Library & Gym",
      floor: "Ground Floor",
      roomNumber: "LG08",
      officeHours: "Mon-Wed: 11:00-13:00",
      nearestLandmark: "Gym Reception",
      accessType: "Open Access",
    },
  ];

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    const results = instructorRooms.filter(
      (room) =>
        room.instructorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        room.roomNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        room.building.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(results);
  };

  return (
    <div className="search-room-page">
      {/* Header */}
      <Header />

      {/* Search Section */}
      <section className="search-section">
        <div className="search-hero">
          <h1>Finding a Room?</h1>
          <p>Search for instructor offices by name, room number, or building</p>

          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="Search for instructor or room..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-button">
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className="search-results">
          <h2>Search Results</h2>
          <div className="results-grid">
            {searchResults.map((room) => (
              <div
                key={room.id}
                className="room-result-card"
                onClick={() => setSelectedRoom(room)}
              >
                <h3>{room.instructorName}</h3>
                <p>
                  <strong>Building:</strong> {room.building}
                </p>
                <p>
                  <strong>Room:</strong> {room.roomNumber}
                </p>
                <p>
                  <strong>Floor:</strong> {room.floor}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Selected Room Details */}
      {selectedRoom && (
        <div className="building-details-card">
          <button
            className="close-button"
            onClick={() => setSelectedRoom(null)}
          >
            ×
          </button>
          <h2>{selectedRoom.instructorName}</h2>
          <div className="details">
            <p>
              <strong>Building:</strong> {selectedRoom.building}
            </p>
            <p>
              <strong>Floor:</strong> {selectedRoom.floor}
            </p>
            <p>
              <strong>Room Number:</strong> {selectedRoom.roomNumber}
            </p>
            <p>
              <strong>Office Hours:</strong> {selectedRoom.officeHours}
            </p>
            <p>
              <strong>Nearest Landmark:</strong> {selectedRoom.nearestLandmark}
            </p>
            <p>
              <strong>Access:</strong> {selectedRoom.accessType}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
