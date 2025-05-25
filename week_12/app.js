const express = require('express');

const app = express();
const usersRouter = require('./routes/users_routes');

app.use(usersRouter);
app.get('/', (req, res) => {
    res.send('Welcome to the home page');
});

app.all('*', (req, res) => {
    res.status(404).send('404 - Page Not Found');
});


app.listen(3000, () => {
    console.log('Server currently running at PORT 3000');
});

