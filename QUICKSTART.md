# 🚀 Quick Start Guide - VibeWave

## Getting Started in 3 Simple Steps

### Option 1: Direct Opening (Simplest)
1. Navigate to the `vibewave` folder on your Desktop
2. Double-click on `index.html`
3. The website will open in your default browser

### Option 2: Using a Local Server (Recommended for Development)

#### Using Python (if installed):
```bash
cd C:\Users\Administrator\Desktop\vibewave
python -m http.server 8000
```
Then open: http://localhost:8000

#### Using Node.js (if installed):
```bash
cd C:\Users\Administrator\Desktop\vibewave
npx http-server
```
Then open: http://localhost:8080

#### Using VS Code Live Server:
1. Open the `vibewave` folder in VS Code
2. Install "Live Server" extension
3. Right-click on `index.html`
4. Select "Open with Live Server"

## 🎯 Features to Explore

### 1. Homepage (index.html)
- ✅ Hero section with cinematic banner
- ✅ Multiple movie carousels
- ✅ Horizontal scrolling with arrow controls
- ✅ Hover effects on movie cards
- ✅ Search functionality
- ✅ Theme toggle (dark/light mode)

### 2. Movies Page (movies.html)
- ✅ Complete movie catalog
- ✅ Filter by genre and year
- ✅ Sort by rating, title, or year
- ✅ Grid layout view

### 3. TV Shows Page (tvshows.html)
- ✅ TV shows catalog
- ✅ Episode count display
- ✅ Filter and sort options

### 4. Contact Page (contact.html)
- ✅ Working contact form
- ✅ Form validation
- ✅ Success message on submission

### 5. About Page (about.html)
- ✅ Company information
- ✅ Statistics showcase
- ✅ Features overview
- ✅ Company values

## 🎨 Interactive Elements to Try

1. **Theme Toggle**: Click the moon/sun icon in the navbar
2. **Search**: Type in the search bar to filter content
3. **Movie Cards**: Hover over any movie card to see effects
4. **Movie Details**: Click any movie card to open the modal
5. **Scroll Controls**: Use arrow buttons to scroll movie rows
6. **Mobile Menu**: Resize window < 768px to see hamburger menu
7. **Filters**: Try filtering movies by genre or year
8. **Contact Form**: Fill and submit the contact form

## 📱 Test Responsive Design

### Desktop View (> 1024px)
- Full navigation bar
- Multiple columns in grid
- All features visible

### Tablet View (768px - 1024px)
- Adjusted layouts
- Responsive grids
- Optimized spacing

### Mobile View (< 768px)
- Hamburger menu
- Single column layout
- Touch-optimized buttons
- Simplified search

## 🔧 Browser Developer Tools

Press `F12` or `Ctrl+Shift+I` to open developer tools and:
- **Console**: See initialization messages
- **Network**: Watch assets load
- **Elements**: Inspect HTML/CSS
- **Application**: Check localStorage (theme setting)
- **Responsive Mode**: Test different screen sizes

## ✨ Quick Tips

1. **Theme Persists**: Your theme choice is saved in localStorage
2. **Search is Live**: Results update as you type (300ms debounce)
3. **Smooth Scrolling**: Click arrow buttons for smooth scroll
4. **Modal Controls**: 
   - Click overlay to close
   - Click X button to close
   - Press ESC key to close
5. **No Backend Required**: Pure HTML/CSS/JS - works offline!

## 🎯 File Structure Reminder

```
vibewave/
├── index.html          ← Start here!
├── movies.html         ← All movies
├── tvshows.html        ← TV shows
├── contact.html        ← Contact form
├── about.html          ← About us
├── style.css           ← All styles
├── script.js           ← All functionality
├── hero-banner.png     ← Hero image
└── README.md           ← Full documentation
```

## 🐛 Troubleshooting

### Images Not Loading?
- Check that `hero-banner.png` is in the vibewave folder
- Movie posters use Picsum (requires internet)

### JavaScript Not Working?
- Check browser console (F12) for errors
- Ensure script.js is in the same folder
- Try hard refresh (Ctrl+F5)

### Styles Look Wrong?
- Verify style.css is loading
- Check browser console for CSS errors
- Try clearing browser cache

### Search Not Working?
- Type at least one character
- Wait for 300ms debounce
- Check console for errors

## 🎓 What You'll Learn

By exploring this project:
- ✅ Modern HTML5 structure
- ✅ CSS Grid and Flexbox layouts
- ✅ CSS Variables for theming
- ✅ JavaScript DOM manipulation
- ✅ Event handling and delegation
- ✅ LocalStorage API
- ✅ Intersection Observer API
- ✅ Responsive design principles
- ✅ Animation and transitions
- ✅ Clean code practices

## 🌟 Next Steps

1. Explore all pages
2. Try all interactive features
3. Inspect the code
4. Customize colors and content
5. Add your own movies
6. Experiment with new features

---

**Enjoy VibeWave! 🎬✨**

For detailed information, see `README.md`
