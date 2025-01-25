const express = require('express');
const fs = require('fs');
const app = express();
const port = 80;

// Middleware para manejar JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta para manejar la carga del formulario
app.post('/guardar-vehiculo', (req, res) => {
  const nuevoVehiculo = req.body;

  // Leer el archivo JSON existente
  fs.readFile('vehiculos.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error al leer el archivo JSON');
    }

    const vehiculos = JSON.parse(data);
    vehiculos.vehiculos.push(nuevoVehiculo);

    // Guardar los datos actualizados en el archivo
    fs.writeFile('vehiculos.json', JSON.stringify(vehiculos, null, 2), (err) => {
      if (err) {
        return res.status(500).send('Error al guardar los datos');
      }
      res.send('Vehículo agregado correctamente');
    });
  });
});

// Servir archivos estáticos (incluye el archivo HTML)
app.use(express.static(__dirname));

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});