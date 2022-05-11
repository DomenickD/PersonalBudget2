const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080;

// app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join( __dirname, './index.html' ));
    // res.send('<h1>Hello from your Express.js server!!</h1>');
    // console.log('working');
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})