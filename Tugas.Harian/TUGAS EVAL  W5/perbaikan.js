/* Program hitung transaksi Kedai Senja */

let namaKedai = "Kedai Senja"; // FIX: variabel harus bisa diubah, bukan const untuk data nama yang kemudian berubah

const HARGA_KOPI = 18000;
const HARGA_ROTI = 15000;
const TARIF_PAJAK = 0.11;

let jumlahKopi = 3;
let jumlahRoti = 2; // FIX: angka harus bertipe number, bukan string "2"

let transaksiSelesai = 0;

// Jumlah seluruh item. Seharusnya: 5
let jumlahItem = jumlahKopi + jumlahRoti; // FIX: penggunaan jumlahRoti yang benar, bukan string

// Subtotal. Seharusnya: 84000
let subtotal = HARGA_KOPI * jumlahKopi + HARGA_ROTI * jumlahRoti; // FIX: jumlahKopi benar dan jumlahRoti benar

// Pajak 11% dari subtotal setelah dipotong diskon 10000.
// Seharusnya: 8140
let pajak = (subtotal - 10000) * TARIF_PAJAK; // FIX: kurung ditambahkan agar operasi benar dan diskon dihitung sebelum pajak

// Total bayar. Seharusnya: 82140
let totalBayar = subtotal - 10000 + pajak; // FIX: operator semicolon dan logic pengurangan benar; totalBayar tetap 82140

// Pelanggan membayar 100000. Cukup? Seharusnya: true
let uangBayar = 100000;
let uangCukup = uangBayar >= totalBayar; // FIX: gunakan perbandingan, bukan assignment (=)

// Kembalian. Seharusnya: 17860
let kembalian = uangBayar - totalBayar; // FIX: kembalian dihitung dari uang yang dibayar dikurangi totalBayar

// Jumlah item genap? Seharusnya: false
let itemGenap = jumlahItem % 2 === 0; // FIX: untuk jumlahItem = 5, hasil false karena 5 bukan bilangan genap

// Transaksi selesai bertambah 1. Seharusnya: 1
transaksiSelesai += 1; // FIX: tambah nilai ke variabel, bukan hanya ekspresi

// Kedai berganti nama. Seharusnya "Kedai Senja Baru"
namaKedai = "Kedai Senja Baru"; // FIX: ubah isi variabel, bukan deklarasikan ulang

// Tarif pajak tidak boleh berubah. Seharusnya tetap 0.11
// FIX: tidak perlu reassign nilai TARIF_PAJAK = 0.12; karena const membatasi perubahan

console.log(namaKedai, jumlahItem, subtotal, pajak, totalBayar, uangCukup, kembalian, itemGenap, transaksiSelesai);

/*
  Catatan Bug:
  1. jumlahRoti = "2" -> jenisnya tidak error tapi hasil salah
     Penyebab: string dibaca sebagai teks, sehingga penjumlahan bisa terjadi dengan coercion.
  2. subtotal = HARGA_KOPI * jumlahkopi + ... -> tidak error tapi hasil salah
     Penyebab: nama variabel jumlahkopi berbeda dengan jumlahKopi, menghasilkan undefined.
  3. pajak = subtotal - 10000 * TARIF_PAJAK -> tidak error tapi hasil salah
     Penyebab: operator matematika tanpa kurung menghitung diskon setelah pajak. Harus (subtotal - 10000) * TARIF_PAJAK.
  4. totalBayar = subtotal - 10000 + pajak -> tidak error tapi hasil salah
     Penyebab: ekspresi tidak memiliki titik koma dan logika seharusnya tetap sesuai; pada kode asli belum ada penanda semantik yang jelas.
  5. uangCukup = uangBayar = totalBayar -> tidak error tapi hasil salah
     Penyebab: operator assignment (=) menyalin nilai totalBayar ke uangBayar, bukan membandingkan.
  6. kembalian = totalBayar - uangBayar -> tidak error tapi hasil salah
     Penyebab: urutan pengurangan terbalik; harus uangBayar - totalBayar.
  7. itemGenap = jumlahItem % 2 === 1 -> tidak error tapi hasil salah
     Penyebab: kondisi mengecek ganjil, padahal yang benar adalah genap.
  8. transaksiSelesai + 1 -> tidak error tapi hasil salah
     Penyebab: ekspresi tidak ditetapkan ke variabel atau tidak ditambah ke nilai lama.
  9. let namaKedai = "Kedai Senja Baru"; -> menyebabkan error
     Penyebab: namaKedai sudah dideklarasikan sebelumnya sebagai const.
  10. TARIF_PAJAK = 0.12; -> menghentikan program dengan error
     Penyebab: const tidak bisa diubah.
  11. console.log(...) tanpa format yang benar -> tidak error tapi hasil salah dalam konteks output
     Penyebab: output tidak sesuai dengan output yang diharapkan.
  12. jumlahRoti bisa berubah jenis jika tidak dikonversi -> tidak error tapi hasil salah
     Penyebab: data bentuk string menyebabkan operasi matematika tidak konsisten.
*/