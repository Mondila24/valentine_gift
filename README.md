# 💘 Forever Us - Valentine's Gift

A beautiful, interactive Valentine's Day gift webpage with animations, music, and romantic message.

## Features

✨ **Beautiful Design**
- Starry night background with shooting stars
- Netflix-style intro animation
- Smooth transitions and animations

🎁 **Interactive Elements**
- Clickable envelope that opens with animation
- Gift box with 3D transform effects
- Image reveals on envelope opening
- Ring emoji with glowing shine effect
- Floating hearts and rose petals

💬 **Personalized Message**
- Typewriter text animation
- Custom romantic message
- The message types out character by character

🎵 **Audio**
- Background music that plays when envelope is opened
- Built-in autoplay handling for modern browsers

📱 **Responsive Design**
- Fully mobile responsive
- Works on desktop, tablets, and phones
- Optimized for all screen sizes

## Files

```
valentine_gift/
├── index.html          # Main HTML file
├── styles.css          # Styling and animations
├── script.js           # Interactive functionality
├── images/             # Image assets (your photo)
└── mp3/                # Audio files (background music)
```

## How to Use

1. **Edit the content:**
   - Change the name in `index.html` (line with "MY BABY")
   - Replace `images/val.jpeg` with your photo
   - Update the music file path in the audio tag
   - Customize the message text in `script.js`

2. **Run locally:**
   ```bash
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000`

3. **Deploy to Vercel:**
   - Push to GitHub
   - Connect your GitHub repo to Vercel
   - Vercel will auto-deploy on every push

## Customization

### Change the Name
In `index.html`, change:
```html
<div class="name">❤️ MY BABY ❤️</div>
```

### Change the Message
In `script.js`, modify the `text` variable:
```javascript
const text = `Your custom message here...`;
```

### Colors
Edit the color hex codes in `styles.css`:
- Envelope: `#ff4d6d`
- Gift box: `#ff2e63`
- Ribbon: white

## Browser Support

Works on all modern browsers:
- Chrome/Edge
- Firefox
- Safari
- Mobile browsers

## License

Created with love for Valentine's Day 💕
