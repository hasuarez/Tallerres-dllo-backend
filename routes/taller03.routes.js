// routes/taller03.routes.js

const express = require('express');
const router = express.Router();

// 1. Importamos las funciones del Taller-03.js
const { desglosarString, twoSum, conversionRomana, descomposicion } = require('../Taller-03.js');

// --- Endpoint para desglosarString ---
// Esta ruta será: POST http://localhost:3000/taller3/desglosar
router.post('/desglosar', (req, res) => {
    // Necesita un string 'str' y la palabra 'Letra' ("vocales" o "consonantes")
    const { str, Letra } = req.body;

    if (!str || !Letra) {
        return res.status(400).json({ error: 'Se necesitan "str" y "Letra" en el body' });
    }
    const resultado = desglosarString(str, Letra);
    res.json({ resultado: resultado });
});

// --- Endpoint para twoSum ---
// Esta ruta será: POST http://localhost:3000/taller3/twosum
router.post('/twosum', (req, res) => {
    const { arr, num } = req.body;

    if (!arr || !Array.isArray(arr) || num === undefined) {
        return res.status(400).json({ error: 'Se necesitan "arr" (array) y "num" (número) en el body' });
    }
    const resultado = twoSum(arr, num);
    res.json({ resultado: resultado });
});

// --- Endpoint para conversionRomana ---
// Esta ruta será: POST http://localhost:3000/taller3/romana
router.post('/romana', (req, res) => {
    const { str } = req.body;

    if (!str) {
        return res.status(400).json({ error: 'Se necesita "str" en el body' });
    }
    const resultado = conversionRomana(str);
    res.json({ resultado: resultado });
});

// --- Endpoint para descomposicion ---
// Esta ruta será: POST http://localhost:3000/taller3/descomposicion
router.post('/descomposicion', (req, res) => {
    const { str } = req.body; // Recibe el string largo separado por comas

    if (!str) {
        return res.status(400).json({ error: 'Se necesita "str" en el body' });
    }
    const resultado = descomposicion(str);
    res.json({ resultado: resultado });
});


// 3. Exportamos el router
module.exports = router;