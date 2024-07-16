// Membaca isi file dari text.txt
const fs = require('fs');
const fileBuffer = fs.readFileSync('./data/text.txt', 'utf8');
console.log(fileBuffer);

// Membuat server HTTP sederhana dengan Node.js yang merespons "Hello, World!" untuk setiap permintaan.
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello, World!'));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// Menjumlahkan dua angka menggunakan module exports
const myModule = require('./data/myModule');
myModule.sumNumber(5, 5);