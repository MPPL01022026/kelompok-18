# 💰 Project Cost Estimation — Klinik Ban Langsa



## 1. Asumsi Biaya

| Parameter | Nilai | Catatan |
|-----------|-------|---------|
| Tarif tenaga kerja (mahasiswa) | Rp 75.000 / manday | Estimasi biaya opportunity cost |
| Durasi proyek | ~63 hari kerja | September – November 2026 |
| Total estimasi manday | 91 MD | Lihat [Estimation Manday](./03-estimation-manday.md) |

---

## 2. Biaya Tenaga Kerja

| Anggota | Peran | Estimasi MD | Tarif/MD | Total Biaya |
|---------|-------|:-----------:|:--------:|:-----------:|
| Muhammad Fitra Fuadi | Project Manager | 25.0 | Rp 75.000 | Rp 1.875.000 |
| Ammra Musharra Akbharieq | Developer 1 | 35.0 | Rp 75.000 | Rp 2.625.000 |
| M. Rizal Syahrul Ramadhan | Developer 2 | 31.0 | Rp 75.000 | Rp 2.325.000 |
| | | **91.0** | | **Rp 6.825.000** |

---

## 3. Biaya Perangkat & Layanan

| Item | Jenis | Biaya/Bulan | Durasi | Total Biaya | Keterangan |
|------|-------|:-----------:|:------:|:-----------:|------------|
| Domain `.com` | Layanan | — | 1 tahun | Rp 150.000 | Opsional, untuk branding |
| Hosting (Vercel Free) | Layanan | Rp 0 | — | **Rp 0** | Frontend hosting gratis |
| Backend Hosting (Railway Free) | Layanan | Rp 0 | — | **Rp 0** | Free tier 500 jam/bulan |
| PostgreSQL (Supabase Free) | Layanan | Rp 0 | — | **Rp 0** | Free tier 500 MB |
| GitHub (Free) | Layanan | Rp 0 | — | **Rp 0** | Repo & CI gratis |
| Figma (Free Edu) | Tool | Rp 0 | — | **Rp 0** | Lisensi edukasi |
| draw.io | Tool | Rp 0 | — | **Rp 0** | Open source |
| Trello (Free) | Tool | Rp 0 | — | **Rp 0** | Free tier cukup |
| VS Code | Tool | Rp 0 | — | **Rp 0** | Open source |
| Postman (Free) | Tool | Rp 0 | — | **Rp 0** | Free tier |
| | | | | **Rp 150.000** | |

---

## 4. Biaya Overhead

| Item | Biaya | Keterangan |
|------|:-----:|------------|
| Internet & Listrik (3 orang × 2 bulan) | Rp 600.000 | Estimasi Rp 100.000/orang/bulan |
| Transportasi (wawancara sponsor) | Rp 150.000 | 2-3 kali kunjungan ke Klinik Ban Langsa |
| Cetak dokumen & laporan | Rp 100.000 | Laporan akhir untuk dosen |
| Konsumsi rapat | Rp 200.000 | Rapat offline sprint review |
| | **Rp 1.050.000** | |

---

## 5. Ringkasan Total Biaya Proyek

| Kategori | Biaya |
|----------|------:|
| Tenaga Kerja | Rp 6.825.000 |
| Perangkat & Layanan | Rp 150.000 |
| Overhead | Rp 1.050.000 |
| **Subtotal** | **Rp 8.025.000** |
| Contingency (10%) | Rp 802.500 |
| **TOTAL ESTIMASI PROYEK** | **Rp 8.827.500** |

---

## 6. Proporsi Biaya

```
Tenaga Kerja     ████████████████████████████░░  77.3%
Overhead         ████░░░░░░░░░░░░░░░░░░░░░░░░░░  11.9%
Perangkat        █░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   1.7%
Contingency      ███░░░░░░░░░░░░░░░░░░░░░░░░░░░   9.1%
```

---

## 7. Catatan

1. Sebagian besar tools menggunakan **free tier / open source**, sehingga biaya perangkat sangat minimal.
2. Biaya tenaga kerja dihitung sebagai **opportunity cost** untuk keperluan akademik, bukan biaya riil yang dikeluarkan.
3. Biaya domain bersifat **opsional** — jika tidak menggunakan domain custom, biaya perangkat menjadi Rp 0.
4. Perbandingan anggaran vs biaya aktual didokumentasikan pada [Tracking & Monitoring](./07-tracking-monitoring.md).

---


