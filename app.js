const express = require('express');
const app = express();
const port = 3000;

let currentColor = 'grey';

app.use(express.json());
app.use(express.static('public'));

app.get('/api/status', (req, res) => {
    res.json({ color: currentColor });
});

app.post('/api/status', (req, res) => {
    const { color } = req.body;
    if (['green', 'grey', 'red'].includes(color)) {
        currentColor = color;
        res.json({ success: true, color: currentColor });
    } else {
        res.status(400).json({ error: 'Invalid color. Use green, grey, or red.' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});