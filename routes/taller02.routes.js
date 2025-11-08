// routes/taller02.routes.js

const express = require('express');
const router = express.Router();

// 1. Importamos las funciones del Taller-02.js
const { findMax, includes, sum, missingNumbers } = require('../Taller-02.js');

// --- Endpoint para findMax ---
// Esta ruta será: POST http://localhost:3000/taller2/findmax
router.post('/findmax', (req, res) => {
    // Estas funciones esperan un array (arreglo)
    const { arr } = req.body;

    if (!arr || !Array.isArray(arr)) {
        return res.status(400).json({ error: 'Se necesita un array "arr" en el body' });
    }
    const resultado = findMax(arr);
    res.json({ resultado: resultado });
});

// --- Endpoint para includes ---
// Esta ruta será: POST http://localhost:3000/taller2/includes
router.post('/includes', (req, res) => {
    // Esta función espera un array y un número
    const { arr, num } = req.body;

    if (!arr || !Array.isArray(arr) || num === undefined) {
        return res.status(400).json({ error: 'Se necesitan "arr" (array) y "num" (número) en el body' });
    }
    const resultado = includes(arr, num);
    res.json({ resultado: resultado });
});

// --- Endpoint para sum ---
// Esta ruta será: POST http://localhost:3000/taller2/sum
router.post('/sum', (req, res) => {
    const { arr } = req.body;

    if (!arr || !Array.isArray(arr)) {
        return res.status(400).json({ error: 'Se necesita un array "arr" en el body' });
    }
    const resultado = sum(arr);
    res.json({ resultado: resultado });
});

// --- Endpoint para missingNumbers ---
// Esta ruta será: POST http://localhost:3000/taller2/missing
router.post('/missing', (req, res) => {
    const { arr } = req.body;

    if (!arr || !Array.isArray(arr)) {
        return res.status(400).json({ error: 'Se necesita un array "arr" en el body' });
    }
    const resultado = missingNumbers(arr);
    res.json({ resultado: resultado });
});


// 3. Exportamos el router
module.exports = router;