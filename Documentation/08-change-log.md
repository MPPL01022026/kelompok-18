# 📝 Change Log — Klinik Ban Langsa

> **Kelompok 18 — MPPL**  
> Dosen Pengampu: Ibu Cut Alna Fadila  
> Versi dokumen: 1.0 | Tanggal: 31 Oktober 2026

---

## Riwayat Perubahan Proyek

Log ini mencatat semua perubahan signifikan pada ruang lingkup, jadwal, anggaran, atau tim proyek.

---

### Format Entri

| Field | Deskripsi |
|-------|-----------|
| **ID** | Nomor unik perubahan (CR-001, CR-002, ...) |
| **Tanggal** | Tanggal perubahan diajukan |
| **Pengaju** | Pihak yang mengajukan perubahan |
| **Kategori** | Scope / Schedule / Budget / Team / Technical |
| **Deskripsi** | Penjelasan perubahan yang diminta |
| **Alasan** | Mengapa perubahan diperlukan |
| **Dampak** | Efek pada jadwal, biaya, dan/atau manday |
| **Keputusan** | Diterima / Ditolak / Ditunda |
| **Disetujui Oleh** | PM / Dosen / Sponsor |

---

## Daftar Change Request

### CR-001 — Tambah Fitur Pengingat Ganti Oli

| Field | Detail |
|-------|--------|
| **Tanggal** | 14 September 2026 |
| **Pengaju** | Furqan Nul Fatah (Sponsor) |
| **Kategori** | Scope |
| **Deskripsi** | Menambahkan fitur pengingat jadwal ganti oli berdasarkan riwayat servis kendaraan pelanggan |
| **Alasan** | Fitur ini sangat dibutuhkan untuk meningkatkan loyalitas pelanggan dan menjadi nilai tambah toko |
| **Dampak** | +2 manday, +2 hari kalender. Ditambahkan ke modul Riwayat Servis (A10) |
| **Keputusan** | ✅ **Diterima** — Fitur masih dalam scope besar yang direncanakan |
| **Disetujui Oleh** | Muhammad Fitra Fuadi (PM) |

---

### CR-002 — Tambah Fitur Diskon per Item

| Field | Detail |
|-------|--------|
| **Tanggal** | 25 Oktober 2026 |
| **Pengaju** | Furqan Nul Fatah (Sponsor) |
| **Kategori** | Scope |
| **Deskripsi** | Menambahkan kemampuan memberikan diskon persen atau nominal per item pada transaksi |
| **Alasan** | Sponsor ingin menjalankan promo diskon pada produk tertentu |
| **Dampak** | +5 manday, +3 hari kalender. Mempengaruhi modul Transaksi (A8) dan Dashboard (A11) |
| **Keputusan** | ❌ **Ditolak** — Dampak terlalu besar di fase akhir proyek. Dijadwalkan untuk fase 2 |
| **Disetujui Oleh** | Muhammad Fitra Fuadi (PM), dikonsultasikan dengan Ibu Cut Alna Fadila |

---

### CR-003 — Ubah Format Nota dari HTML ke PDF

| Field | Detail |
|-------|--------|
| **Tanggal** | 27 Oktober 2026 |
| **Pengaju** | Tim Developer |
| **Kategori** | Technical |
| **Deskripsi** | Mengubah format output nota dari render HTML ke file PDF yang dapat didownload/print |
| **Alasan** | Kasir lebih mudah mencetak nota dalam format PDF dibanding HTML print |
| **Dampak** | +1 manday, +1 hari kalender. Perlu menambahkan library PDF generator |
| **Keputusan** | ✅ **Diterima** — Dampak kecil dan meningkatkan usability secara signifikan |
| **Disetujui Oleh** | Muhammad Fitra Fuadi (PM) |

---

## Ringkasan

| Status | Jumlah | Dampak Total MD |
|--------|:------:|:---------------:|
| ✅ Diterima | 2 | +3 MD |
| ❌ Ditolak | 1 | 0 MD (dihindari +5 MD) |
| ⏸️ Ditunda | 0 | — |
| **Total** | **3** | **+3 MD** |

---

*Setiap change request baru harus diajukan melalui PM dan didokumentasikan di sini sebelum implementasi dimulai.*
