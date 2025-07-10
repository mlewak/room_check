const express = require('express');
const router = express.Router();

let circleColor = 'grey'; // Default color

// GET route to serve the web page
router.get('/', (req, res) => {
    res.sendFile('index.html', { root: './public' });
});

// POST route to change the color of the circle
router.post('/color', (req, res) => {
    const { color } = req.body;
    if (['green', 'grey', 'red'].includes(color)) {
        circleColor = color;
        res.status(200).json({ message: 'Color updated', color: circleColor });
    } else {
        res.status(400).json({ message: 'Invalid color' });
    }
});

module.exports = router;