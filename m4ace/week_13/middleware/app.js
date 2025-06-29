const express = require('express');

const app = express();

app.use(express.json());

const logger = require('./middleWare/logger');
const errorHandler = require('./middleWare/errorHandler');

app.use(logger);

app.get('/hello', (req,res) =>{
    res.send('hello user'); 
});

app.get('/error', (req,res) =>{
    throw new Error ('soemthing broke');
});

app.use(errorHandler);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server running at 3000`);
});

