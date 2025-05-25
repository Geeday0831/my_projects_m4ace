const express = require('express');
const router = express.Router();

router.get('/users/id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId} recieved from user`);
});

router.get('/users', (req, res) => {
    const name = req.query.name;
    const age = req.query.age;
    res.send(`User name: ${name}, User age: ${age} recieved from user`);
});

module.exports = router;