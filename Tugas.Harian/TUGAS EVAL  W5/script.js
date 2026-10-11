/*
  Nama: Kedai Senja
  Tanggal: 2026-10-10
  Tujuan: Membuat data kedai, data menu, data transaksi, lalu menghitung laporan harian.
*/

// Bagian 2: Data Kedai
const kedai = {
  nama: "Kedai Senja",
  pemilik: "Hanif",
  kota: "Bandung",
  tahunBerdiri: 2020,
  sedangBuka: true,
  nomorWhatsApp: "089699748017",
  website: null,
  jamOperasional: {
    buka: "08.00",
    tutup: "22.00"
  }
};

const menu = [
  { nama: "Espresso", kategori: "Kopi", harga: 20000, stok: 10, tersedia: true },
  { nama: "Cappuccino", kategori: "Kopi", harga: 26000, stok: 8, tersedia: true },
  { nama: "Bakpao", kategori: "Makanan", harga: 15000, stok: 12, tersedia: true },
  { nama: "Kentang Goreng", kategori: "Makanan", harga: 18000, stok: 0, tersedia: false },
  { nama: "Teh Tarik", kategori: "Minuman", harga: 12000, stok: 15, tersedia: true },
  { nama: "Roti Bakar", kategori: "Makanan", harga: 22000, stok: 6, tersedia: true }
];

const transaksi = [
  {
    kode: "TRX-001",
    pelanggan: "Ayu",
    sudahMember: true,
    uangBayar: 50000,
    catatan: "Taruh di meja dekat jendela",
    pesanan: [
      { indeksMenu: 0, jumlah: 2 },
      { indeksMenu: 2, jumlah: 1 }
    ]
  },
  {
    kode: "TRX-002",
    pelanggan: "Beni",
    sudahMember: false,
    uangBayar: 100000,
    catatan: "",
    pesanan: [
      { indeksMenu: 1, jumlah: 2 },
      { indeksMenu: 4, jumlah: 1 }
    ]
  },
  {
    kode: "TRX-003",
    pelanggan: "Dimas",
    sudahMember: false,
    uangBayar: 80000,
    catatan: "",
    pesanan: [
      { indeksMenu: 5, jumlah: 1 },
      { indeksMenu: 3, jumlah: 2 }
    ]
  }
];

console.log("Nama kedai:", kedai.nama);
console.log("Kota:", kedai["kota"]);
console.log("Jam tutup:", kedai.jamOperasional.tutup);
console.log("Menu pertama:", menu[0]);
console.log("Menu terakhir:", menu[menu.length - 1]);
console.log("Pelanggan transaksi kedua:", transaksi[1].pelanggan);
console.log(
  "Menu item kedua transaksi ketiga:",
  menu[transaksi[2].pesanan[1].indeksMenu].nama
);

console.log("typeof tahunBerdiri:", typeof kedai.tahunBerdiri);
console.log("typeof sedangBuka:", typeof kedai.sedangBuka);
console.log("typeof website:", typeof kedai.website);
console.log("typeof jamOperasional:", typeof kedai.jamOperasional);
console.log("typeof menu:", typeof menu);
console.log("typeof transaksi[0].catatan:", typeof transaksi[0].catatan);

let catatanKasir;
console.log("catatanKasir:", catatanKasir);

/*
  Jawaban komentar:
  1. nomorWhatsApp disimpan sebagai string karena nomor telepon bisa diawali 0, mengandung tanda +, dan tidak dipakai untuk operasi matematika. Jika disimpan sebagai number, data bisa berubah dan format nomor tidak aman.
  2. website diisi null karena data belum tersedia, sedangkan catatanKasir dibiarkan tanpa nilai karena memang belum ada catatan yang ditentukan; JS akan memberi undefined.
  3. menu[6] hasilnya undefined, karena array dimulai dari indeks 0 dan total elemen 6 berarti indeks valid 0 sampai 5. Indeks 6 di luar jangkauan.
  4. typeof menu menghasilkan "object" karena array adalah tipe objek khusus di JavaScript. Array memiliki struktur berindeks dan metode, tetapi tetap termasuk dalam kategori object.
  5. menu dibuat sebagai array karena berisi banyak item dengan urutan dan bisa diakses berdasarkan indeks. kedai dibuat sebagai object karena berisi data profil yang memiliki properti berbeda seperti nama, kota, dan jam operasional.
*/

// Bagian 3: Perhitungan Transaksi dan Laporan Harian

// Transaksi 1
let subtotalTrx1 = 0;
let potonganTrx1 = 0;
let pajakTrx1 = 0;
let totalBayarTrx1 = 0;
let kembalianTrx1 = 0;
let uangCukupTrx1 = false;
let gratisAntarTrx1 = false;
let semuaMenuTersediaTrx1 = true;

// Transaksi 2
let subtotalTrx2 = 0;
let potonganTrx2 = 0;
let pajakTrx2 = 0;
let totalBayarTrx2 = 0;
let kembalianTrx2 = 0;
let uangCukupTrx2 = false;
let gratisAntarTrx2 = false;
let semuaMenuTersediaTrx2 = true;

