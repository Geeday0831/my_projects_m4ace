const express = require('express');

const app = express();

app.get('/user/:id', (req,res) =>{
    const userId = req.params.id;
    res.send(`user ID recieved: ${userId}`);
});

app.get('/search', (req,res) =>{
    const query = req.query.q;
    if (query) {
        res.send(`search results for: ${query}`);
    } else {
        res.send('no search keyword entered')
    }
});

const PORT = 3000;
app.listen(PORT, () =>{
    console.log('server running at port 3000');
})