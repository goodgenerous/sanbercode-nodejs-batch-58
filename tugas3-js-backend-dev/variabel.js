// Penggunaan tipe data (var)
var x = "Bagus";
x = "Dermawan";

// Penggunaan tipe data (let)
let y = "Bagus";
y = "Dermawan";

// Penggunaan tipe data (const)
const z = "Bagus";
// z = "Dermawan"; Akan terjadi error karena const tidak bisa dilakukan operasi assignment
console.log(`Penggunaan tipe data:\nvar = ${x}\nlet = ${y}\nconst = ${z}`);

// Penggunaan Tipe Data Primitif & Non-primitif
let text = "Bagus Dermawan Mulya"
let num = 50;
let isValid = true;
let isNotValid = false;
let data = null;
let unDefined;
let dataPerson = { name: "John Doe", course: "Node JS", batch: 58 };
let arrayNum = [1, 2, 3, 4, 5];
console.log(`\nPenggunaan tipe data primitif:\nString = ${text}\nNumber = ${num}\nBoolean = ${isValid}, ${isNotValid}\nNull = ${data}\nUndefined = ${undefined}\n\nPenggunaan tipe data non-primitif:`);
console.log("Object = ", dataPerson);
console.log("Array = ", arrayNum);

// Penggunaan Operator Aritmatika
let num1 = 5;
let num2 = 5;
let sumNum = num1 + num2;
let difNum = num1 - num2;
let multiplyNum = num1 * num2;
let divideNum = num1 / num2;
let moduloNum = num1 % num2;
console.log(`\nPenggunaan Operator Aritmatika:\nPenjumlahan = ${sumNum}\nPengurangan = ${difNum}\nPerkalian = ${multiplyNum}\nPembagian = ${divideNum}\nModulo = ${moduloNum}`);

// Penggunaan Operator Perbandingan
console.log(`\nPenggunaan Operator Perbandingan:`)
let args1 = 100;
let args2 = "100";

console.log(args1 == args2);
console.log(args1 === args2);
console.log(args1 != args2);
console.log(args1 !== args2);
console.log(args1 < 50);
console.log(args1 >= 100);

// Penggunaan Operator Logika
console.log(`\nPenggunaan Operator Logika:`)

let isTrue = true;
let isFalse = false;

console.log("Penggunaan operator AND:", isTrue && isFalse);
console.log("Penggunaan operator OR:", isTrue || isFalse);
console.log("Penggunaan operator !:", !isTrue);
