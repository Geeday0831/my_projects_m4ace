const express = require('express');
const app = express();

app.get('/books', (req, res) => {
    const books = [
        {id : 1, tittle : 'dont be sad'},
        {id : 2, tittle : 'things fall apart'},
        {id : 3, tittle : 'beautiful beginnings'}
    ];
    res.json(books);
});

const  PORT = 3000;
app.listen(PORT, () => console.log('server running at 3000'));