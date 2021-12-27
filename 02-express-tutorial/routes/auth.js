const express = require('express');
const router = express.Router();
const { people } = require('../data');

router.post('/', (req, res) => {
    console.log(req.body);
    req.body.name = req.body.name.toLowerCase();
    const { name } = req.body;
    if (name !== "") {
        const person = people.find(person => person.name === name);
        if (person) {
            res.status(200).json({ success: true, data: person });
        } else {
            res.status(404).json({ success: false, message: 'User not found' });
        }
    } else {
        res.status(400).json({ success: false, message: 'Please enter a name' });
    }
    res.end();
})

module.exports = router;