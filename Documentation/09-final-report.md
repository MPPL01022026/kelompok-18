# 🏁 Laporan Akhir Proyek — Klinik Ban Langsa

> **Kelompok 18 — MPPL**  
> Dosen Pengampu: Ibu Cut Alna Fadila  
> Sponsor: Furqan Nul Fatah (Owner Klinik Ban Langsa)  
> Versi dokumen: 1.0 | Tanggal: 31 Oktober 2026

---

## 1. Ringkasan Eksekutif

Proyek **Klinik Ban Langsa** adalah sistem informasi berbasis web yang dirancang untuk mengelola transaksi penjualan produk ban dan oli, pencatatan layanan servis, manajemen stok inventaris, serta riwayat servis pelanggan pada bengkel Klinik Ban Langsa di Kota Langsa.

Proyek dimulai pada **1 September 2026** dan ditargetkan selesai pada **2 November 2026** (63 hari kerja). Saat ini proyek berada di fase akhir (bug fixing & optimasi) dengan perkiraan selesai **5 November 2026** (+3 hari dari rencana).

---

## 2. Produk Akhir (Deliverables)

### 2.1 Prototipe / Produk

| Modul | Status | Deskripsi |
|-------|:------:|-----------|
| Landing Page | ✅ Selesai | Halaman utama dengan branding Klinik Ban Langsa |
| Login Multi-Role | ✅ Selesai | Autentikasi Admin (Pemilik) dan Kasir via JWT |
| Master Data Produk | ✅ Selesai | CRUD ban luar, ban dalam, oli |
| Master Data Layanan | ✅ Selesai | CRUD jenis layanan servis |
| Master Data Pelanggan | ✅ Selesai | CRUD data pelanggan & kendaraan |
| Transaksi & Cetak Nota | ✅ Selesai | Pencatatan penjualan, pemotongan stok otomatis, cetak nota PDF |
| Manajemen Stok | ✅ Selesai | Monitoring stok, stok masuk, peringatan stok menipis |
| Riwayat Servis | ✅ Selesai | Riwayat servis kendaraan, pengingat ganti oli |
| Dashboard & Laporan | ✅ Selesai | Laporan penjualan, mutasi stok, rekap pendapatan |

### 2.2 Teknologi yang Digunakan

| Komponen | Teknologi |
|----------|-----------|
| Frontend | React 19 + Vite 8 |
| Backend | Node.js + Express.js |
| Database | PostgreSQL + Prisma ORM |
| Auth | JWT + bcrypt |
| Deployment | Vercel (frontend), Railway (backend) |

### 2.3 Dokumentasi Proyek

| Dokumen | File | Status |
|---------|------|:------:|
| Project Schedule | [01-project-schedule.md](./01-project-schedule.md) | ✅ |
| Resource & Responsibility Plan | [02-resource-responsibility-plan.md](./02-resource-responsibility-plan.md) | ✅ |
| Estimation (Manday) | [03-estimation-manday.md](./03-estimation-manday.md) | ✅ |
| Project Cost Estimation | [04-project-cost-estimation.md](./04-project-cost-estimation.md) | ✅ |
| Risk Register | [05-risk-register.md](./05-risk-register.md) | ✅ |
| Evaluation Plan | [06-evaluation-plan.md](./06-evaluation-plan.md) | ✅ |
| Tracking & Monitoring | [07-tracking-monitoring.md](./07-tracking-monitoring.md) | ✅ |
| Change Log | [08-change-log.md](./08-change-log.md) | ✅ |

---

## 3. Pencapaian Tujuan Proyek

| No | Tujuan | Status | Keterangan |
|:--:|--------|:------:|------------|
| 1 | Menyediakan sistem pencatatan transaksi digital | ✅ Tercapai | Modul transaksi berfungsi penuh |
| 2 | Mengelola stok produk secara real-time | ✅ Tercapai | Stok otomatis terpotong saat transaksi |
| 3 | Menyimpan riwayat servis pelanggan | ✅ Tercapai | Data kendaraan & riwayat tersimpan |
| 4 | Menyediakan laporan penjualan untuk pemilik | ✅ Tercapai | Dashboard dengan chart & tabel |
| 5 | Memfasilitasi pengingat ganti oli | ✅ Tercapai | Reminder berdasarkan riwayat servis |
| 6 | Menyelesaikan proyek tepat waktu dan sesuai anggaran | ⚠️ Sebagian | Terlambat +3 hari, anggaran masih dalam toleransi |

---

## 4. Lessons Learned

### Apa yang Berjalan Baik ✅

1. **Pemilihan teknologi tepat:** React + Vite + Prisma memberikan DX (Developer Experience) yang baik dan mempercepat pengembangan.
2. **Komunikasi via WhatsApp Group:** Daily standup singkat efektif untuk tim kecil.
3. **Branching strategy:** Feature branch + code review mencegah konflik besar.
4. **Free tier tools:** Berhasil menekan biaya perangkat & layanan hingga Rp 0.
5. **Early UAT:** Melibatkan sponsor sejak sprint review pertama membantu mengurangi rework.

### Apa yang Perlu Diperbaiki ⚠️

1. **Estimasi durasi terlalu optimis** untuk aktivitas yang melibatkan pihak eksternal (wawancara sponsor).
2. **Learning curve Prisma ORM** tidak diperhitungkan — perlu buffer waktu belajar di awal.
3. **Testing bisa lebih awal:** Unit test seharusnya ditulis bersamaan dengan kode, bukan di akhir.
4. **Dokumentasi teknis** (API docs, database schema) sebaiknya ditulis incremental, bukan di akhir.

---

## 5. Rekomendasi untuk Fase 2

Berdasarkan feedback sponsor dan evaluasi tim, berikut fitur yang direkomendasikan untuk pengembangan selanjutnya:

| No | Fitur | Prioritas | Estimasi MD |
|:--:|-------|:---------:|:-----------:|
| 1 | Fitur Diskon per Item (CR-002) | Tinggi | 5 |
| 2 | Notifikasi WhatsApp ke Pelanggan | Sedang | 7 |
| 3 | Barcode Scanner untuk Produk | Sedang | 4 |
| 4 | Multi-cabang (jika bisnis berkembang) | Rendah | 15 |
| 5 | Mobile App (React Native) | Rendah | 30 |

---

## 6. Penutup

Proyek Klinik Ban Langsa telah berhasil menghasilkan sistem informasi yang fungsional dan memenuhi kebutuhan utama pemilik usaha. Meskipun terdapat keterlambatan minor (+3 hari), secara keseluruhan proyek berjalan sesuai rencana dengan anggaran yang terkendali. Tim telah mendapatkan pengalaman berharga dalam manajemen proyek perangkat lunak yang dapat diterapkan pada proyek-proyek selanjutnya.

---

**Tim Kelompok 18:**

| Nama | Tanda Tangan | Tanggal |
|------|:------------:|:-------:|
| Muhammad Fitra Fuadi (PM) | ________________ | __ / __ / 2026 |
| Ammra Musharra Akbharieq (Dev) | ________________ | __ / __ / 2026 |
| M. Rizal Syahrul Ramadhan (Dev) | ________________ | __ / __ / 2026 |

**Mengetahui:**

| Nama | Tanda Tangan | Tanggal |
|------|:------------:|:-------:|
| Ibu Cut Alna Fadila (Dosen) | ________________ | __ / __ / 2026 |
| Furqan Nul Fatah (Sponsor) | ________________ | __ / __ / 2026 |

---

*Dokumen ini adalah laporan akhir proyek Klinik Ban Langsa — Kelompok 18 MPPL.*
