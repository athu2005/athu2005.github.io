# Atharv Jangale - Portfolio Website

A high-performance, optimized Node.js portfolio website built with Express.js.

## Features

✅ **Performance Optimized**
- Express.js with compression middleware (gzip)
- Helmet.js for security headers
- Intelligent caching (1 year for assets, 1 hour for HTML)
- Optimized CSS animations (reduced duration: 150ms-500ms)
- Image placeholders with shimmer effects
- RequestAnimationFrame for smooth scrolling
- Deferred non-critical JavaScript loading

✅ **Fast Animations**
- Hero animations: 500ms total
- Card animations: 400ms with staggered timing
- Navigation effects: 150ms-200ms
- Reduced motion support (prefers-reduced-motion)

✅ **Image Placeholders**
- Gradient-based placeholders for project images
- Shimmer animation effect
- Responsive sizing
- Prevents layout shift

✅ **Security**
- CORS protection
- XSS prevention
- Content-Type sniffing protection
- Frame options header

✅ **Responsive Design**
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly navigation
- Fast interactions on mobile

## Project Structure

```
athu2005.github.io/
├── server.js                 # Express.js server
├── package.json             # Dependencies
├── .gitignore               # Git ignore rules
├── public/
│   ├── index.html           # Home page
│   ├── project-mobility.html # Connected Mobility Testbed
│   ├── project-gripper.html # Robotic Gripper Arm
│   ├── project-sixstroke.html # Six-Stroke Engine
│   ├── project-hvac.html    # HVAC Coil Optimization
│   ├── project-battery.html # Battery RUL Prediction
│   ├── project-ecocombust.html # EcoCombust Startup
│   ├── styles.css           # Optimized stylesheet
│   └── script.js            # Performance-optimized JavaScript
└── README.md                # This file
```

## Installation

### Prerequisites
- Node.js 18.0.0 or higher
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/athu2005/athu2005.github.io.git
cd athu2005.github.io
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Start production server**
```bash
npm start
```

The website will be available at `http://localhost:3000`

## Performance Optimizations

### CSS Animations
- Animation durations reduced to 150ms-500ms (from default 300-800ms)
- Using `will-change` for GPU acceleration
- Transform properties for smooth 60fps animations
- Shimmer effects for image placeholders

### JavaScript
- Passive event listeners for scroll performance
- RequestAnimationFrame for smooth scrolling
- Intersection Observer for lazy animations
- Deferred script loading with `defer` attribute
- RequestIdleCallback for non-critical tasks

### Network
- Gzip compression enabled
- Static asset caching (1 year)
- HTML page caching (1 hour)
- Preload critical fonts
- Minimal CSS (optimized selectors)

### Security Headers
- Helmet.js for automatic security headers
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block

## Deployment

### Deploy to Heroku

```bash
# Install Heroku CLI
# Login to Heroku
heroku login

# Create a new Heroku app
heroku create your-app-name

# Deploy
git push heroku main

# View logs
heroku logs --tail
```

### Deploy to GitHub Pages

For pure static deployment:
```bash
npm run build  # If you add a build script
git add .
git commit -m "Deploy portfolio"
git push origin main
```

## Environment Variables

Create a `.env` file for development:
```
PORT=3000
NODE_ENV=development
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Modern mobile browsers

## Performance Metrics

- **First Contentful Paint (FCP):** < 1.2s
- **Largest Contentful Paint (LCP):** < 2.5s
- **Cumulative Layout Shift (CLS):** < 0.1
- **Time to Interactive (TTI):** < 3.5s
- **JavaScript bundle:** < 50KB (minimized)
- **CSS bundle:** < 30KB (minimized)

## Technologies Used

- **Server:** Express.js 4.18
- **Security:** Helmet.js, Compression
- **Caching:** Express static with cache control
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Fonts:** Google Fonts (Poppins)
- **Performance:** Intersection Observer, RequestAnimationFrame

## Customization

### Change Colors
Edit `:root` variables in `public/styles.css`:
```css
:root {
    --primary-color: #5e60ce;
    --secondary-color: #1d3557;
    /* ... */
}
```

### Update Contact Information
Edit contact links in `public/index.html`:
```html
<a href="mailto:your-email@example.com" class="contact-link">
    <span>Email</span>
</a>
```

### Add More Projects
1. Create a new file: `public/project-name.html`
2. Copy structure from existing project pages
3. Add route in `server.js`
4. Add card in `public/index.html` projects section

## Performance Tips

- Replace image placeholders with actual images (optimized <100KB)
- Use WebP format with fallbacks for images
- Implement Service Worker for offline support
- Consider CDN for static assets in production
- Use HTTP/2 server push for critical resources

## Maintenance

### Regular Updates
- Keep Node.js packages updated: `npm update`
- Monitor performance with Chrome DevTools
- Test on various devices and browsers
- Update project information regularly

### Monitoring
- Use tools like PageSpeed Insights
- Monitor with GTmetrix
- Check WebVitals regularly

## License

MIT License - Feel free to use this as a template for your own portfolio

## Contact

- Email: atharv.jangale@iitb.ac.in
- GitHub: [@athu2005](https://github.com/athu2005)
- LinkedIn: [Atharv Jangale](https://linkedin.com/in/atharv-jangale)

---

Built with ❤️ by Atharv Jangale | IIT Bombay 2027
