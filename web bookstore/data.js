// data.js - dummy data for users, katalog, tracking
(function () {
  const users = [
    { role: "admin", email: "admin@bookstore.com", password: "admin123", name: "Admin UT" },
    { role: "user",  email: "user@bookstore.com",  password: "user123",  name: "Budi Pembeli" }
  ];

  const dataKatalogBuku = [
    {
      kodeBarang: "B001",
      namaBuku: "Belajar Python Dasar",
      penulis: "Ahmad Zaky",
      stok: 12,
      harga: 65000,
      cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=60"
    },
    {
      kodeBarang: "B002",
      namaBuku: "Jaringan Komputer",
      penulis: "Siti Nurhaliza",
      stok: 8,
      harga: 75000,
      cover: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=60"
    },
    {
      kodeBarang: "B003",
      namaBuku: "Cybersecurity untuk Pemula",
      penulis: "Agung Saputra",
      stok: 5,
      harga: 85000,
      cover: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=60"
    },
    {
      kodeBarang: "B004",
      namaBuku: "Logika Informatika",
      penulis: "Rina Kartika",
      stok: 9,
      harga: 60000,
      cover: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=60"
    }
  ];

  // dataTracking keyed by DO number
  const dataTracking = {
    "DO2025001": {
      nomorDO: "DO2025001",
      nama: "Budi Pembeli",
      status: "Dalam Perjalanan",
      ekspedisi: "JNE - REG",
      tanggalKirim: "2025-10-01",
      paket: "REG",
      total: 175000,
      perjalanan: [
        { waktu: "2025-10-01 09:00", keterangan: "Paket diterima di gudang" },
        { waktu: "2025-10-01 14:30", keterangan: "Tiba di hub regional" },
        { waktu: "2025-10-02 08:45", keterangan: "Dalam pengantaran kurir" }
      ]
    },
    "DO2025002": {
      nomorDO: "DO2025002",
      nama: "Siti Pelanggan",
      status: "Selesai",
      ekspedisi: "POS - KILAT",
      tanggalKirim: "2025-09-28",
      paket: "KILAT",
      total: 220000,
      perjalanan: [
        { waktu: "2025-09-28 10:15", keterangan: "Paket diterima" },
        { waktu: "2025-09-29 16:00", keterangan: "Selesai antar - penerima menerima paket" }
      ]
    }
  };

  // expose to global scope so other scripts can access
  window.users = users;
  window.dataKatalogBuku = dataKatalogBuku;
  window.dataTracking = dataTracking;
})();
