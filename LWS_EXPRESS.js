// ============================================================
// MAASH — Configuration Node.js/Express pour LWS
// ============================================================
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const DIST_DIR = path.join(__dirname, 'dist');

// CORS (pour l'API PROSOC si nécessaire)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', '*');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Compression gzip
app.use((req, res, next) => {
  // Express gère la compression nativement via le middleware
  next();
});

// Serveur statique avec gzipping
app.use(express.static(DIST_DIR, {
  maxAge: '1y',
  etag: false,
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.js') || filePath.endsWith('.css')) {
      res.setHeader('Content-Encoding', 'gzip');
    }
  }
}));

// Priority routes for SPA
app.get('/', (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});

// Vue Router: redirect all routes to index.html
app.get(/^(?!\/api).*/, (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});

// Custom 404 handler (Route non trouvée)
app.use((req, res) => {
  res.status(404).sendFile(path.join(DIST_DIR, 'index.html'));
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).sendFile(path.join(DIST_DIR, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`MAASH site is running on port ${PORT}`);
});