// Transaksi 3
let subtotalTrx3 = 0;
let potonganTrx3 = 0;
let pajakTrx3 = 0;
let totalBayarTrx3 = 0;
let kembalianTrx3 = 0;
let uangCukupTrx3 = false;
let gratisAntarTrx3 = false;
let semuaMenuTersediaTrx3 = true;

// Fungsi bantu untuk menghitung per transaksi
function hitungTransaksi(indexTransaksi) {
  const trx = transaksi[indexTransaksi];
  let subtotal = 0;

  for (const item of trx.pesanan) {
    const menuItem = menu[item.indeksMenu];
    subtotal += menuItem.harga * item.jumlah;
    semuaMenuTersediaTrx1 = semuaMenuTersediaTrx1 && menuItem.tersedia;
  }

  if (indexTransaksi === 0) {
    subtotalTrx1 = subtotal;
    potonganTrx1 = trx.sudahMember ? subtotal * 0.1 : 0;
    pajakTrx1 = (subtotal - potonganTrx1) * 0.11;
    totalBayarTrx1 = subtotal - potonganTrx1 + pajakTrx1;
    kembalianTrx1 = trx.uangBayar - totalBayarTrx1;
    uangCukupTrx1 = trx.uangBayar >= totalBayarTrx1;
    gratisAntarTrx1 = subtotal >= 100000 || trx.pesanan.reduce((sum, item) => sum + item.jumlah, 0) >= 5;
    semuaMenuTersediaTrx1 = trx.pesanan.every((item) => menu[item.indeksMenu].tersedia);
  }

  if (indexTransaksi === 1) {
    subtotalTrx2 = subtotal;
    potonganTrx2 = trx.sudahMember ? subtotal * 0.1 : 0;
    pajakTrx2 = (subtotal - potonganTrx2) * 0.11;
    totalBayarTrx2 = subtotal - potonganTrx2 + pajakTrx2;
    kembalianTrx2 = trx.uangBayar - totalBayarTrx2;
    uangCukupTrx2 = trx.uangBayar >= totalBayarTrx2;
    gratisAntarTrx2 = subtotal >= 100000 || trx.pesanan.reduce((sum, item) => sum + item.jumlah, 0) >= 5;
    semuaMenuTersediaTrx2 = trx.pesanan.every((item) => menu[item.indeksMenu].tersedia);
  }

  if (indexTransaksi === 2) {
    subtotalTrx3 = subtotal;
    potonganTrx3 = trx.sudahMember ? subtotal * 0.1 : 0;
    pajakTrx3 = (subtotal - potonganTrx3) * 0.11;
    totalBayarTrx3 = subtotal - potonganTrx3 + pajakTrx3;
    kembalianTrx3 = trx.uangBayar - totalBayarTrx3;
    uangCukupTrx3 = trx.uangBayar >= totalBayarTrx3;
    gratisAntarTrx3 = subtotal >= 100000 || trx.pesanan.reduce((sum, item) => sum + item.jumlah, 0) >= 5;
    semuaMenuTersediaTrx3 = trx.pesanan.every((item) => menu[item.indeksMenu].tersedia);
  }
}

hitungTransaksi(0);
hitungTransaksi(1);
hitungTransaksi(2);

let sisaKembalian50kTrx2 = 0;
let sisaKembalian20kTrx2 = 0;
if (kembalianTrx2 >= 0) {
  sisaKembalian50kTrx2 = kembalianTrx2 % 50000;
  sisaKembalian20kTrx2 = sisaKembalian50kTrx2 % 20000;
}

let sisaKembalian50kTrx3 = 0;
let sisaKembalian20kTrx3 = 0;
if (kembalianTrx3 >= 0) {
  sisaKembalian50kTrx3 = kembalianTrx3 % 50000;
  sisaKembalian20kTrx3 = sisaKembalian50kTrx3 % 20000;
}

let pendapatanHarian = 0;
pendapatanHarian += totalBayarTrx1;
pendapatanHarian += totalBayarTrx2;
pendapatanHarian += totalBayarTrx3;

let jumlahTransaksi = 0;
jumlahTransaksi++;
jumlahTransaksi++;
jumlahTransaksi++;

const rataRataPendapatan = pendapatanHarian / jumlahTransaksi;

const selisihTerbesar = Math.max(totalBayarTrx1, totalBayarTrx2, totalBayarTrx3) - Math.min(totalBayarTrx1, totalBayarTrx2, totalBayarTrx3);

const persentaseTransaksiPertama = (totalBayarTrx1 / pendapatanHarian) * 100;

const hargaKopiTigaBulan = menu[0].harga * 1.05 ** 3;

console.log("====================================");
console.log("LAPORAN HARIAN KEDAI SENJA");
console.log("Nama kedai:", kedai.nama);
console.log("====================================");

