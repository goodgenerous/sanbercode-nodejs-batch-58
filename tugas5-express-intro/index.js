const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware akan dijalankan setiap kali request dijalankan
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

// Untuk mengembalikan json pada soal 1
app.get('/hello', (req, res) => {
    res.json({
        message: 'Success fetch message',
        data: 'Hello World!'
    })
});

// Untuk mengembalikan json pada soal 2
app.get('/user', (req, res) => {
    res.json({
        message: 'Success fetch user',
        data: {
            id: 1,
            name: 'Budi',
            username: 'budidu',
            email: 'budidu@gmail.com'
        }
    })
});

// Middleware untuk mengembalikan file static index.html yang berada di direktori public
app.use('/', express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
});