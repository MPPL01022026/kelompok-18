# 📈 Tracking & Monitoring — Klinik Ban Langsa


## 1. Perbandingan Rencana vs Realisasi Waktu

| ID | Aktivitas | Rencana Mulai | Rencana Selesai | Aktual Mulai | Aktual Selesai | Deviasi (Hari) | Status |
|----|----------|:------------:|:--------------:|:------------:|:--------------:|:--------------:|:------:|
| A1 | Inisiasi & Perencanaan | 01-Sep | 05-Sep | 01-Sep | 05-Sep | 0 | ✅ Selesai |
| A2 | Pengumpulan Kebutuhan | 06-Sep | 12-Sep | 06-Sep | 14-Sep | +2 | ✅ Selesai |
| A3 | Pemodelan Sistem | 13-Sep | 17-Sep | 15-Sep | 20-Sep | +3 | ✅ Selesai |
| A4 | Desain UI/UX | 18-Sep | 22-Sep | 21-Sep | 25-Sep | +3 | ✅ Selesai |
| A5 | Setup Lingkungan Dev | 23-Sep | 25-Sep | 26-Sep | 28-Sep | +3 | ✅ Selesai |
| A6 | Modul Autentikasi | 26-Sep | 30-Sep | 29-Sep | 03-Okt | +3 | ✅ Selesai |
| A7 | Modul Master Data | 01-Okt | 07-Okt | 29-Sep | 07-Okt | 0 | ✅ Selesai |
| A8 | Modul Transaksi & Nota | 08-Okt | 14-Okt | 08-Okt | 16-Okt | +2 | ✅ Selesai |
| A9 | Modul Manajemen Stok | 08-Okt | 12-Okt | 08-Okt | 13-Okt | +1 | ✅ Selesai |
| A10 | Modul Riwayat Servis | 13-Okt | 17-Okt | 14-Okt | 19-Okt | +2 | ✅ Selesai |
| A11 | Dashboard & Laporan | 15-Okt | 19-Okt | 17-Okt | 22-Okt | +3 | ✅ Selesai |
| A12 | Integrasi & Pengujian | 20-Okt | 24-Okt | 23-Okt | 28-Okt | +4 | ✅ Selesai |
| A13 | Perbaikan Bug & Optimasi | 25-Okt | 28-Okt | 29-Okt | 31-Okt | +3 | 🔄 In Progress |
| A14 | Deployment & Dokumentasi | 29-Okt | 31-Okt | — | — | — | ⏳ Pending |
| A15 | Serah Terima & Penutupan | 01-Nov | 02-Nov | — | — | — | ⏳ Pending |

### Ringkasan Deviasi Waktu

| Metrik | Nilai |
|--------|:-----:|
| Target selesai proyek | 02-Nov-2026 |
| Perkiraan selesai aktual | 05-Nov-2026 |
| Total deviasi | **+3 hari** |
| Penyebab utama | Keterlambatan wawancara sponsor (A2), learning curve Prisma (A3–A5) |

---

## 2. Perbandingan Estimasi Manday vs Manday Aktual

| ID | Aktivitas | Estimasi MD | Aktual MD | Deviasi | % Deviasi |
|----|----------|:-----------:|:---------:|:-------:|:---------:|
| A1 | Inisiasi & Perencanaan | 7.5 | 7.0 | -0.5 | -6.7% |
| A2 | Pengumpulan Kebutuhan | 10.5 | 12.0 | +1.5 | +14.3% |
| A3 | Pemodelan Sistem | 5.0 | 6.0 | +1.0 | +20.0% |
| A4 | Desain UI/UX | 5.0 | 5.0 | 0 | 0% |
| A5 | Setup Lingkungan Dev | 3.0 | 4.0 | +1.0 | +33.3% |
| A6 | Modul Autentikasi | 5.0 | 5.5 | +0.5 | +10.0% |
| A7 | Modul Master Data | 7.0 | 7.0 | 0 | 0% |
| A8 | Modul Transaksi & Nota | 10.0 | 12.0 | +2.0 | +20.0% |
| A9 | Modul Manajemen Stok | 5.0 | 5.0 | 0 | 0% |
| A10 | Modul Riwayat Servis | 5.0 | 5.5 | +0.5 | +10.0% |
| A11 | Dashboard & Laporan | 7.0 | 8.0 | +1.0 | +14.3% |
| A12 | Integrasi & Pengujian | 10.0 | 11.0 | +1.0 | +10.0% |
| A13 | Perbaikan Bug & Optimasi | 5.0 | 4.0* | -1.0 | -20.0% |
| A14 | Deployment & Dokumentasi | 4.0 | —* | — | — |
| A15 | Serah Terima & Penutupan | 3.0 | —* | — | — |
| | **TOTAL** | **91.0** | **92.0*** | **+1.0** | **+1.1%** |

> \* A13 masih berjalan; A14, A15 belum dimulai. Total aktual bersifat sementara.

### Analisis Manday

| Metrik | Nilai |
|--------|:-----:|
| Total Estimasi | 91.0 MD |
| Total Aktual (s.d. saat ini) | 92.0 MD |
| Rasio Aktual / Estimasi | **1.01** |
| Status | ✅ Dalam toleransi (±20%) |

---

## 3. Perbandingan Anggaran vs Biaya Aktual

