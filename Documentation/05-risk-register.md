# ⚠️ Risk Register — Klinik Ban Langsa

> **Kelompok 18 — MPPL**  
> Dosen Pengampu: Ibu Cut Alna Fadila  
> Versi dokumen: 1.0 | Tanggal: 31 Oktober 2026

---

## 1. Matriks Penilaian Risiko

### Skala Probabilitas

| Level | Probabilitas | Deskripsi |
|:-----:|:------------:|-----------|
| 1 | Sangat Rendah | < 10% kemungkinan terjadi |
| 2 | Rendah | 10–30% kemungkinan terjadi |
| 3 | Sedang | 30–50% kemungkinan terjadi |
| 4 | Tinggi | 50–70% kemungkinan terjadi |
| 5 | Sangat Tinggi | > 70% kemungkinan terjadi |

### Skala Dampak

| Level | Dampak | Deskripsi |
|:-----:|:------:|-----------|
| 1 | Minimal | Tidak berdampak signifikan pada jadwal/biaya |
| 2 | Minor | Keterlambatan 1–3 hari |
| 3 | Moderat | Keterlambatan 3–7 hari atau penambahan biaya 10–20% |
| 4 | Mayor | Keterlambatan > 7 hari atau penambahan biaya > 20% |
| 5 | Kritis | Kegagalan proyek atau deliverable utama tidak terkirim |

### Heat Map

```
Dampak →     1       2       3       4       5
Prob. ↓  ┌───────┬───────┬───────┬───────┬───────┐
   5     │   5   │  10   │  15   │  20   │  25   │
         ├───────┼───────┼───────┼───────┼───────┤
   4     │   4   │   8   │  12   │  16   │  20   │
         ├───────┼───────┼───────┼───────┼───────┤
   3     │   3   │   6   │   9   │  12   │  15   │
         ├───────┼───────┼───────┼───────┼───────┤
   2     │   2   │   4   │   6   │   8   │  10   │
         ├───────┼───────┼───────┼───────┼───────┤
   1     │   1   │   2   │   3   │   4   │   5   │
         └───────┴───────┴───────┴───────┴───────┘

Skor:  1–4 = Rendah (Hijau)   |   5–9 = Sedang (Kuning)
      10–15 = Tinggi (Oranye) |  16–25 = Kritis (Merah)
```

---

## 2. Daftar Risiko (Risk Register)

| ID | Risiko | Kategori | Prob. | Dampak | Skor | Strategi Mitigasi | PIC | Status |
|:--:|--------|:--------:|:-----:|:------:|:----:|-------------------|:---:|:------:|
| R1 | **Anggota tim sakit atau tidak tersedia** selama masa pengembangan | SDM | 3 | 3 | **9** | Distribusi pengetahuan (knowledge sharing), dokumentasi kode, pair programming saat modul kritis | PM | 🟡 Open |
| R2 | **Keterlambatan pengumpulan kebutuhan** karena sulitnya jadwal wawancara dengan sponsor | Jadwal | 3 | 3 | **9** | Siapkan daftar pertanyaan di awal, gunakan WhatsApp untuk follow-up, sediakan jadwal alternatif | PM | 🟡 Open |
| R3 | **Perubahan requirement** dari sponsor di tengah pengembangan (scope creep) | Scope | 4 | 4 | **16** | Change request formal, freeze scope setelah SRS disetujui, buffer 10% jadwal | PM | 🔴 Open |
| R4 | **Kurangnya pengalaman tim** dengan teknologi (React, Prisma, PostgreSQL) | Teknis | 3 | 3 | **9** | Sesi belajar bersama di awal, gunakan tutorial/dokumentasi resmi, code review | Dev 1 & 2 | 🟡 Open |
| R5 | **Bug kritis** pada modul transaksi yang menyebabkan data inkonsisten | Teknis | 2 | 5 | **10** | Gunakan database transaction (atomic), unit testing, integration testing | Dev 1 | 🟠 Open |
| R6 | **Kehilangan data/kode** karena konflik Git atau kerusakan perangkat | Teknis | 2 | 4 | **8** | Branching strategy (feature branch), commit rutin, backup ke cloud | Dev 2 | 🟡 Open |
| R7 | **Kegagalan deployment** karena konfigurasi server/hosting tidak sesuai | Teknis | 2 | 3 | **6** | Trial deployment di awal sprint terakhir, gunakan platform PaaS (Vercel/Railway) | Dev 2 | 🟡 Open |
| R8 | **Jadwal kuliah bertabrakan** dengan deadline proyek | SDM | 4 | 2 | **8** | Perencanaan sprint mempertimbangkan kalender akademik, kerjakan di akhir pekan jika perlu | PM | 🟡 Open |
| R9 | **Free tier hosting habis** atau dibatasi oleh provider | Infrastruktur | 2 | 2 | **4** | Monitoring usage, siapkan alternatif hosting, optimasi resource | Dev 2 | 🟢 Open |
| R10 | **Keamanan data pelanggan** terancam (SQL injection, XSS) | Keamanan | 2 | 5 | **10** | Gunakan parameterized query (Prisma), sanitasi input, HTTPS, helmet.js | Dev 1 | 🟠 Open |
| R11 | **Performa aplikasi lambat** saat data membesar | Teknis | 2 | 3 | **6** | Indexing database, pagination, lazy loading, caching | Dev 1 & 2 | 🟡 Open |
| R12 | **User resistance** — sponsor/kasir kesulitan menggunakan sistem baru | Operasional | 3 | 3 | **9** | Desain UI intuitif, pelatihan pengguna, user guide, UAT iteratif | PM | 🟡 Open |

