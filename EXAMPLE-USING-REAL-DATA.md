# How to Use the Real Room Data (rooms.ts & data.ts)

## ✅ **YES! These files will GREATLY benefit your website!**

### What you currently have:

- **Dummy data**: hardcoded fake rooms with static info
- **No real schedules**: just showing generic "available" status
- **Limited functionality**: can't search by time, day, or building

### What `rooms.ts` & `data.ts` give you:

- ✅ **Real schedule data** for 100+ rooms across campus
- ✅ **Time slot information** - exact course times and FREE periods
- ✅ **Daily schedules** for Sunday-Thursday
- ✅ **Building organization** (E, F, G, H corners)
- ✅ **Smart filtering** by day, time, building

---

## 📋 Example 1: Show CURRENTLY Available Rooms

```jsx
// RoomAvailability.jsx - Using REAL DATA
import { rooms } from "../data/rooms";
import { getDays } from "../data/data";

export default function RoomAvailability() {
  // Get current time
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentDay = now.getDay(); // 0=Sunday, 1=Monday, etc.

  // Days mapping (since rooms.ts uses Sunday-Thursday)
  const dayNames = ["sunday", "monday", "tuesday", "wednesday", "thursday"];
  const todayKey = dayNames[currentDay];

  // Find rooms that are FREE RIGHT NOW
  const availableNow = Object.values(rooms)
    .filter((room) => {
      if (!room[todayKey]) return false;

      // Check if current time is in a "Free" slot
      const currentSlot = room[todayKey].find((slot) => {
        const startTime = slot.timeStart.hour * 60 + slot.timeStart.minute;
        const endTime = slot.timeEnd.hour * 60 + slot.timeEnd.minute;
        const currentTime = currentHour * 60 + currentMinute;

        return (
          currentTime >= startTime &&
          currentTime < endTime &&
          slot.courseName === "Free"
        );
      });

      return currentSlot !== undefined;
    })
    .slice(0, 10); // Show first 10 rooms

  return (
    <div>
      <h1>Available Rooms RIGHT NOW</h1>
      {availableNow.map((room) => (
        <div key={room.name}>
          <h3>{room.name}</h3>
          <p>Currently FREE!</p>
        </div>
      ))}
    </div>
  );
}
```

---

## 📋 Example 2: Search Rooms by Building (E, F, G, H)

```jsx
import { rooms } from "../data/rooms";
import { corners, roomTypeMap } from "../data/data";

export default function SearchByBuilding() {
  const [selectedCorner, setSelectedCorner] = useState("F");

  // Filter rooms by building letter
  const roomsInBuilding = Object.values(rooms).filter((room) =>
    room.name.startsWith(selectedCorner)
  );

  return (
    <div>
      <h1>Search Rooms by Building</h1>

      {/* Building selector with Google colors! */}
      {corners.map((corner) => (
        <button
          key={corner.name}
          onClick={() => setSelectedCorner(corner.name[0])}
          className={corner.color} // Uses Google Blue/Red/Yellow/Green
        >
          {corner.name}
        </button>
      ))}

      {/* Show rooms */}
      <div>
        {roomsInBuilding.map((room) => (
          <div key={room.name}>
            <h3>{room.name}</h3>
            {/* Show schedule */}
          </div>
        ))}
      </div>
    </div>
  );
}
```

---

## 📋 Example 3: Show Full Weekly Schedule for a Room

```jsx
import { rooms } from "../data/rooms";
import { getDays } from "../data/data";

export default function RoomSchedule({ roomName }) {
  const room = rooms[roomName]; // e.g., rooms["F003"]

  if (!room) return <p>Room not found</p>;

  const weekDays = getDays(room);

  return (
    <div>
      <h2>{room.name} - Weekly Schedule</h2>

      {weekDays.map(({ day, timeSlots }) => (
        <div key={day}>
          <h3>{day}</h3>
          {timeSlots?.map((slot, i) => (
            <div key={i}>
              <span>
                {slot.timeStart.hour}:
                {slot.timeStart.minute.toString().padStart(2, "0")} -
                {slot.timeEnd.hour}:
                {slot.timeEnd.minute.toString().padStart(2, "0")}
              </span>
              <span className={slot.courseName === "Free" ? "free" : "busy"}>
                {slot.courseName}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
```

---

## 🎯 **Recommended Next Steps:**

### Option 1: **Upgrade Room Availability Page** (Easiest)

Replace your dummy `availableRooms` array with real data from `rooms.ts`:

```jsx
import { rooms } from "../data/rooms";

// Instead of hardcoded array, use:
const availableRooms = Object.values(rooms).slice(0, 6);
```

### Option 2: **Add Time-Based Search** (More Advanced)

Let students search "Show me rooms free at 10:30 AM on Sunday"

### Option 3: **Building/Corner Filter** (Professional)

Use the `corners` data to filter by building with Google colors

---

## 🚀 **Benefits:**

1. ✅ **Real data** instead of dummy data
2. ✅ **Searchable** by time, day, building
3. ✅ **Dynamic** - shows actual FREE periods
4. ✅ **Professional** - uses actual campus schedule
5. ✅ **Scalable** - 100+ rooms already in the data!

---

## ⚠️ **Note:**

The files are in TypeScript (`.ts`), but you can still use them in your `.jsx` files! Just import them normally:

```jsx
import { rooms } from "../data/rooms";
```

React/Vite will handle the TypeScript files automatically. No changes needed!
