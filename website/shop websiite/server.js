const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Statische Dateien aus dem aktuellen Ordner bereitstellen
app.use(express.static(__dirname));

// Optional: Auch Config-Ordner bereitstellen, falls er auf gleicher Ebene liegt
app.use('/Config', express.static(path.join(__dirname, '..', '..', 'Config')));

app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}/index.html`);
});