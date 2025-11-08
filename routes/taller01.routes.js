// routes/taller01.routes.js

const express = require('express');
const router = express.Router();

// 1. Importamos las funciones que exportamos en Taller-01.js
// El '../' significa que subimos un nivel (salimos de 'routes') para encontrar el archivo.
const { Fah, cuadratica, Mparidad, Pparidad } = require('../Taller-01.js');

// 2. Creamos los endpoints. El taller pide que TODOS sean POST.

// --- Endpoint para la función Fah ---
// Esta ruta será: POST http://localhost:3000/taller1/fahrenheit
router.post('/fahrenheit', (req, res) => {
    // 'req.body' contiene los datos JSON que nos envían
    const { c } = req.body; // Extraemos la variable 'c' del body

    // Validamos que nos enviaron el dato
    if (c === undefined) {
        return res.status(400).json({ error: 'Falta el parámetro "c" en el body' });
    }

    // Usamos la función importada
    const resultado = Fah(c);

    // Enviamos la respuesta en formato JSON
    res.json({ resultado: resultado });
});

// --- Endpoint para la función cuadratica ---
// Esta ruta será: POST http://localhost:3000/taller1/cuadratica
router.post('/cuadratica', (req, res) => {
    // Extraemos las 4 variables que necesita la función
    const { a, b, c, h } = req.body;

    // Validamos
    if (a === undefined || b === undefined || c === undefined || h === undefined) {
        return res.status(400).json({ error: 'Faltan parámetros (a, b, c, h) en el body' });
    }

    // Usamos la función
    const resultado = cuadratica(a, b, c, h);

    // Respondemos
    res.json({ resultado: resultado });
});

// --- Endpoint para la función Mparidad ---
// Esta ruta será: POST http://localhost:3000/taller1/mparidad
router.post('/mparidad', (req, res) => {
    const { Num } = req.body; // La variable debe llamarse igual que en la función

    if (Num === undefined) {
        return res.status(400).json({ error: 'Falta el parámetro "Num" en el body' });
    }
    const resultado = Mparidad(Num);
    res.json({ resultado: resultado });
});

// --- Endpoint para la función Pparidad ---
// Esta ruta será: POST http://localhost:3000/taller1/pparidad
router.post('/pparidad', (req, res) => {
    const { num } = req.body; // La variable debe llamarse 'num'

    if (num === undefined) {
        return res.status(400).json({ error: 'Falta el parámetro "num" en el body' });
    }
    const resultado = Pparidad(num);
    res.json({ resultado: resultado });
});


// 3. Exportamos el router para que index.js pueda usarlo
module.exports = router;