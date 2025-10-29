import "../App.css";
import Header from "../components/Header";

export default function RoomAvailability() {
  // Sample room data - replace with actual data
  const availableRooms = [
    {
      id: "g211",
      name: "G211",
      available: true,
      availableTime: "11:30-1:30",
      image: "/room-1.jpg",
      description: "Description of second product",
    },
    {
      id: "room2",
      name: "Room 2",
      available: true,
      image: "/room-2.jpg",
      description: "Description of third product",
    },
    {
      id: "room3",
      name: "Room 3",
      available: true,
      image: "/room-3.jpg",
      description: "Description of fourth product",
    },
    {
      id: "room4",
      name: "Room 4",
      available: true,
      image: "/room-4.jpg",
      description: "Description of fifth product",
    },
    {
      id: "room5",
      name: "Room 5",
      available: true,
      image: "/room-5.jpg",
      description: "Description of sixth product",
    },
  ];

  return (
    <div className="room-availability-page">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="availability-content">
        <h1>currently and soon available Rooms</h1>

        {/* Room Grid */}
        <div className="rooms-grid">
          {availableRooms.map((room) => (
            <div
              key={room.id}
              className={`room-card ${
                room.available ? "available" : "unavailable"
              }`}
            >
              <div className="room-image">
                <img src={room.image} alt={room.name} />
              </div>
              {room.available && (
                <div className="availability-badge">
                  <p>available from: {room.availableTime}</p>
                  <h2>{room.name}</h2>
                </div>
              )}
              <p className="room-description">{room.description}</p>
            </div>
          ))}
        </div>

        {/* Timetable Link */}
        <section className="timetable-section">
          <h2>explore room timetable</h2>
          {/* Add timetable content or link here */}
        </section>
      </div>
    </div>
  );
}
