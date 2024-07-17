// Program menggunakan loop forEach untuk mencetak angka 1 sampai 10

// Menggunakan Increment
let counter = 1;
const bound = Array(10).fill();

bound.forEach(() => {
    console.log(counter);
    counter++;
});

// Menggunakan Array yang sudah didefinisikan
const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arrNumber.forEach((number) => {
    console.log(`${number}`)
});