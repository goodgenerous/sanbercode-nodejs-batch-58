// Program struktur kontrol (if else) untuk menentukan apakah angka genap atau ganjil
const x = 10;
let result;

if (x % 2 == 0) {
    result = `Angka ${x} termasuk angka genap`;
} else {
    result = `Angka ${x} termasuk angka ganjil`;
}

console.log(result);

// Program struktur kontrol (switch) untuk mencetak nama hari berdasarkan nomor hari
const day = 6;
let dayResult;

switch (day) {
    case 1:
        dayResult = "Senin";
        break;
    case 2:
        dayResult = "Selasa";
        break;
    case 3:
        dayResult = "Rabu";
        break;
    case 4:
        dayResult = "Kamis";
        break;
    case 5:
        dayResult = "Jumat";
        break;
    case 6:
        dayResult = "Sabtu";
        break;
    case 7:
        dayResult = "Minggu";
        break;
    default:
        dayResult = "Invalid"
        return
}

console.log(`Hari ke ${day} adalah hari ${dayResult}`)