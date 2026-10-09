/*
==================================================
TUGAS DAY 28: KAS


/*
TUGAS DAY 28: KASIR WARUNG DENGAN OPERATOR JAVASCRIPT
Nama: [Hanif Abdurrahman Arrifa'i]

Materi:
1. Operator aritmatika
2. Operator penugasan
3. Operator perbandingan
4. Operator logika
5. Urutan prioritas operasi
*/

// ==================================================
// LANGKAH 1: TEBAK DULU, BARU CEK (20 POIN)
// ==================================================

// 1. Tebakan: 13
// Hasil asli: 13
console.log(7 + 3 * 2);

// 2. Tebakan: 20
// Hasil asli: 20
console.log((7 + 3) * 2);

// 3. Tebakan: 2
// Hasil asli: 2
console.log(17 % 5);

// 4. Tebakan: 8
// Hasil asli: 8
console.log(2 ** 3);

// 5. Tebakan: true
// Hasil asli: true
console.log(5 == "5");

// 6. Tebakan: false
// Hasil asli: false
console.log(5 === "5");

// 7. Tebakan: false
// Hasil asli: false
console.log(true && false);

// 8. Tebakan: true
// Hasil asli: true
console.log(true || false);

// 9. Tebakan: false
// Hasil asli: false
console.log(!true);

// 10. Tebakan: false
// Hasil asli: false
console.log(10 > 5 && 3 > 8);


// JAWABAN PERTANYAAN LANGKAH 1

// 1. Tebakan yang paling sulit adalah nomor 6 karena
// === membandingkan nilai sekaligus tipe datanya.

// 2. Perkalian dikerjakan lebih dahulu daripada penjumlahan.
// Jadi 3 * 2 = 6, lalu 7 + 6 = 13.

// 3. Operator == membandingkan nilai dengan konversi tipe
// tertentu sehingga 5 == "5" bernilai true.
// Operator === membandingkan nilai dan tipe data,
// sehingga 5 === "5" bernilai false.


// ==================================================
// LANGKAH 2: PERBAIKI 4 KESALAHAN (25 POIN)
// ==================================================

const hargaKopi = 18000;
const hargaTeh = 7500;
let jumlahMember = 5;
let sudahMember = true;
let uangDiterima = "51000";

// FIX 1: Gunakan tanda kurung agar harga kopi dan teh
// dijumlahkan dahulu, kemudian dikalikan dua.
// Total 2 kopi + 2 teh = 51000.
let totalPesanan = (hargaKopi + hargaTeh) * 2;

// FIX 2: Gunakan == untuk membandingkan string angka
// dengan angka. Hasilnya true karena nilainya sama.
let uangPas = uangDiterima == totalPesanan;

// FIX 3: Gunakan += agar jumlahMember benar-benar bertambah.
jumlahMember += 1;

// FIX 4: Gunakan || karena diskon didapat jika sudah member
// ATAU total pesanan lebih dari 100000.
let dapatDiskon = sudahMember || totalPesanan > 100000;

console.log(
    "Total pesanan:", totalPesanan,
    "Uang pas:", uangPas,
    "Jumlah member:", jumlahMember,
    "Dapat diskon:", dapatDiskon
);

// Hasil yang diharapkan:
// Total pesanan: 51000
// Uang pas: true
// Jumlah member: 6
// Dapat diskon: true


// JAWABAN PERTANYAAN LANGKAH 2

// 1. Empat kesalahan dan perbaikannya:
// - Total pesanan harus memakai tanda kurung agar hasilnya 51000.
// - Perbandingan uang menggunakan == agar string angka bisa
//   dibandingkan dengan angka.
// - jumlahMember + 1 tidak menyimpan hasil; gunakan += 1.
// - Operator && diganti || karena syarat diskon memakai kata ATAU.

// 2. Jika == diganti ===, hasilnya false karena uangDiterima
// bertipe string sedangkan totalPesanan bertipe number.
// Agar hasilnya true dengan ===, ubah string menjadi angka:
let uangPasStrict = Number(uangDiterima) === totalPesanan;
console.log("Uang pas dengan ===:", uangPasStrict);

// 3. && berarti kedua syarat harus benar.
// || berarti cukup salah satu syarat benar.
// Contoh: sudahMember || totalPesanan > 100000 bernilai true
// karena pelanggan sudah menjadi member.


// ==================================================
// LANGKAH 3: BIKIN KASIR SENDIRI (35 POIN)
// ==================================================

// 1. Data barang menggunakan const karena nilainya tetap.
const NAMA_BARANG = "Nasi Goreng";
const HARGA_SATUAN = 20000;
const TARIF_PAJAK = 0.11;

// 2. Jumlah beli dan uang dibayar menggunakan let.
let jumlahBeli = 3;
let uangDibayar = 70000;

