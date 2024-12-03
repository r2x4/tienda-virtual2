const express = require('express');
const path = require('path');
const app = express();

// Servir archivos estáticos desde la carpeta 'build'
app.use(express.static(path.join(__dirname, 'build')));

// Redirigir cualquier solicitud a 'index.html' (para aplicaciones SPA)
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configura el puerto en el que escuchará el servidor
app.listen(5000, () => {
  console.log('Servidor corriendo en http://localhost:5000');
});