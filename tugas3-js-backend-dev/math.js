// Fungsi yang menghitung luas lingkaran berdasarkan jari-jari yang diberikan
const phi = 3.14159;
const luasLingkaran = (r) => {
    return phi * (r * r);
}

console.log("Hasil Luas Lingkaran =", luasLingkaran(7));

// Fungsi yang menerima array angka dan mengembalikan array baru dengan angka-angka yang dikuadratkan
const arr = [1, 2, 3, 4, 5]
const arrayKuadrat = (arr) => {
    return arr.map((x) => x * x);
}

console.log("Hasil Array Kuadrat = ", arrayKuadrat(arr));