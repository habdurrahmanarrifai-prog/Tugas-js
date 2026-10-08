{
let umur = 50;
let tahun = "2025";
let aktif = true;
let data;
}

console.log(typeof umur); // Output: "number"
console.log(typeof tahun); // Output: "string"
console.log(typeof aktif); // Output: "boolean"
console.log(typeof data); // Output: "undefined"

let tahun = "2025";
// Meskipun isinya tampak seperti angka,
// karena diapit tanda kutip, JavaScript memperlakukannya sebagai teks.

console.log(typeof tahun); // Output: "string"
console.log(tahun + 1); // Output: "20251"  ← penggabungan teks, bukan penjumlahan!

let tahunAngka = 2025;
console.log(tahunAngka + 1); // Output: 2026  ← penjumlahan matematika yang benar

function tampilkanInfo(nilai) {
  console.log("Nilai  :", nilai);
  console.log("Tipe   :", typeof nilai);
}

tampilkanInfo(42); // Nilai: 42      | Tipe: number
tampilkanInfo("Halo"); // Nilai: Halo    | Tipe: string
tampilkanInfo(true); // Nilai: true    | Tipe: boolean
tampilkanInfo([1, 2, 3]); // Nilai: [1,2,3] | Tipe: object
tampilkanInfo({ nama: "X" }); // Nilai: {nama:X}| Tipe: object