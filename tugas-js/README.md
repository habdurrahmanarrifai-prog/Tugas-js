C. Jawaban pertanyaan Langkah 1
1. Mengapa namausaha dan namaUsaha dianggap dua hal berbeda?

Karena JavaScript bersifat case-sensitive, sehingga huruf besar dan
huruf kecil dianggap berbeda. Jadi namausaha dan namaUsaha merupakan
dua nama variabel yang berbeda.

2. Mengapa TARIF_PAJAK = 0.12 ditolak, sedangkan statusBuka boleh diubah?

TARIF_PAJAK menggunakan const sehingga nilainya tidak boleh diubah
setelah dibuat. Sedangkan statusBuka menggunakan let sehingga nilainya
masih boleh diubah.

3. Mengapa "2020" + 1 menghasilkan "20201"?

Karena "2020" adalah string, bukan number. Operator + ketika digunakan
dengan string akan menggabungkan nilai, sehingga hasilnya "20201".
Saya memperbaikinya dengan Number(tahunBerdiri) + 1 agar hasilnya 2021.

6. Jawaban pertanyaan Langkah 2
Pertanyaan 1: Mengapa nomor WhatsApp sebaiknya disimpan sebagai string?

Jawaban:

Nomor WhatsApp sebaiknya disimpan sebagai string karena nomor telepon bukan angka yang digunakan untuk perhitungan. Jika disimpan sebagai number, angka 0 di bagian depan bisa hilang.

Pertanyaan 2: Apa bedanya null dan undefined?

Jawaban:

null berarti kita sengaja memberikan nilai kosong pada suatu variabel atau properti. Sedangkan undefined biasanya berarti variabel atau properti tersebut belum memiliki nilai.

Contoh:

let website = null;

let alamat;

Pada contoh tersebut:

console.log(website);

hasilnya:

null

Sedangkan:

console.log(alamat);

hasilnya:

undefined
Pertanyaan 3: Mengapa daftarProduk[4] bukan produk ke-4? Apa hasilnya?

Jawaban:

Karena index array dimulai dari 0, maka produk ke-4 berada pada index 3. Jika menggunakan daftarProduk[4], JavaScript akan mencari data pada index kelima yang tidak ada sehingga hasilnya adalah undefined.

Contoh:

console.log(daftarProduk[4]);

Hasil:

undefined
7. Bagian yang perlu kamu pahami untuk presentasi

Kalau nanti ditanya guru/dosen, “Kenapa produk ke-4 index-nya 3?”, jawaban sederhananya:

“Karena array JavaScript dimulai dari index 0. Jadi produk pertama index 0, kedua 1, ketiga 2, dan keempat 3.”

Kalau ditanya “Kenapa WhatsApp string?”:

“Karena nomor WhatsApp bukan untuk dihitung. Selain itu, kalau dibuat number, angka 0 di depan nomor bisa hilang.”

Kalau ditanya “Kenapa website pakai null?”:

“Karena website belum diisi, jadi saya sengaja memberikan nilai kosong menggunakan null.”

Langkah 2 selesai. Berikutnya adalah Jawaban 3 — Langkah 3: perhitungan pajak, harga termurah/termahal, dan umur usaha.