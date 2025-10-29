# 🚀 Quick Start Guide

## Your Campus Navigation Website is Ready!

### ✅ What's Working:

- ✅ All 4 pages (Home, SearchRoom, SearchOffice, RoomAvailability)
- ✅ React Router navigation between pages
- ✅ Search functionality with dummy data
- ✅ Professional CSS styling
- ✅ Responsive design
- ✅ Dev server running at: http://localhost:5173/

### 📝 Next Steps:

#### 1️⃣ Test the Website

Open your browser and go to: **http://localhost:5173/**

Try these features:

- Click the orange navigation buttons
- Search for instructors: "Ahmed", "Fatima", "Mohammed", or "Sarah"
- Click on search results to see details
- Check room availability page

#### 2️⃣ Add Your Images

You need 13 images total. See `IMAGES-NEEDED.md` for the complete list.

Place them in the `public/` folder:

```
public/
├── logo.png
├── hero-bg.jpg
├── search-bg.jpg
├── main-building.jpg
├── library-gym.jpg
├── tuwaiq-building.jpg
├── najd-building.jpg
└── room-1.jpg through room-6.jpg
```

#### 3️⃣ Customize Your Data

**Update Instructors** (src/screens/SearchRoom.jsx):

- Edit the `instructorRooms` array with real instructor data
- Update names, buildings, room numbers, office hours

**Update Buildings** (src/screens/Home.jsx):

- Edit building descriptions
- Update building information

**Update Rooms** (src/screens/RoomAvailability.jsx):

- Edit the `availableRooms` array
- Update room names and availability times

#### 4️⃣ Build for Production

When ready to deploy:

```powershell
npm run build
```

The `dist/` folder will contain your production-ready website.

### 🎨 Current Dummy Data:

**Instructors in SearchRoom:**

1. Dr. Ahmed Al-Mansoori (Tuwaiq Building, T211)
2. Dr. Fatima Al-Zahrani (Main Building, M305)
3. Prof. Mohammed Al-Qahtani (Najd Building, N102)
4. Dr. Sarah Al-Mutairi (Library & Gym, LG08)

**Buildings:**

- Main Building (Green)
- Library & Gym (Red)
- Tuwaiq Building (Blue)
- Najd Building (Gold)

### 🔧 Commands:

```powershell
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### 📂 File Structure:

```
CampusNavigation/
├── public/          # Put your images here!
├── src/
│   ├── components/  # Reusable components
│   ├── screens/     # Page components
│   ├── App.jsx      # Router setup
│   └── App.css      # Styling
├── package.json
└── README.md        # Full documentation
```

### 💡 Tips:

- **Images**: Use compressed JPGs (under 500KB each)
- **Logo**: PNG with transparent background works best
- **Data**: Replace dummy data in the screens folder
- **Styling**: Edit `src/App.css` to change colors/layout

### ❓ Need Help?

- Check `README.md` for detailed documentation
- Check `IMAGES-NEEDED.md` for image requirements
- No errors? Run `npm run dev` to start the server

---

**Your website is ready to use!** Just add images and customize the data. 🎉
