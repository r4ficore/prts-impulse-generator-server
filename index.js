const express = require('express');
const app = express();
app.use(express.json());

app.post('/generate', (req, res) => {
    const { recipient_id, pulse_text, pulse_type, valid_until } = req.body;

    if (!recipient_id || !pulse_text || !pulse_type) {
        return res.status(400).json({ success: false, message: "Brakuje wymaganych pól." });
    }

    const pulse = {
        recipient_id,
        pulse_text,
        pulse_type,
        valid_until: valid_until || null
    };

    res.json({ success: true, pulse });
});

app.get('/', (req, res) => {
    res.send('PRTS Impulse Generator API is live!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`PRTS Impulse Generator running on port ${port}`);
});
