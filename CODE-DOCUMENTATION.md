# Campus Navigation - Code Documentation

## 🏗️ Architecture Overview

### Component Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation header with routing
│   ├── Footer.jsx      # Site footer with GDG branding
│   └── Navigation.jsx  # (Legacy - removed from Home)
├── screens/            # Page-level components
│   ├── Home.jsx        # Landing page
│   ├── SearchRoom.jsx  # Room search functionality
│   ├── SearchOffice.jsx # Office search functionality
│   └── RoomAvailability.jsx # Real-time availability tracker
├── data/               # Data layer
│   ├── rooms.ts        # 100+ rooms with full schedules
│   └── data.ts         # Building/corner data & utilities
└── App.jsx            # Main routing configuration
```

## 📊 Data Schema

### Room Interface

```typescript
interface Room {
  name: string; // Room identifier (e.g., "F003")
  sunday: TimeSlot[] | null; // Schedule for each day
  monday: TimeSlot[] | null;
  tuesday: TimeSlot[] | null;
  wednesday: TimeSlot[] | null;
  thursday: TimeSlot[] | null;
}

interface TimeSlot {
  timeStart: TimeOfDay;
  timeEnd: TimeOfDay;
  courseName: string; // Course or "Free"
}
```

## 🎯 Key Features

### 1. Real-Time Room Availability

- **Function:** `isRoomFreeNow()`
- **Logic:** Compares current time against room schedules
- **Performance:** Uses `useMemo` for efficient filtering

### 2. Building Filter

- **Data Source:** `corners` array from data.ts
- **Implementation:** Google-colored buttons (Blue/Red/Yellow/Green)
- **Filter Logic:** Matches room name prefix (E/F/G/H)

### 3. Time-Based Search

- **Function:** `isRoomFreeAtTime()`
- **Input:** Day (0-4) + Time (HH:MM)
- **Output:** Filtered list of available rooms

## 🎨 Styling Conventions

### CSS Organization

- Global styles in `App.css`
- BEM-like naming: `.component-element-modifier`
- Modern features: Gradients, glassmorphism, animations

### Color Palette

- Primary: `#ff8c42` (Orange)
- Google Colors for buildings
- Dark theme: `#000`, `#1a1a1a`, `#2a2a2a`

## 🔄 State Management

### RoomAvailability Component State

```javascript
const [selectedBuilding, setSelectedBuilding] = useState("ALL");
const [searchTime, setSearchTime] = useState("");
const [searchDay, setSearchDay] = useState("");
const [selectedRoom, setSelectedRoom] = useState(null);
const [showAvailableOnly, setShowAvailableOnly] = useState(false);
```

### Performance Optimization

- `useMemo` for expensive filtering operations
- `useEffect` for scroll lock on modal open
- Lazy loading with React Router code splitting

## 🚀 Development Best Practices

### Code Quality Standards

1. **Component Organization:** Single responsibility principle
2. **Prop Types:** Use TypeScript interfaces where applicable
3. **Error Handling:** Graceful degradation for missing data
4. **Accessibility:** ARIA labels, semantic HTML
5. **Performance:** Memoization, efficient re-renders

### Git Workflow

- Feature branches for new development
- Descriptive commit messages
- Regular commits with atomic changes

## 📱 Responsive Design

### Breakpoints

- Mobile: `max-width: 480px`
- Tablet: `max-width: 768px`
- Desktop: `min-width: 769px`

### Mobile Adaptations

- Stacked navigation on small screens
- Flexible grid layouts
- Touch-friendly button sizes (min 44px)

## 🔐 Security Considerations

1. **External Links:** Use `rel="noopener noreferrer"`
2. **Input Sanitization:** Validate search queries
3. **XSS Prevention:** React's automatic escaping

## 🧪 Testing Recommendations

### Unit Tests (To Implement)

- Test `isRoomFreeNow()` with mock times
- Test filtering logic with sample data
- Test modal open/close functionality

### Integration Tests

- Test navigation between pages
- Test search functionality end-to-end
- Test responsive behavior

## 📈 Future Enhancements

### Planned Features

1. Real backend API integration
2. User authentication for personalized schedules
3. Calendar export functionality
4. Room booking system
5. Push notifications for availability changes

### Database Migration

- Current: TypeScript data files
- Future: PostgreSQL/Firebase for dynamic updates
- API layer: REST or GraphQL

## 📚 Dependencies

### Core

- React 19.1.1
- React Router DOM 7.9.5
- Vite 7.1.7

### Development

- ESLint for code quality
- Prettier for formatting (recommended to add)

## 🤝 Contributing Guidelines

1. Follow existing code structure
2. Add comments for complex logic
3. Update this documentation for major changes
4. Test responsiveness on multiple devices
5. Ensure accessibility standards (WCAG 2.1 AA)

## 📞 Support & Contact

- GDG on Campus - Al Yamamah University
- Email: gdsc@u.edu.sa
- Team: Amro Elian, Abdullah Meraj, Ruqaya Siddiq
