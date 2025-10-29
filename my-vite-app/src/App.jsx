import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home";
import SearchRoom from "./screens/SearchRoom";
import SearchOffice from "./screens/SearchOffice";
import RoomAvailability from "./screens/RoomAvailability";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-room" element={<SearchRoom />} />
        <Route path="/search-office" element={<SearchOffice />} />
        <Route path="/room-availability" element={<RoomAvailability />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