| Kategori | Anggaran (Rp) | Aktual (Rp) | Deviasi | % Deviasi |
|----------|:-------------:|:-----------:|:-------:|:---------:|
| Tenaga Kerja | 6.825.000 | 6.900.000 | +75.000 | +1.1% |
| Perangkat & Layanan | 150.000 | 0 | -150.000 | -100% |
| Overhead | 1.050.000 | 950.000 | -100.000 | -9.5% |
| **Subtotal** | **8.025.000** | **7.850.000** | **-175.000** | **-2.2%** |
| Contingency (10%) | 802.500 | — | — | — |
| **TOTAL** | **8.827.500** | **7.850.000** | **-977.500** | **-11.1%** |

### Catatan Biaya

- **Perangkat & Layanan:** Domain custom tidak jadi digunakan; semua menggunakan free tier → hemat Rp 150.000.
- **Overhead:** Transportasi lebih hemat karena 1 kunjungan dilakukan via video call → hemat Rp 100.000.
- **Tenaga Kerja:** Sedikit lebih tinggi karena manday aktual naik 1 MD.

---

## 4. Daftar Masalah (Issue Log)

| No | Tanggal | Masalah | Dampak | Tindakan Korektif | Status |
|:--:|:-------:|--------|--------|-------------------|:------:|
| I1 | 08-Sep | Sponsor sulit dihubungi untuk wawancara | Keterlambatan A2 (+2 hari) | Kirim pertanyaan via WhatsApp, jadwalkan ulang | ✅ Resolved |
| I2 | 16-Sep | Tim belum familiar dengan Prisma ORM | Keterlambatan A3, A5 | Adakan sesi belajar bersama 2 hari | ✅ Resolved |
| I3 | 10-Okt | Bug race condition pada transaksi concurrent | Data stok tidak konsisten | Implementasi `$transaction()` Prisma | ✅ Resolved |
| I4 | 18-Okt | Chart dashboard tidak responsif di mobile | Tampilan terpotong | Ganti library chart, tambahkan responsive breakpoint | ✅ Resolved |
| I5 | 25-Okt | UAT: Sponsor minta tambah fitur "diskon" | Potensi scope creep | Dicatat sebagai enhancement fase 2; tidak diimplementasi di sprint ini | ✅ Resolved |
| I6 | 29-Okt | Build error saat deploy ke Vercel | Deployment gagal | Perbaiki env variable & build config | 🔄 In Progress |

---

## 5. Perubahan Ruang Lingkup (Change Log)

| No | Tanggal | Perubahan | Alasan | Dampak | Keputusan |
|:--:|:-------:|----------|--------|--------|:---------:|
| C1 | 14-Sep | Tambah fitur "Pengingat Ganti Oli" | Permintaan sponsor saat wawancara | +2 MD, +2 hari | ✅ Diterima (masih dalam scope awal) |
| C2 | 25-Okt | Permintaan fitur "Diskon per Item" | Sponsor ingin promo | +5 MD, +3 hari | ❌ Ditolak (dijadwalkan fase 2) |
| C3 | 27-Okt | Ubah format nota dari HTML ke PDF | Kasir lebih mudah mencetak | +1 MD, +1 hari | ✅ Diterima (dampak kecil) |

---

## 6. Earned Value Analysis (EVA)

> Tanggal snapshot: **31 Oktober 2026** (Hari ke-61 dari 63)

| Metrik | Nilai | Formula |
|--------|------:|---------|
| BAC (Budget at Completion) | Rp 8.025.000 | Total anggaran tanpa contingency |
| PV (Planned Value) | Rp 7.823.000 | Budget × % pekerjaan seharusnya selesai (97.5%) |
| EV (Earned Value) | Rp 7.221.000 | Budget × % pekerjaan aktual selesai (90%) |
| AC (Actual Cost) | Rp 7.850.000 | Biaya aktual yang dikeluarkan |
| **SV (Schedule Variance)** | **-Rp 602.000** | EV - PV (negatif = terlambat) |
| **CV (Cost Variance)** | **-Rp 629.000** | EV - AC (negatif = over budget sementara) |
| **SPI (Schedule Performance Index)** | **0.92** | EV / PV (< 1 = terlambat) |
| **CPI (Cost Performance Index)** | **0.92** | EV / AC (< 1 = over budget) |
| **EAC (Estimate at Completion)** | **Rp 8.723.000** | BAC / CPI |
| **ETC (Estimate to Complete)** | **Rp 873.000** | EAC - AC |

### Interpretasi

- **SPI 0.92:** Proyek sedikit terlambat (~8% dari rencana), terutama karena keterlambatan awal pada pengumpulan kebutuhan.
- **CPI 0.92:** Biaya sedikit melebihi nilai pekerjaan yang diselesaikan, tetapi masih dalam toleransi contingency.
- **EAC Rp 8.723.000:** Estimasi total biaya akhir masih di bawah anggaran + contingency (Rp 8.827.500) → **proyek masih on track secara anggaran**.

---

## 7. Status Risiko Terkini

| ID | Risiko | Skor Awal | Status Saat Ini | Catatan |
|:--:|--------|:---------:|:---------------:|---------|
| R3 | Scope Creep | 16 | 🟡 Mitigated | C2 ditolak, scope terkendali |
| R5 | Bug Transaksi | 10 | 🟢 Closed | Resolved via Prisma transaction |
| R10 | Keamanan Data | 10 | 🟡 Mitigated | Helmet.js & validation diterapkan |
| R4 | Kurang Pengalaman | 9 | 🟢 Closed | Sesi belajar berhasil |
| R2 | Keterlambatan Kebutuhan | 9 | 🟢 Closed | Wawancara selesai |

---


