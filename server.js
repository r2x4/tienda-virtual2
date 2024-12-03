const express = require('express');
const path = require('path');
const fs = require('fs');
const XLSX = require('xlsx');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/crear-usuario', (req, res) => {
    const { usuario, password } = req.body;
    const filePath = path.join(__dirname, 'usuarios.xlsx');
    let usuarios = [];

    if (fs.existsSync(filePath)) {
        const wb = XLSX.readFile(filePath);
        const ws = wb.Sheets['Usuarios'];
        usuarios = XLSX.utils.sheet_to_json(ws);
    }

    usuarios.push({ usuario, password });

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(usuarios);
    XLSX.utils.book_append_sheet(wb, ws, 'Usuarios');
    XLSX.writeFile(wb, filePath);

    res.send({ message: 'Usuario creado y datos guardados en Excel', usuarios });
});

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

const port = 7000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});


