// 1. Importar express
const express = require('express');

// 2. Crear una instancia de express
const app = express();

// 3. Definir el puerto
const PORT = 3000; // Puedes usar cualquier puerto, 3000 es común

// 4. Middleware para entender JSON
// Esto es CLAVE para que funcionen los POST con body
app.use(express.json());

// 5. Importar los archivos de rutas
// (Aún no los hemos creado, pero los listamos)
const taller01Routes = require('./routes/taller01.routes.js');
const taller02Routes = require('./routes/taller02.routes.js');
const taller03Routes = require('./routes/taller03.routes.js');

// 6. Usar las rutas
// Le decimos a express que todo lo que empiece con /taller1, lo maneje taller01Routes
app.use('/taller1', taller01Routes);
app.use('/taller2', taller02Routes);
app.use('/taller3', taller03Routes);

// Ruta de bienvenida
app.get('/', (req, res) => {
    res.send('¡Bienvenido al Backend de Talleres!');
});

// 7. Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo exitosamente en http://localhost:${PORT}`);
});