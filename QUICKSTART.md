# Quick Start Guide

## 📦 Setup in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Server
```bash
npm start        # Production
npm run dev      # Development (auto-reload)
```

### 3. Open Browser
```
http://localhost:3000
```

## 🚀 Key Features

| Feature | Benefit |
|---------|---------|
| **Express.js Server** | Professional Node.js backend |
| **Gzip Compression** | 70% smaller file transfers |
| **Smart Caching** | 1 year for assets, 1 hour for HTML |
| **Fast Animations** | 150-500ms durations (60fps) |
| **Image Placeholders** | Shimmer effects, no layout shift |
| **Security Headers** | Helmet.js protection included |
| **Mobile Optimized** | Responsive, touch-friendly |
| **Production Ready** | Battle-tested stack |

## 📊 Performance Optimizations Applied

### CSS
- ✅ Reduced animation duration: `300ms → 150ms` base
- ✅ Added `will-change: transform` for GPU acceleration
- ✅ Used `transform` instead of `top/left` for smooth rendering
- ✅ Removed expensive animations on hover
- ✅ Added `prefers-reduced-motion` support

### JavaScript
- ✅ RequestAnimationFrame for scroll events (throttled)
- ✅ Intersection Observer for lazy animations
- ✅ Passive event listeners
- ✅ Deferred script loading (`defer` attribute)
- ✅ RequestIdleCallback for non-critical tasks

### Network
- ✅ Gzip compression enabled
- ✅ Long-term caching for assets
- ✅ Preload critical fonts
- ✅ Minimal CSS bundle size
- ✅ Optimized JavaScript (~20KB gzipped)

### Images
- ✅ Gradient-based placeholders (no large files)
- ✅ Responsive sizing
- ✅ Shimmer animation effect
- ✅ Ready for real images when needed

## 🔧 Configuration

### Change Port
Edit `server.js`:
```javascript
const PORT = process.env.PORT || 3000;  // Change 3000 to desired port
```

### Add Environment
Create `.env`:
```
PORT=5000
NODE_ENV=production
```

## 📁 File Structure

```
public/
├── index.html              # Main page (26KB)
├── project-*.html          # 6 project pages (~15KB each)
├── styles.css              # Optimized styles (22KB)
└── script.js               # Performance JS (4KB)

server.js                    # Express app
package.json                # Dependencies
```

## ⚡ Next Steps

1. **Add Real Images**
   - Replace `.image-placeholder` divs with `<img>` tags
   - Optimize images to <100KB each
   - Use WebP with fallback

2. **Deploy**
   ```bash
   # Heroku
   npm install -g heroku
   heroku login
   heroku create
   git push heroku main
   
   # Or use your preferred platform
   ```

3. **Monitor Performance**
   - Use PageSpeed Insights
   - Check Core Web Vitals
   - Monitor with New Relic

4. **Update Content**
   - Edit project descriptions
   - Add your social links
   - Update contact information

## 📈 Performance Checklist

- [x] Express.js server setup
- [x] Gzip compression enabled
- [x] Cache headers configured
- [x] Security headers (Helmet.js)
- [x] Optimized CSS animations (fast)
- [x] Responsive images (placeholders)
- [x] Mobile-first design
- [x] Accessibility features
- [x] SEO meta tags
- [x] Fast JavaScript

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <pid> /F

# Mac/Linux
lsof -i :3000
kill -9 <pid>
```

### Module Not Found
```bash
rm -rf node_modules
npm install
```

### Slow Performance
```bash
# Check compression
curl -I http://localhost:3000
# Should show: Content-Encoding: gzip
```

## 📞 Support

- Documentation: See README_NODE.md
- GitHub Issues: Create an issue
- Email: atharv.jangale@iitb.ac.in

---

**Now running at:** http://localhost:3000 🚀
