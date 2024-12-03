const express = require('express');
const path = require('path');
const fs = require('fs');
const XLSX = require('xlsx');
const cors = require('cors');  // Para habilitar CORS
const app = express();

// Middleware para habilitar CORS (importante si estás ejecutando React en un puerto diferente)
app.use(cors());

// Middleware para parsear cuerpos de peticiones JSON
app.use(express.json());

// Sirve archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal para servir la página inicial (index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta para crear un usuario y guardarlo en Excel
app.post('/crear-usuario', (req, res) => {
    const { usuario, password } = req.body;

    // Leer los usuarios del archivo Excel si existe
    const filePath = path.join(__dirname, 'usuarios.xlsx');
    let usuarios = [];
    
    if (fs.existsSync(filePath)) {
        const wb = XLSX.readFile(filePath);
        const ws = wb.Sheets['Usuarios'];
        usuarios = XLSX.utils.sheet_to_json(ws);
    }

    // Agregar el nuevo usuario
    usuarios.push({ usuario, password });

    // Crear o actualizar el archivo Excel con los nuevos usuarios
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(usuarios);
    XLSX.utils.book_append_sheet(wb, ws, 'Usuarios');
    
    // Guardar el archivo Excel
    XLSX.writeFile(wb, filePath);

    res.send({ message: 'Usuario creado y datos guardados en Excel', usuarios });
});

// Ruta para obtener los usuarios desde el archivo Excel (para verificación)
app.get('/usuarios', (req, res) => {
    const filePath = path.join(__dirname, 'usuarios.xlsx');
    
    if (fs.existsSync(filePath)) {
        const wb = XLSX.readFile(filePath);
        const ws = wb.Sheets['Usuarios'];
        const usuariosLeidos = XLSX.utils.sheet_to_json(ws);
        res.json(usuariosLeidos);
    } else {
        res.json([]);
    }
});

// El servidor escucha en el puerto 7000
const port = 7000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

