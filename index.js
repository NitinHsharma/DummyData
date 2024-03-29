const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/data', (req, res) => {
    const types = ['cash', 'noluck', 'draw again'];
    const randomDataLength = Math.floor(Math.random() * 4) + 6; // Random number between 6 and 9
    const data = [];

    for (let i = 0; i < randomDataLength; i++) {
        const type = types[Math.floor(Math.random() * types.length)];
        let amount;

        if (type === 'cash') {
            amount = Math.floor(Math.random() * 100); // For 'cash', the amount is any number 0-99
        } else if (type === 'draw again') {
            amount = Math.floor(Math.random() * 10); // For 'draw again', the amount is in single digit (0-9)
        } else {
            amount = 0; // For 'noluck', the amount is always 0
        }

        data.push({ id: i + 1, type, amount });
    }

    // Send the response
    res.json({
        status: 'success',
        data: data
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
