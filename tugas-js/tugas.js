// === LANGKAH 1 ===

// Program pencatatan data usaha
// Dibuat oleh rekan sebelumnya

const namaUsaha = "Kopi Senja";
const kotaUsaha = "Yogyakarta";
const tahunBerdiri = "2020";
const TARIF_PAJAK = 0.11;

// FIX: Ditambahkan titik koma agar penulisan kode konsisten.
let statusBuka = true;

// FIX: Deklarasi website ganda dihapus dan digunakan null
// untuk menunjukkan bahwa website belum tersedia.
let website = null;

// FIX: var diganti menjadi const karena jumlahProduk tidak akan diubah.
const jumlahProduk = 3;

let produk = ["Kopi Susu", "Es Teh Manis", "Roti Bakar"];
let hargaProduk = [18000, 7500, 15000];

// FIX: namausaha diperbaiki menjadi namaUsaha karena JavaScript
// membedakan huruf besar dan huruf kecil.
console.log(namaUsaha);

// FIX: Console.log diperbaiki menjadi console.log karena
// JavaScript bersifat case-sensitive.
console.log("Kota: " + kotaUsaha);

// FIX: tahunBerdiri berupa string, sehingga dikonversi menjadi
// number agar menghasilkan 2021, bukan "20201".
console.log(
    "Tahun berdiri berikutnya: " + (Number(tahunBerdiri) + 1)
);

// FIX: Baris perubahan TARIF_PAJAK dihapus karena const
// tidak boleh diberi nilai baru setelah deklarasi.

// FIX: Operator perkalian menggunakan * dan bukan x.
const hargaKopiSetelahPajak =
    hargaProduk[0] * (1 + TARIF_PAJAK);

console.log("Harga kopi + pajak: " + hargaKopiSetelahPajak);

const hargaTermurah = Math.min(
    hargaProduk[0],
    hargaProduk[1],
    hargaProduk[2]
);

console.log("Termurah: " + hargaTermurah);

// Produk ke-4 belum tersedia karena array hanya memiliki 3 produk.
// Indeks array dimulai dari 0, sehingga produk[3] menghasilkan undefined.
console.log("Produk ke-4: " + produk[3]);

// FIX: Komentar yang tidak selesai diperbaiki agar kode dapat dijalankan.
console.log("Status buka: " + statusBuka);

/*
================ CATATAN BUG ================

No | Bagian | Jenis | Penyebab | Perbaikan

1. website
   Error
   Variabel website dideklarasikan dua kali menggunakan let.
   Salah satu deklarasi dihapus dan digunakan let website = null.

2. var jumlahProduk
   Tidak error tetapi salah
   Tugas melarang var di luar bagian bonus.
   Diganti menjadi const karena nilainya tidak berubah.

3. namausaha
   Error
   JavaScript membedakan huruf besar dan kecil.
   Diperbaiki menjadi namaUsaha.

4. Console.log
   Error
   Penulisan Console menggunakan huruf C besar.
   Diperbaiki menjadi console.log.

5. tahunBerdiri + 1
   Tidak error tetapi hasil salah.
   tahunBerdiri berupa string "2020", sehingga + melakukan
   penggabungan teks.
   Diperbaiki menggunakan Number(tahunBerdiri) + 1.

6. TARIF_PAJAK = 0.12
   Error
   TARIF_PAJAK dibuat menggunakan const sehingga tidak boleh
   diberi nilai baru.
   Baris tersebut dihapus dan tarif tetap 0.11.

7. hargaProduk[0] x (...)
   Error
   JavaScript tidak menggunakan x sebagai operator perkalian.
   Diganti dengan *.

8. produk[3]
   Tidak error tetapi hasilnya undefined.
   Array memiliki 3 produk dengan indeks 0, 1, dan 2.
   Karena itu indeks 3 belum memiliki data.

9. Komentar /*
   Error
   Komentar blok tidak ditutup sehingga kode setelahnya ikut
   dianggap sebagai komentar.
   Komentar diperbaiki dan console.log dijalankan kembali.

==============================================
*/

// ==========================================
// LANGKAH 2 - BENAHI STRUKTUR DATA
// ==========================================

// Object untuk menyimpan informasi usaha
const usaha = {
    nama: "Kopi Senja",
    pemilik: "Hanif Abdurrahman Arrifai",
    kota: "Yogyakarta",
    tahunBerdiri: 2020,
    statusBuka: true,
    whatsapp: "081234567890",
    website: null
};

// Array berisi object produk
const daftarProduk = [
    {
        nama: "Kopi Susu",
        harga: 18000
    },
    {
        nama: "Es Teh Manis",
        harga: 7500
    },
    {
        nama: "Roti Bakar",
        harga: 15000
    },
    {
        nama: "Pisang Goreng",
        harga: 10000
    }
];

// 1. Menampilkan data object dengan dot notation
console.log("Nama usaha:", usaha.nama);

// 2. Menampilkan data object dengan bracket notation
console.log("Kota usaha:", usaha["kota"]);

// 3. Mengakses produk pertama menggunakan index
console.log("Produk pertama:", daftarProduk[0]);

// 4. Mengakses produk terakhir menggunakan index
console.log("Produk terakhir:", daftarProduk[daftarProduk.length - 1]);

// Penjelasan:
// - Object digunakan untuk menggabungkan beberapa informasi dalam satu tempat.
// - Array dapat berisi banyak data, termasuk objek.
// - Dot notation dipakai saat nama properti sudah diketahui.
// - Bracket notation dipakai saat properti diakses secara dinamis.
// - Indeks array dimulai dari 0, jadi produk terakhir ada di index length - 1.





