# 🎯 Rencana Evaluasi Proyek — Klinik Ban Langsa



## 1. Tujuan Evaluasi

Menilai sejauh mana proyek Klinik Ban Langsa telah mencapai tujuan yang ditetapkan di awal, baik dari sisi **produk** (kualitas sistem), **proses** (manajemen proyek), maupun **bisnis** (manfaat bagi pemilik usaha).

---

## 2. Kriteria Evaluasi

### 2.1 Evaluasi Produk (Deliverables)

| No | Kriteria | Indikator Keberhasilan | Metode Pengukuran | Target |
|:--:|----------|----------------------|-------------------|:------:|
| 1 | Fungsionalitas Lengkap | Semua fitur utama (6 modul) berfungsi sesuai SRS | Checklist fitur + UAT | 100% fitur lulus UAT |
| 2 | Kualitas Kode | Tidak ada bug kritis; bug minor < 5 | Bug tracking log | 0 critical, < 5 minor |
| 3 | Performa | Halaman load < 3 detik pada koneksi 3G | Lighthouse audit | Score ≥ 70 |
| 4 | Keamanan | Tidak ada kerentanan OWASP Top 10 yang terbuka | Security checklist | 0 kerentanan terbuka |
| 5 | Responsivitas | UI berfungsi di desktop dan mobile (320px–1920px) | Manual testing di 3 device | 100% halaman responsif |
| 6 | Usability | Sponsor & kasir dapat menyelesaikan task utama tanpa bantuan | Usability test (task completion rate) | ≥ 85% task completion |

### 2.2 Evaluasi Proses (Manajemen Proyek)

| No | Kriteria | Indikator Keberhasilan | Target |
|:--:|----------|----------------------|:------:|
| 1 | Ketepatan Jadwal | Deviasi tanggal selesai dari rencana | ≤ 5 hari kerja |
| 2 | Ketepatan Estimasi Manday | Rasio manday aktual / manday estimasi | 0.8 – 1.2 (±20%) |
| 3 | Ketepatan Anggaran | Rasio biaya aktual / anggaran estimasi | ≤ 1.1 (max +10%) |
| 4 | Manajemen Risiko | % risiko yang berhasil dimitigasi | ≥ 80% |
| 5 | Komunikasi Tim | Frekuensi daily standup terlaksana | ≥ 80% hari kerja |
| 6 | Kualitas Dokumentasi | Semua dokumen PM lengkap dan up-to-date | 100% dokumen final |

### 2.3 Evaluasi Bisnis (Manfaat bagi Sponsor)

| No | Kriteria | Indikator | Metode |
|:--:|----------|-----------|--------|
| 1 | Efisiensi Transaksi | Waktu pencatatan transaksi lebih cepat dari manual | Perbandingan waktu (sebelum vs sesudah) |
| 2 | Akurasi Stok | Stok sistem sesuai dengan stok fisik | Stock opname sampling |
| 3 | Akses Riwayat Servis | Kasir dapat mencari riwayat servis pelanggan < 30 detik | Task-based test |
| 4 | Laporan Bisnis | Pemilik dapat melihat laporan pendapatan harian/bulanan | Demo + feedback |
| 5 | Kepuasan Pengguna | Feedback positif dari sponsor dan kasir | Kuesioner kepuasan (skala 1–5) |

---

## 3. Metode Evaluasi

### 3.1 User Acceptance Test (UAT)

| Skenario | Deskripsi | Expected Result | Tester |
|----------|-----------|-----------------|:------:|
| UAT-01 | Login sebagai Admin | Dashboard admin tampil | Sponsor |
| UAT-02 | Login sebagai Kasir | Halaman kasir tampil, menu terbatas | Kasir |
| UAT-03 | Tambah produk ban baru | Produk tersimpan, muncul di daftar | Sponsor |
| UAT-04 | Buat transaksi penjualan ban + jasa tambal | Nota tercetak, stok berkurang | Kasir |
| UAT-05 | Cek stok produk yang menipis | Peringatan muncul untuk produk di bawah threshold | Sponsor |
| UAT-06 | Lihat riwayat servis pelanggan | Data kendaraan dan riwayat tampil lengkap | Kasir |
| UAT-07 | Lihat laporan penjualan bulanan | Chart dan tabel pendapatan tampil akurat | Sponsor |
| UAT-08 | Tambah stok masuk dari supplier | Stok ter-update, log mutasi tercatat | Sponsor |

### 3.2 Performance Test

```
Tool      : Google Lighthouse + Chrome DevTools
Target    : Performance ≥ 70, Accessibility ≥ 80, SEO ≥ 80
Perangkat : Desktop + Mobile (throttled 3G)
```

### 3.3 Kuesioner Kepuasan Pengguna

Skala 1–5 (1 = Sangat Tidak Puas, 5 = Sangat Puas):

| No | Pertanyaan |
|:--:|-----------|
| 1 | Apakah sistem mudah digunakan? |
| 2 | Apakah fitur yang tersedia sudah memenuhi kebutuhan toko? |
| 3 | Apakah tampilan sistem menarik dan profesional? |
| 4 | Apakah pencatatan transaksi lebih cepat dibanding cara manual? |
| 5 | Apakah Anda akan terus menggunakan sistem ini? |
| 6 | Berikan saran perbaikan untuk versi selanjutnya: *(teks bebas)* |

---

## 4. Timeline Evaluasi

| Tahap | Aktivitas | Tanggal | PIC |
|-------|----------|:-------:|:---:|
| Pre-evaluasi | Persiapan skenario UAT & kuesioner | 19-Okt-2026 | PM |
| UAT | Pelaksanaan UAT dengan sponsor/kasir | 20–24-Okt-2026 | PM + Dev |
| Performance Audit | Lighthouse audit & optimasi | 25–26-Okt-2026 | Dev 1, Dev 2 |
| Evaluasi Proses | Review jadwal, manday, biaya, risiko | 01-Nov-2026 | PM |
| Kuesioner | Pengisian kuesioner oleh sponsor | 01-Nov-2026 | PM |
| Laporan Evaluasi | Kompilasi hasil evaluasi ke laporan akhir | 02-Nov-2026 | PM |

---

## 5. Format Laporan Evaluasi Akhir

Laporan evaluasi akhir akan mencakup:

1. **Ringkasan Eksekutif** — Kesimpulan pencapaian proyek
2. **Evaluasi Produk** — Checklist fitur, hasil UAT, skor Lighthouse
3. **Evaluasi Proses** — Perbandingan rencana vs realisasi (jadwal, manday, biaya)
4. **Evaluasi Bisnis** — Feedback sponsor, hasil kuesioner
5. **Lessons Learned** — Apa yang berjalan baik, apa yang perlu diperbaiki
6. **Rekomendasi** — Saran untuk pengembangan fase 2

---


