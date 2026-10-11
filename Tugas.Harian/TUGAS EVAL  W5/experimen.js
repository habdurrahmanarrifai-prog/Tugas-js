// Bagian 5.1: Tebak

// Tebakan: "55"
console.log(5 + "5");
// Hasil asli: "55"

// Tebakan: 6
console.log("10" - 4);
// Hasil asli: 6

// Tebakan: 20
console.log("10" * "2");
// Hasil asli: 20

// Tebakan: "string"
console.log(typeof ("5" + 5));
// Hasil asli: "string"

// Tebakan: 1
console.log(9 % 4);
// Hasil asli: 1

// Tebakan: 25
console.log((2 + 3) ** 2);
// Hasil asli: 25

// Tebakan: 2.5
console.log(10 / 4);
// Hasil asli: 2.5

// Tebakan: Infinity
console.log(1 / 0);
// Hasil asli: Infinity

// Tebakan: NaN
console.log("abc" * 2);
// Hasil asli: NaN

// Tebakan: "number"
console.log(typeof NaN);
// Hasil asli: "number"

// Tebakan: true
console.log((5 > 3 && 2 > 4) || 1 === 1);
// Hasil asli: true

// Tebakan: true
console.log(!true || !false);
// Hasil asli: true

// Tebakan: false
console.log("5" == 5 && "5" !== 5);
// Hasil asli: false

// Tebakan: true
console.log(typeof [] === typeof {});
// Hasil asli: true

// Tebakan: 50
console.log([10, 20, 30][1] + [10, 20, 30][2]);
// Hasil asli: 50

// Bagian 5.2: Eksperimen var dan let
{
  var angkaVar = 10;
  let angkaLet = 20;
}

console.log("Var di luar blok:", angkaVar);
// console.log("Let di luar blok:", angkaLet); // ReferenceError: angkaLet is not defined

var nama = "satu";
var nama = "dua";
console.log("Var bisa dideklarasikan ulang:", nama);

// let nomor = 1;
// let nomor = 2; // SyntaxError: Identifier 'nomor' has already been declared

/*
  Jawaban komentar:
  1. 5 + "5" menghasilkan "55" karena JS melakukan coercion string. "10" - 4 menghasilkan 6 karena JS mengubah string ke number saat operasi aritmatika.
  2. NaN adalah Not a Number, yang berarti hasil operasi matematika tidak valid. Namun typeof NaN tetap "number" karena JS memodelkan NaN sebagai angka numerik khusus.
  3. Urutan evaluasi:
     - 5 > 3 => true
     - 2 > 4 => false
     - true && false => false
     - 1 === 1 => true
     - false || true => true
  4. typeof [] hasilnya "object" karena array adalah objek khusus. Cara membedakannya adalah Array.isArray(arr) atau arr instanceof Array.
  5. Statement: let hasil = 5 + 10; Expression: 5 + 10 memiliki nilai 15. Statement lain: console.log(hasil * 2); Expression: hasil * 2 memiliki nilai 30.
  6. eksperimen.js berjalan di browser (jika dibuka lewat HTML) atau di Node.js jika dijalankan lewat terminal. Node.js menjalankan JavaScript di lingkungan server/CLI, sedangkan browser menjalankannya di halaman web.
  7. Hasil eksperimen:
     - var di blok tetap bisa dibaca di luar blok.
     - let di blok tidak bisa dibaca di luar blok.
     - var bisa dideklarasikan ulang tanpa error.
     - let tidak bisa dideklarasikan ulang di area yang sama.
  8. Contoh bug nyata:
     if (true) {
       var userRole = "admin";
     }
     console.log(userRole); // "admin"
     Jika banyak fungsi atau logika, var bisa mencemari scope global dan menimbulkan bug.
*/

/*
  Catatan:
  Semua kode di bawah ini adalah eksperimen yang diharapkan dijalankan di browser console.
  Jika ingin menjalankan di Node.js, cukup:
  node eksperimen.js
*/// Bagian 5.1: Tebak

