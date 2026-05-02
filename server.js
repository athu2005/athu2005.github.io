const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Security and Performance Middleware
app.use(helmet());
app.use(compression({ level: 9, threshold: 1024 }));

// Cache static assets for 1 year (31536000 seconds)
app.use(express.static(path.join(__dirname, 'docs'), {
  maxAge: '1y',
  etag: false
}));

// Cache HTML pages for 1 hour
app.use((req, res, next) => {
  if (req.url.endsWith('.html') || req.url === '/') {
    res.set('Cache-Control', 'public, max-age=3600');
  }
  next();
});

// Set security headers for faster rendering
app.use((req, res, next) => {
  res.set('X-Content-Type-Options', 'nosniff');
  res.set('X-Frame-Options', 'DENY');
  res.set('X-XSS-Protection', '1; mode=block');
  next();
});

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'docs', 'index.html'));
});

app.get('/project-mobility', (req, res) => {
  res.sendFile(path.join(__dirname, 'docs', 'project-mobility.html'));
});

app.get('/project-gripper', (req, res) => {
  res.sendFile(path.join(__dirname, 'docs', 'project-gripper.html'));
});

app.get('/project-sixstroke', (req, res) => {
  res.sendFile(path.join(__dirname, 'docs', 'project-sixstroke.html'));
});

app.get('/project-hvac', (req, res) => {
  res.sendFile(path.join(__dirname, 'docs', 'project-hvac.html'));
});

app.get('/project-battery', (req, res) => {
  res.sendFile(path.join(__dirname, 'docs', 'project-battery.html'));
});

app.get('/project-ecocombust', (req, res) => {
  res.sendFile(path.join(__dirname, 'docs', 'project-ecocombust.html'));
});

// 404 handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'docs', 'index.html'));
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
  console.log(`🚀 Portfolio server running at http://localhost:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