console.log(`
Transaksi 1:
- Subtotal: Rp ${subtotalTrx1.toLocaleString("id-ID")}
- Potongan: Rp ${potonganTrx1.toLocaleString("id-ID")}
- Pajak: Rp ${pajakTrx1.toLocaleString("id-ID")}
- Total Bayar: Rp ${totalBayarTrx1.toLocaleString("id-ID")}
- Kembalian: Rp ${kembalianTrx1.toLocaleString("id-ID")}
- Uang Cukup: ${uangCukupTrx1}
- Gratis Antar: ${gratisAntarTrx1}
- Semua Menu Tersedia: ${semuaMenuTersediaTrx1}

Transaksi 2:
- Subtotal: Rp ${subtotalTrx2.toLocaleString("id-ID")}
- Potongan: Rp ${potonganTrx2.toLocaleString("id-ID")}
- Pajak: Rp ${pajakTrx2.toLocaleString("id-ID")}
- Total Bayar: Rp ${totalBayarTrx2.toLocaleString("id-ID")}
- Kembalian: Rp ${kembalianTrx2.toLocaleString("id-ID")}
- Uang Cukup: ${uangCukupTrx2}
- Gratis Antar: ${gratisAntarTrx2}
- Semua Menu Tersedia: ${semuaMenuTersediaTrx2}

Transaksi 3:
- Subtotal: Rp ${subtotalTrx3.toLocaleString("id-ID")}
- Potongan: Rp ${potonganTrx3.toLocaleString("id-ID")}
- Pajak: Rp ${pajakTrx3.toLocaleString("id-ID")}
- Total Bayar: Rp ${totalBayarTrx3.toLocaleString("id-ID")}
- Kembalian: Rp ${kembalianTrx3.toLocaleString("id-ID")}
- Uang Cukup: ${uangCukupTrx3}
- Gratis Antar: ${gratisAntarTrx3}
- Semua Menu Tersedia: ${semuaMenuTersediaTrx3}

Laporan Harian:
- Pendapatan Harian: Rp ${pendapatanHarian.toLocaleString("id-ID")}
- Jumlah Transaksi: ${jumlahTransaksi}
- Rata-rata Pendapatan: Rp ${rataRataPendapatan.toLocaleString("id-ID")}
- Selisih Terbesar: Rp ${selisihTerbesar.toLocaleString("id-ID")}
- Persentase Transaksi Pertama: ${persentaseTransaksiPertama.toFixed(2)}%
- Harga Kopi 3 Bulan: Rp ${hargaKopiTigaBulan.toLocaleString("id-ID")}

Sisa kembalian 2:
- sisaSetelah50000: ${sisaKembalian50kTrx2}
- sisaSetelah20000: ${sisaKembalian20kTrx2}

Sisa kembalian 3:
- sisaSetelah50000: ${sisaKembalian50kTrx3}
- sisaSetelah20000: ${sisaKembalian20kTrx3}
`);

/*
  Jawaban komentar:
  1. Manual transaksi 2:
     - subtotal = (26000 * 2) + (12000 * 1) = 52000 + 12000 = 64000
     - potongan = 0 (bukan member)
     - pajak = 64000 * 0.11 = 7040
     - totalBayar = 64000 + 7040 = 71040
     - kembalian = 100000 - 71040 = 28960
     Hasil program sama.
  2. Jika gratisAntar memakai &&, maka kondisinya menjadi:
     subtotal >= 100000 && totalItem >= 5
     Untuk transaksi 2, subtotal 64000 dan total item 3, jadi hasil sebelum: false, sesudah: false. 
     Bedanya: || berarti salah satu syarat boleh terpenuhi, && berarti harus keduanya terpenuhi. Semakin ketat.
  3. Contoh:
     totalBayar = subtotal - potongan + pajak
     tanpa kurung: 64000 - 0 + 7040 = 71040
     dengan kurung: subtotal - (potongan + pajak) = 64000 - 7040 = 56960
     Hasil berbeda.
  4. const: menu, kedai, transaksi
     let: subtotalTrx1, potonganTrx2, hargaKopiTigaBulan
     Alasan: const untuk data yang tidak berubah; let untuk variabel yang nilainya dihitung dan berubah.
  5. Karena kenaikan 5% per bulan selama 3 bulan berarti 1,05 dikalikan 3 kali, bukan 1,05 * 3.
     1.05 ** 3 = 1.157625
     1.05 * 3 = 3.15
     Kedua hasil sangat berbeda.
  6. Jika harga pada menu[0] diubah, hasil yang sudah dicetak tidak ikut berubah otomatis, karena angka sudah disalin ke variabel hasil perhitungan.
     Contoh:
     const hargaAwal = menu[0].harga;
     const totalSebelum = totalBayarTrx1;
     menu[0].harga = 25000;
     console.log(hargaAwal, totalSebelum, menu[0].harga);
     console.log(totalSebelum === totalBayarTrx1);
     Hasilnya: totalBayarTrx1 tetap sama, karena nilainya sudah tercetak sebagai angka.
*/

// Catatan bug dalam Bagian 3
// - varian perhitungan yang tidak mungkin diterima jika dipakai pada kasus tertentu
// - semua perhitungan di atas berbasis angka, dan nilai hasil disalin ke variabel terpisah agar tidak berubah saat data menu diubah