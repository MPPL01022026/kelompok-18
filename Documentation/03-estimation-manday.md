# 📊 Estimation (Manday) — Klinik Ban Langsa

> **Kelompok 18 — MPPL**  
> Dosen Pengampu: Ibu Cut Alna Fadila  
> Versi dokumen: 1.0 | Tanggal: 31 Oktober 2026

---

## 1. Asumsi Estimasi

| Parameter | Nilai |
|-----------|-------|
| Jam kerja per hari | 5 jam (konteks mahasiswa paruh waktu) |
| Hari kerja per minggu | 5 hari (Senin – Jumat) |
| 1 Manday (MD) | 5 jam kerja efektif per orang |
| Jumlah anggota tim | 3 orang |

---

## 2. Estimasi Manday per Aktivitas (WBS)

| ID | Aktivitas | Estimasi Durasi (Hari Kalender) | Jumlah Orang | Estimasi Manday (MD) | Keterangan |
|----|----------|:-------------------------------:|:------------:|:--------------------:|------------|
| A1 | Inisiasi & Perencanaan Proyek | 5 | 3 | **7.5** | Rapat inisiasi, project charter, stakeholder register |
| A2 | Pengumpulan & Analisis Kebutuhan | 7 | 3 | **10.5** | Wawancara, observasi, penyusunan SRS |
| A3 | Pemodelan Sistem | 5 | 2 | **5.0** | Use Case, ERD, Activity & Sequence Diagram |
| A4 | Desain UI/UX | 5 | 1 | **5.0** | Wireframe, mockup, prototype (Figma) |
| A5 | Setup Lingkungan Pengembangan | 3 | 2 | **3.0** | Repo GitHub, boilerplate, CI/CD basic |
| A6 | Modul Autentikasi | 5 | 1 | **5.0** | Login/register, JWT, role guard |
| A7 | Modul Master Data | 7 | 1 | **7.0** | CRUD produk, layanan, pelanggan |
| A8 | Modul Transaksi & Nota | 7 | 2 | **10.0** | Transaksi atomik, stok otomatis, cetak nota |
| A9 | Modul Manajemen Stok | 5 | 1 | **5.0** | Stok masuk, monitoring, peringatan |
| A10 | Modul Riwayat Servis | 5 | 1 | **5.0** | Riwayat kendaraan, reminder ganti oli |
| A11 | Dashboard & Laporan | 5 | 2 | **7.0** | Chart penjualan, mutasi stok, rekap |
| A12 | Integrasi & Pengujian | 5 | 3 | **10.0** | Integration test, UAT, bug list |
| A13 | Perbaikan Bug & Optimasi | 4 | 2 | **5.0** | Bug fix, performance, responsive |
| A14 | Deployment & Dokumentasi | 3 | 2 | **4.0** | Deploy, user guide, technical docs |
| A15 | Serah Terima & Penutupan | 2 | 3 | **3.0** | Demo, evaluasi, laporan akhir |
| | | | **TOTAL** | **91.0 MD** | |

---

## 3. Distribusi Manday per Anggota

| Anggota | Peran | Aktivitas Utama | Estimasi MD |
|---------|-------|----------------|:-----------:|
| Muhammad Fitra Fuadi | Project Manager | A1, A2, A12, A14, A15 + koordinasi | **25.0** |
| Ammra Musharra Akbharieq | Developer 1 | A3, A4, A6, A8, A9, A11, A12, A13 | **35.0** |
| M. Rizal Syahrul Ramadhan | Developer 2 | A3, A5, A7, A8, A10, A11, A12, A13, A14 | **31.0** |
| | | **TOTAL** | **91.0** |

---

## 4. Ringkasan per Fase

| Fase | Manday | Proporsi |
|------|:------:|:--------:|
| Perencanaan & Analisis (A1–A2) | 18.0 | 19.8% |
| Desain (A3–A4) | 10.0 | 11.0% |
| Setup (A5) | 3.0 | 3.3% |
| Pengembangan (A6–A11) | 39.0 | 42.8% |
| QA & Delivery (A12–A15) | 22.0 | 24.2% |
| **Total** | **91.0** | **100%** |

---

## 5. Catatan Estimasi

1. **Buffer / Contingency:** Belum termasuk buffer risiko. Disarankan menambahkan ±10% (~9 MD) untuk keterlambatan tak terduga.
2. **Rework:** Estimasi telah memperhitungkan 1 siklus iterasi minor pada setiap modul.
3. **Paralelisme:** Beberapa aktivitas pengembangan berjalan paralel (A6||A7, A9||A10), sehingga durasi kalender lebih pendek dari total MD.
4. **Metode estimasi:** Menggunakan kombinasi **Expert Judgment** dan **Analogous Estimation** berdasarkan proyek serupa sebelumnya.

---

*Perbandingan estimasi vs realisasi manday didokumentasikan pada [Tracking & Monitoring](./07-tracking-monitoring.md).*
