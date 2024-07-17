// Membaca isi file dari text.txt
const fs = require('fs');
const fileBuffer = fs.readFileSync('text.txt', 'utf8');
console.log(fileBuffer);