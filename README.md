<p align="center">
  <img src="assets/branding/readme-banner.gif" width="100%" alt="Klinik Ban Langsa — ban melaju dengan efek api" />
</p>

# Klinik Ban Langsa (Sistem Informasi Penjualan, Stok, dan Layanan)

Sistem informasi berbasis web yang responsif untuk mengelola transaksi penjualan produk ban dan oli, pencatatan layanan servis, manajemen stok inventaris, serta riwayat servis pelanggan pada bengkel Klinik Ban Langsa.

---

## Tim Pengembang (Kelompok 18 - MPPL)

- **Dosen Pengampu:** Ibu Cut Alna Fadila
- **Sponsor / Pemilik Usaha:** Furqan Nul Fatah (Owner Klinik Ban Langsa)

<table>
  <tr>
    <td align="center" width="33%">
      <img src="assets/team/muhammad-fitra-fuadi.gif" width="210" alt="Avatar Muhammad Fitra Fuadi" /><br />
      <strong>Muhammad Fitra Fuadi</strong><br />
      <sub>Project Manager</sub>
    </td>
    <td align="center" width="33%">
      <img src="assets/team/ammra-musharra-akhbharieq.gif" width="210" alt="Avatar Ammra Musharra Akbharieq" /><br />
      <strong>Ammra Musharra Akbharieq</strong><br />
      <sub>Developer</sub>
    </td>
    <td align="center" width="33%">
      <img src="assets/team/muhammad-rizal-syahrul-ramadhan.gif" width="210" alt="Avatar Muhammad Rizal Syahrul Ramadhan" /><br />
      <strong>Muhammad Rizal Syahrul Ramadhan</strong><br />
      <sub>Developer</sub>
    </td>
  </tr>
</table>

---

## Fitur Utama

- **Login Multi-Role:** Pembagian hak akses antara Pemilik (Admin) dan Kasir.
- **Master Data:** Pengelolaan katalog produk (ban luar, ban dalam, oli), jenis layanan (tambal tip top, hot press, vacum gun, tambal dalam, ganti oli), dan data pelanggan.
- **Transaksi dan Cetak Nota:** Pencatatan transaksi penjualan produk dan jasa secara atomik, pemotongan stok otomatis, serta cetak nota kasir.
- **Manajemen Stok:** Pemantauan stok terkini, pencatatan stok masuk dari pemasok, dan peringatan stok menipis.
- **Riwayat Servis dan Pengingat Ganti Oli:** Penyimpanan riwayat servis kendaraan pelanggan dan penentuan jadwal ganti oli berikutnya.
- **Dashboard dan Laporan:** Laporan penjualan harian/bulanan, posisi dan mutasi stok, serta rekap pendapatan jasa.

---

## Teknologi yang Digunakan

| Bagian | Teknologi |
| :--- | :--- |
| Frontend | React (dibuat dengan Vite) |
| Routing | React Router |
| Panggilan API | Axios |
| Backend | Node.js + Express.js (REST API) |
| ORM | Prisma |
| Database | PostgreSQL |
| Autentikasi | JWT + bcrypt |
| Manajemen Proyek | Trello |
| Pemodelan Sistem | draw.io (ERD dan Use Case) |

---

## Manajemen Proyek

Aktivitas pengerjaan tugas dan alur sprint tim dipantau melalui Trello board berikut:
- [Trello Board - Klinik Ban Langsa](https://trello.com/b/aEOFUulL/klinik-ban-langsa)

---

### Prasyarat
- Node.js (versi 18 ke atas)
- PostgreSQL

### 1. Setup Backend
```bash
cd backend
npm install
# Konfigurasi file .env (koneksi database PostgreSQL)
npx prisma migrate dev
npm run dev
```

### 2. Setup Frontend
```bash
cd frontend
npm install
npm run dev
```