// 3. Menghitung subtotal, pajak, dan total bayar.
let subtotal = HARGA_SATUAN * jumlahBeli;
let pajak = subtotal * TARIF_PAJAK;
let totalBayar = subtotal + pajak;

// 4. Operator penugasan ringkas.
// Tambahkan biaya kemasan Rp1.000.
const BIAYA_KEMASAN = 1000;
totalBayar += BIAYA_KEMASAN;

// Kurangi potongan harga Rp5.000.
const POTONGAN_HARGA = 5000;
totalBayar -= POTONGAN_HARGA;

// 5. Menghitung kembalian.
let kembalian = uangDibayar - totalBayar;

// 6. Mengecek apakah jumlah beli genap.
let jumlahGenap = jumlahBeli % 2 === 0;

// 7. Tiga variabel Boolean dari perbandingan dan logika.
let uangCukup = uangDibayar >= totalBayar;

// Gratis kantong jika subtotal minimal Rp50.000
// ATAU jumlah barang minimal 5.
let gratisKantong = subtotal >= 50000 || jumlahBeli >= 5;

// Pelanggan memperoleh bonus jika membeli minimal 3 barang
// DAN subtotal minimal Rp50.000.
let dapatBonus = jumlahBeli >= 3 && subtotal >= 50000;

// 8. Menampilkan hasil dengan rapi.
console.log("\n===== STRUK KASIR WARUNG =====");
console.log("Barang          :", NAMA_BARANG);
console.log("Harga satuan    : Rp" + HARGA_SATUAN);
console.log("Jumlah beli     :", jumlahBeli);
console.log("Subtotal        : Rp" + subtotal);
console.log("Pajak (11%)     : Rp" + pajak);
console.log("Biaya kemasan   : Rp" + BIAYA_KEMASAN);
console.log("Potongan harga  : Rp" + POTONGAN_HARGA);
console.log("Total bayar     : Rp" + totalBayar);
console.log("Uang dibayar    : Rp" + uangDibayar);
console.log("Kembalian       : Rp" + kembalian);
console.log("Uang cukup?     :", uangCukup);
console.log("Jumlah genap?   :", jumlahGenap);
console.log("Gratis kantong? :", gratisKantong);
console.log("Dapat bonus?    :", dapatBonus);
console.log("==============================");

// 9. Contoh tanda kurung yang mengubah hasil perhitungan.
let hasilDenganKurung = (10 + 5) * 2;
let hasilTanpaKurung = 10 + 5 * 2;

console.log("Dengan kurung   :", hasilDenganKurung); // 30
console.log("Tanpa kurung    :", hasilTanpaKurung);  // 20


// JAWABAN PERTANYAAN LANGKAH 3

// 1. uangCukup bernilai true karena uang yang dibayar
// Rp70.000 lebih besar daripada total bayar Rp62.600.

// 2. Sebelum operator || diganti &&, gratisKantong bernilai
// true karena subtotal Rp60.000 memenuhi syarat pertama.
// Jika || diganti &&, hasilnya false karena jumlah beli 3
// tidak memenuhi syarat minimal 5.

// 3. Dengan kurung (10 + 5) * 2 hasilnya 30 karena
// penjumlahan dilakukan terlebih dahulu.
// Tanpa kurung 10 + 5 * 2 hasilnya 20 karena perkalian
// dikerjakan lebih dahulu.


// ==================================================
// BONUS: KONVERSI 250 MENIT MENJADI JAM DAN MENIT
// ==================================================

const TOTAL_MENIT = 250;

// Math.floor membulatkan hasil pembagian ke bawah.
let jumlahJam = Math.floor(TOTAL_MENIT / 60);

// Operator % mengambil sisa pembagian.
let sisaMenit = TOTAL_MENIT % 60;

console.log("\n===== KONVERSI WAKTU =====");
console.log(
    TOTAL_MENIT + " menit = " +
    jumlahJam + " jam " +
    sisaMenit + " menit"
);

// Penjelasan:
// / digunakan untuk membagi total menit dengan 60
// agar diketahui jumlah jam.
// % digunakan untuk mendapatkan sisa menit setelah
// jumlah jam dihitung.
{
```javascript
// 1. Operator Aritmatika
console.log(7 + 3 * 2);       // 13
console.log((7 + 3) * 2);     // 20
console.log(17 % 5);          // 2
console.log(2 ** 3);          // 8

// 2. Operator Perbandingan
console.log(5 == "5");        // true
console.log(5 === "5");       // false

// 3. Operator Logika
console.log(true && false);   // false
console.log(true || false);   // true
console.log(!true);           // false

// 4. Operator Kombinasi
console.log(10 > 5 && 3 > 8); // false
```
}