// Tebakan: "55"
console.log(5 + "5");
// Hasil asli: "55"

// Tebakan: 6
console.log("10" - 4);
// Hasil asli: 6

// Tebakan: 20
console.log("10" * "2");
// Hasil asli: 20

// Tebakan: "string"
console.log(typeof ("5" + 5));
// Hasil asli: "string"

// Tebakan: 1
console.log(9 % 4);
// Hasil asli: 1

// Tebakan: 25
console.log((2 + 3) ** 2);
// Hasil asli: 25

// Tebakan: 2.5
console.log(10 / 4);
// Hasil asli: 2.5

// Tebakan: Infinity
console.log(1 / 0);
// Hasil asli: Infinity

// Tebakan: NaN
console.log("abc" * 2);
// Hasil asli: NaN

// Tebakan: "number"
console.log(typeof NaN);
// Hasil asli: "number"

// Tebakan: true
console.log((5 > 3 && 2 > 4) || 1 === 1);
// Hasil asli: true

// Tebakan: true
console.log(!true || !false);
// Hasil asli: true

// Tebakan: false
console.log("5" == 5 && "5" !== 5);
// Hasil asli: false

// Tebakan: true
console.log(typeof [] === typeof {});
// Hasil asli: true

// Tebakan: 50
console.log([10, 20, 30][1] + [10, 20, 30][2]);
// Hasil asli: 50

// Bagian 5.2: Eksperimen var dan let
{
  var angkaVar = 10;
  let angkaLet = 20;
}

console.log("Var di luar blok:", angkaVar);
// console.log("Let di luar blok:", angkaLet); // ReferenceError: angkaLet is not defined

var nama = "satu";
var nama = "dua";
console.log("Var bisa dideklarasikan ulang:", nama);

// let nomor = 1;
// let nomor = 2; // SyntaxError: Identifier 'nomor' has already been declared

/*
  Jawaban komentar:
  1. 5 + "5" menghasilkan "55" karena JS melakukan coercion string. "10" - 4 menghasilkan 6 karena JS mengubah string ke number saat operasi aritmatika.
  2. NaN adalah Not a Number, yang berarti hasil operasi matematika tidak valid. Namun typeof NaN tetap "number" karena JS memodelkan NaN sebagai angka numerik khusus.
  3. Urutan evaluasi:
     - 5 > 3 => true
     - 2 > 4 => false
     - true && false => false
     - 1 === 1 => true
     - false || true => true
  4. typeof [] hasilnya "object" karena array adalah objek khusus. Cara membedakannya adalah Array.isArray(arr) atau arr instanceof Array.
  5. Statement: let hasil = 5 + 10; Expression: 5 + 10 memiliki nilai 15. Statement lain: console.log(hasil * 2); Expression: hasil * 2 memiliki nilai 30.
  6. eksperimen.js berjalan di browser (jika dibuka lewat HTML) atau di Node.js jika dijalankan lewat terminal. Node.js menjalankan JavaScript di lingkungan server/CLI, sedangkan browser menjalankannya di halaman web.
  7. Hasil eksperimen:
     - var di blok tetap bisa dibaca di luar blok.
     - let di blok tidak bisa dibaca di luar blok.
     - var bisa dideklarasikan ulang tanpa error.
     - let tidak bisa dideklarasikan ulang di area yang sama.
  8. Contoh bug nyata:
     if (true) {
       var userRole = "admin";
     }
     console.log(userRole); // "admin"
     Jika banyak fungsi atau logika, var bisa mencemari scope global dan menimbulkan bug.
*/

/*
  Catatan:
  Semua kode di bawah ini adalah eksperimen yang diharapkan dijalankan di browser console.
  Jika ingin menjalankan di Node.js, cukup:
  node eksperimen.js
*/