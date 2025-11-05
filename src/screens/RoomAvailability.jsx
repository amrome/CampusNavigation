import { useState, useMemo, useEffect } from "react";
import "../App.css";
import Header from "../components/Header";
import { rooms } from "../data/rooms";
import { corners, getDays } from "../data/data";

export default function RoomAvailability() {
  const [selectedBuilding, setSelectedBuilding] = useState("ALL");
  const [searchTime, setSearchTime] = useState("");
  const [searchDay, setSearchDay] = useState("");
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedRoom) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedRoom]);

  // Get current time and day
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentDay = now.getDay(); // 0=Sunday, 1=Monday, etc.

  const dayNames = ["sunday", "monday", "tuesday", "wednesday", "thursday"];
  const dayLabels = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];

  // Function to check if room is currently free
  const isRoomFreeNow = (room) => {
    const todayKey = dayNames[currentDay];
    if (!room[todayKey] || currentDay > 4) return false;

    const currentTimeMinutes = currentHour * 60 + currentMinute;

    const currentSlot = room[todayKey].find((slot) => {
      const startTime = slot.timeStart.hour * 60 + slot.timeStart.minute;
      const endTime = slot.timeEnd.hour * 60 + slot.timeEnd.minute;
      return (
        currentTimeMinutes >= startTime &&
        currentTimeMinutes < endTime &&
        slot.courseName === "Free"
      );
    });

    return currentSlot !== undefined;
  };

  // Function to get next available time for a room
  const getNextAvailableTime = (room) => {
    const todayKey = dayNames[currentDay];
    if (!room[todayKey] || currentDay > 4) return null;

    const currentTimeMinutes = currentHour * 60 + currentMinute;

    const nextFreeSlot = room[todayKey].find((slot) => {
      const startTime = slot.timeStart.hour * 60 + slot.timeStart.minute;
      return startTime > currentTimeMinutes && slot.courseName === "Free";
    });

    if (nextFreeSlot) {
      return `${nextFreeSlot.timeStart.hour}:${String(
        nextFreeSlot.timeStart.minute
      ).padStart(2, "0")} - ${nextFreeSlot.timeEnd.hour}:${String(
        nextFreeSlot.timeEnd.minute
      ).padStart(2, "0")}`;
    }

    return null;
  };

  // Function to check if room is free at specific time
  const isRoomFreeAtTime = (room, day, hour, minute) => {
    const dayKey = dayNames[day];
    if (!room[dayKey]) return false;

    const searchTimeMinutes = hour * 60 + minute;

    const slot = room[dayKey].find((slot) => {
      const startTime = slot.timeStart.hour * 60 + slot.timeStart.minute;
      const endTime = slot.timeEnd.hour * 60 + slot.timeEnd.minute;
      return (
        searchTimeMinutes >= startTime &&
        searchTimeMinutes < endTime &&
        slot.courseName === "Free"
      );
    });

    return slot !== undefined;
  };

  // Filter rooms based on search criteria
  const filteredRooms = useMemo(() => {
    let filtered = Object.values(rooms);

    // Filter by building
    if (selectedBuilding !== "ALL") {
      filtered = filtered.filter((room) =>
        room.name.startsWith(selectedBuilding)
      );
    }

    // Filter by time and day
    if (searchTime && searchDay) {
      const [hour, minute] = searchTime.split(":").map(Number);
      const dayIndex = parseInt(searchDay);
      filtered = filtered.filter((room) =>
        isRoomFreeAtTime(room, dayIndex, hour, minute)
      );
    }

    // Filter by currently available only
    if (showAvailableOnly) {
      filtered = filtered.filter((room) => isRoomFreeNow(room));
    }

    return filtered.slice(0, 20); // Limit to 20 rooms for performance
  }, [selectedBuilding, searchTime, searchDay, showAvailableOnly]);

  // Get available now count
  const availableNowCount = Object.values(rooms).filter((room) =>
    isRoomFreeNow(room)
  ).length;

  return (
    <div className="room-availability-page">
      <Header />

      <div className="availability-content">
        <div className="page-header">
          <h1 className="page-title">Find Your Perfect Room</h1>
          <p className="page-subtitle">
            Search across {Object.keys(rooms).length} rooms in real-time
          </p>
        </div>

        {/* Stats */}
        <div className="availability-stats">
          <div className="stat-card available-stat">
            <div className="stat-icon">🟢</div>
            <div className="stat-info">
              <h3>{availableNowCount}</h3>
              <p>Available Now</p>
            </div>
          </div>
          <div className="stat-card total-stat">
            <div className="stat-icon">🏢</div>
            <div className="stat-info">
              <h3>{Object.keys(rooms).length}</h3>
              <p>Total Rooms</p>
            </div>
          </div>
          <div className="stat-card results-stat">
            <div className="stat-icon">🔍</div>
            <div className="stat-info">
              <h3>{filteredRooms.length}</h3>
              <p>Search Results</p>
            </div>
          </div>
        </div>

        {/* Search Filters */}
        <div className="search-filters-modern">
          {/* Building Filter */}
          <div className="filter-section">
            <h3 className="filter-title">📍 Filter by Building</h3>
            <div className="building-buttons-modern">
              <button
                className={`building-btn-modern ${
                  selectedBuilding === "ALL" ? "active" : ""
                }`}
                onClick={() => setSelectedBuilding("ALL")}
              >
                All Buildings
              </button>
              {corners.map((corner) => (
                <button
                  key={corner.name}
                  className={`building-btn-modern ${corner.color} ${
                    selectedBuilding === corner.name[0] ? "active" : ""
                  }`}
                  onClick={() => setSelectedBuilding(corner.name[0])}
                >
                  {corner.name}
                </button>
              ))}
            </div>
          </div>

          {/* Time Search */}
          <div className="filter-section">
            <h3 className="filter-title">🕐 Search by Time</h3>
            <div className="time-search-modern">
              <select
                className="modern-select"
                value={searchDay}
                onChange={(e) => setSearchDay(e.target.value)}
              >
                <option value="">Select Day</option>
                {dayLabels.map((day, index) => (
                  <option key={index} value={index}>
                    {day}
                  </option>
                ))}
              </select>
              <input
                className="modern-time-input"
                type="time"
                value={searchTime}
                onChange={(e) => setSearchTime(e.target.value)}
              />
              <button
                className="clear-btn-modern"
                onClick={() => {
                  setSearchTime("");
                  setSearchDay("");
                }}
              >
                ✕ Clear
              </button>
            </div>
          </div>

          {/* Available Now Toggle */}
          <div className="filter-section toggle-section">
            <label className="modern-toggle">
              <input
                type="checkbox"
                checked={showAvailableOnly}
                onChange={(e) => setShowAvailableOnly(e.target.checked)}
              />
              <span className="toggle-slider"></span>
              <span className="toggle-text">Show only available now</span>
            </label>
          </div>
        </div>

        {/* Room Grid */}
        <div className="rooms-grid-modern">
          {filteredRooms.map((room) => {
            // Check if we're searching for a specific time
            let isFree, displayText;

            if (searchTime && searchDay) {
              // Show availability for the searched time
              const [hour, minute] = searchTime.split(":").map(Number);
              const dayIndex = parseInt(searchDay);
              isFree = isRoomFreeAtTime(room, dayIndex, hour, minute);
              const dayName = dayLabels[dayIndex];
              displayText = isFree
                ? `Available on ${dayName} at ${searchTime}`
                : `Occupied on ${dayName} at ${searchTime}`;
            } else {
              // Show current availability
              isFree = isRoomFreeNow(room);
              const nextAvailable = getNextAvailableTime(room);
              displayText = isFree
                ? "Available right now!"
                : nextAvailable
                ? `Next available: ${nextAvailable}`
                : "No more slots today";
            }

            return (
              <div
                key={room.name}
                className={`room-card-modern ${
                  isFree ? "available-modern" : "unavailable-modern"
                }`}
                onClick={() => setSelectedRoom(room)}
              >
                <div className="room-card-header">
                  <div className="room-name-section">
                    <div
                      className={`status-dot ${
                        isFree ? "dot-free" : "dot-busy"
                      }`}
                    ></div>
                    <h2 className="room-name">{room.name}</h2>
                  </div>
                  <span
                    className={`status-badge-modern ${
                      isFree ? "badge-free" : "badge-busy"
                    }`}
                  >
                    {isFree ? "Available" : "Occupied"}
                  </span>
                </div>
                <div className="room-card-body">
                  <p
                    className={`status-message ${
                      isFree ? "message-free" : "message-busy"
                    }`}
                  >
                    {isFree ? "✓ " : "⏱️ "}
                    {displayText}
                  </p>
                </div>
                <div className="room-card-footer">
                  <button className="view-schedule-btn-modern">
                    <span>View Schedule</span>
                    <span className="arrow">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredRooms.length === 0 && (
          <div className="no-results-modern">
            <div className="no-results-icon">🔍</div>
            <h3>No rooms found</h3>
            <p>Try adjusting your filters to see more results</p>
          </div>
        )}
      </div>

      {/* Room Schedule Modal */}
      {selectedRoom && (
        <div className="modal-overlay" onClick={() => setSelectedRoom(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-modal"
              onClick={() => setSelectedRoom(null)}
            >
              ×
            </button>
            <h2>{selectedRoom.name} - Weekly Schedule</h2>
            <div className="schedule-grid">
              {getDays(selectedRoom).map(({ day, timeSlots }) => (
                <div key={day} className="day-schedule">
                  <h3>{day}</h3>
                  {timeSlots && timeSlots.length > 0 ? (
                    <div className="time-slots">
                      {timeSlots.map((slot, i) => (
                        <div
                          key={i}
                          className={`time-slot ${
                            slot.courseName === "Free"
                              ? "free-slot"
                              : "busy-slot"
                          }`}
                        >
                          <span className="time">
                            {slot.timeStart.hour}:
                            {String(slot.timeStart.minute).padStart(2, "0")} -{" "}
                            {slot.timeEnd.hour}:
                            {String(slot.timeEnd.minute).padStart(2, "0")}
                          </span>
                          <span className="course">{slot.courseName}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="no-schedule">No schedule</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
