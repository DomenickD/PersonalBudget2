const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('public'));

app.get('/', (rew, res, next) => {
    res.sendFile(path.join( __dirname, './index.html' ));
    // res.writeHead('Testing');
    console.log('working');
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})