---

## 3. Ringkasan Risiko per Tingkat

| Tingkat | Jumlah Risiko | ID Risiko |
|---------|:-------------:|-----------|
| 🔴 Kritis (16–25) | 1 | R3 |
| 🟠 Tinggi (10–15) | 2 | R5, R10 |
| 🟡 Sedang (5–9) | 7 | R1, R2, R4, R6, R7, R8, R12 |
| 🟢 Rendah (1–4) | 2 | R9, R11 |

---

## 4. Top 3 Risiko & Rencana Respons Detail

### R3 — Scope Creep (Skor: 16) 🔴

| Aspek | Detail |
|-------|--------|
| **Trigger** | Sponsor meminta fitur baru setelah SRS disetujui |
| **Dampak** | Keterlambatan ≥ 7 hari, penambahan manday signifikan |
| **Mitigasi** | Freeze scope setelah sign-off SRS; change request harus disetujui PM + Dosen |
| **Contingency** | Prioritaskan fitur core, tunda fitur tambahan ke fase 2 |

### R5 — Bug Kritis Transaksi (Skor: 10) 🟠

| Aspek | Detail |
|-------|--------|
| **Trigger** | Race condition atau error saat transaksi concurrent |
| **Dampak** | Data stok dan keuangan tidak akurat |
| **Mitigasi** | Prisma `$transaction()`, database-level constraints, testing menyeluruh |
| **Contingency** | Rollback mechanism, error logging, manual correction procedure |

### R10 — Keamanan Data (Skor: 10) 🟠

| Aspek | Detail |
|-------|--------|
| **Trigger** | Serangan injeksi SQL, XSS, atau akses tidak sah |
| **Dampak** | Kebocoran data pelanggan, kerusakan database |
| **Mitigasi** | Prisma ORM (parameterized), input validation (Joi/Zod), bcrypt, JWT, CORS, helmet.js |
| **Contingency** | Incident response plan, database backup harian |

---

## 5. Rencana Pemantauan Risiko

| Aktivitas | Frekuensi | PIC |
|-----------|-----------|-----|
| Review risk register | Setiap sprint review (2 minggu) | PM |
| Update status risiko | Saat ada kejadian baru | Semua anggota |
| Eskalasi risiko kritis | Segera setelah teridentifikasi | PM → Dosen |

---

*Dokumen ini diperbarui secara berkala. Risiko yang telah dimitigasi akan diubah statusnya menjadi 🟢 Closed.*
