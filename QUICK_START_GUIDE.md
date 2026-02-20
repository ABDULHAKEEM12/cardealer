# APEX Motors - Quick Start Guide

## 🎬 Video Hero Section

The homepage now features a stunning full-screen video background:

- **Video**: Luxury car driving footage
- **Auto-play**: Starts when page loads
- **Quality**: 1920x1080 HD
- **Features**: Muted, looping, responsive

### How to Change Video:

Edit line 44 in `car.html`:

```html
<source src="YOUR_VIDEO_URL_HERE" type="video/mp4" />
```

---

## 🚗 Vehicle Pages

### How It Works:

1. **Browse**: Click category (Sports, Luxury, SUV) or see all
2. **Preview**: See vehicle thumbnail, specs, price
3. **Details**: Click "View Details" for full page
4. **Contact**: Click "Chat on WhatsApp" directly
5. **Save**: Click heart ❤️ to add to Favorites

### Individual Pages:

Each vehicle has its own page showing:

- Full specifications
- Performance metrics
- Feature list
- Pricing
- Direct WhatsApp link

**Example**: `vehicle-detail.html?id=1`

---

## ❤️ Favorites Management

### Features:

- Click heart to save/unsave vehicles
- Favorites persist across sessions
- Dedicated Favorites page
- Quick access to saved vehicles
- Heart icon shows count in navbar

### Access:

- Click heart icon in top-right navbar
- Or visit: `favorites.html`

---

## 💬 WhatsApp Integration

### How to Use:

1. Click "Chat on WhatsApp" button anywhere
2. Message auto-fills with vehicle info
3. Opens WhatsApp directly
4. Your phone number: **+2349024836537**

### On Every Page:

- **Inventory cards** - Bottom of each vehicle card
- **Detail page** - Primary action button (green)
- **Favorites** - Bottom of each saved vehicle

### Pre-filled Message Example:

```
Hi APEX Motors! I'm interested in the Ferrari 488 Pista
priced at $650,000. Can you provide more details?
```

---

## 📱 Responsive Design

### Desktop (1200px+)

- Multi-column grids
- Full animations
- Optimal spacing

### Tablet (768px - 1024px)

- 2-column layout
- Adjusted spacing
- Touch-friendly

### Mobile (< 768px)

- Single column
- Larger buttons
- Full-screen video
- Optimized for touch

---

## 📊 Vehicle Database

### Total Vehicles: 27

**Sports** (8 vehicles)

- Ferrari 488 Pista, F8 Tributo, SF90 Stradale
- Lamborghini Huracán, Revuelto
- Porsche 911 Turbo, 911 GT2 RS
- McLaren 720S
- Maserati MC20

**Luxury** (12 vehicles)

- Bugatti Chiron
- Mercedes-AMG (GT, C63, EQS)
- BMW M8, M5
- Rolls-Royce Phantom
- Aston Martin DB12
- Tesla Model S Plaid
- Porsche Panamera Turbo
- Ferrari GTC4Lusso

**SUV** (7 vehicles)

- Range Rover Sport SVR, Velar
- Porsche Cayenne Turbo
- Mercedes-AMG G63
- Aston Martin DBX
- Lamborghini Urus
- Bentley Bentayga

---

## ⚙️ Customization Guide

### Change Contact Phone:

Edit this line in `car.js`:

```javascript
const WHATSAPP_PHONE = "2349024836537";
```

### Modify Vehicle Prices:

Edit `vehicles.json` - find the vehicle and change the `price` field

### Add New Vehicle:

1. Open `vehicles.json`
2. Choose category (sports, luxury, suv)
3. Add new object:

```json
{
  "id": 28,
  "name": "Vehicle Name",
  "category": "luxury",
  "price": 500000,
  "image": "car28.jpg",
  "badge": "Unique Feature",
  "performance": "XXX HP",
  "fuel": "Premium Petrol",
  "seats": 4,
  "transmission": "8-Speed",
  "description": "Description here",
  "features": ["Feature1", "Feature2"]
}
```

### Change Colors:

Edit CSS variables in `car.css`:

```css
--primary-dark: #1a1a1a; /* Background */
--accent-crimson: #e63946; /* Red accent */
--accent-gold: #d4af37; /* Gold accent */
```

---

## 🚀 Features Overview

✅ **Full-screen hero video**  
✅ **27 premium vehicles**  
✅ **Categorized browsing** (Sports, Luxury, SUV)  
✅ **Individual detail pages** (not modals)  
✅ **Persistent favorites** (using localStorage)  
✅ **Direct WhatsApp chat** (+2349024836537)  
✅ **Responsive design** (mobile, tablet, desktop)  
✅ **Smooth animations** (optimized)  
✅ **Professional styling** (Playfair Display + Poppins fonts)  
✅ **Fast loading** (optimized media)

---

## 📞 Support

For questions about WhatsApp messaging:

- Number: **+2349024836537**
- Message format: Automatic with vehicle details
- Response time: Depends on your team availability

---

## 🎨 Design System

### Typography:

- **Display**: Playfair Display (elegant serifs)
- **Body**: Poppins (modern, clean)

### Color Palette:

- **Primary Dark**: #1a1a1a (backgrounds)
- **Crimson Red**: #e63946 (accents, CTAs)
- **Gold**: #d4af37 (premium accents)
- **White/Gray**: Text and borders

### Spacing:

- Large sections: 100px padding
- Components: 20-40px gaps
- Mobile: Reduced padding

---

## 📁 File Reference

| File                  | Purpose                  |
| --------------------- | ------------------------ |
| `car.html`            | Main inventory page      |
| `car.js`              | Core functionality       |
| `car.css`             | All styling              |
| `vehicle-detail.html` | Individual vehicle pages |
| `favorites.html`      | Saved vehicles           |
| `vehicles.json`       | Vehicle database         |
| `car*.jpg`            | Vehicle images           |

---

**Ready to launch!** 🚀  
All features are production-ready and tested.
