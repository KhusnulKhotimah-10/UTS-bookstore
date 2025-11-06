# Toko Buku Digital
🧩 Deskripsi Singkat

Toko Buku Digital adalah website berbasis HTML + CSS + JavaScript murni (tanpa framework) yang digunakan untuk:

Menampilkan katalog buku digital.

Melakukan checkout pembelian buku.

Melacak status pengiriman buku (tracking).

Dilengkapi halaman login, dashboard user, dan halaman admin.

Desain menggunakan tema cerah profesional (putih–biru pastel), sederhana namun modern.
Seluruh data bersifat dummy (contoh) dan disimpan dalam file data.js.

#  Struktur Folder dan File
web bookstore/
│
├── index.html          → Halaman login utama
├── dashboard.html      → Halaman utama setelah login (menu & katalog buku)
├── stok.html           → Halaman daftar buku / katalog
├── checkout.html       → Halaman checkout buku
├── tracking.html       → Halaman pelacakan status pengiriman
│
├── data.js             → File berisi data dummy (akun, katalog, tracking)
├── script.js           → Logika login, penyimpanan session, validasi form, dll
├── style.css           → Tampilan utama (warna putih-biru pastel)
│
└── README.md           → Dokumentasi (file ini)

# Login
Gunakan akun contoh berikut (tersimpan di data.js):
| Role  | Email                                             | Password | Nama         |
| ----- | ------------------------------------------------- | -------- | ------------ |
| Admin | [admin@bookstore.com](mailto:admin@bookstore.com) | admin123 | Admin UT     |
| User  | [user@bookstore.com](mailto:user@bookstore.com)   | user123  | Budi Pembeli |

# Dashboard
Menampilkan:

Menu cepat (stok, tracking, laporan, history).
Rekomendasi buku.
Tombol Checkout untuk langsung menuju halaman pembayaran.

# Desain dan Warna

Warna utama: #1976d2 (biru pastel)
Latar belakang: #ffffff (putih)
Elemen tombol & kartu memiliki radius lembut dan bayangan ringan.
Font open sans.
elemen stiker kyboard
