const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const user_id = "rahul_nanda_18-10-2003"; 
const email = "rahul_nanda@srmist.edu"; 
const roll_number = "RA2111003010216";  

app.post('/bfhl', (req, res) => {
    const data = req.body.data;
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => /^[a-zA-Z]+$/.test(item));
    const highest_alphabet = alphabets.length ? [alphabets.sort().reverse()[0]] : [];

    res.json({
        is_success: true,
        user_id: user_id,
        email: email,
        roll_number: roll_number,
        numbers: numbers,
        alphabets: alphabets,
        highest_alphabet: highest_alphabet
    });
});

app.get('/bfhl', (req, res) => {
    res.json({
        operation_code: 1
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
