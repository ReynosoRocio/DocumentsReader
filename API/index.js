const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'http://localhost:4200' // Reemplaza con tu origen permitido
  }));// Ruta para obtener el archivo PDF
app.get('/archivo/:nombre', (req, res) => {
  const nombreArchivo = req.params.nombre;

  // Comprobar si existe el archivo
  if (nombreArchivo === 'nombre_archivo') {
    const rutaArchivo = 'C:/Users/Rocio/Documents/GitHub/Lector de archivos/DocumentsReader/API/pdfs/nombre_archivo.pdf';

    // Envío del archivo PDF
    res.sendFile(rutaArchivo);
  } else {
    // El archivo no se encontró
    res.status(404).send('Archivo no encontrado');
  }
});

app.get('/archivo2/:nombre', (req, res) => {
    const nombreArchivo = req.params.nombre;
  
    // Comprobar si existe el archivo
    if (nombreArchivo === 'nombre_archivo') {
      const rutaArchivo = 'C:/Users/Rocio/Documents/GitHub/Lector de archivos/DocumentsReader/API/pdfs/nombre_archivo.pdf';
  
      // Envío del archivo PDF
      res.download(rutaArchivo);
    } else {
      // El archivo no se encontró
      res.status(404).send('Archivo no encontrado');
    }
  });
// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});