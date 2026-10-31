# 👥 Resource & Responsibility Plan — Klinik Ban Langsa

> **Kelompok 18 — MPPL**  
> Dosen Pengampu: Ibu Cut Alna Fadila  
> Versi dokumen: 1.0 | Tanggal: 31 Oktober 2026

---

## 1. Struktur Tim Proyek

```
┌──────────────────────────────────┐
│        Dosen Pengampu            │
│    Ibu Cut Alna Fadila           │
└──────────────┬───────────────────┘
               │
┌──────────────▼───────────────────┐
│       Project Manager            │
│   Muhammad Fitra Fuadi           │
└──────────────┬───────────────────┘
               │
       ┌───────┴────────┐
       ▼                ▼
┌──────────────┐  ┌──────────────────────────────┐
│  Developer 1 │  │  Developer 2                 │
│  Ammra M. A. │  │  M. Rizal Syahrul Ramadhan   │
└──────────────┘  └──────────────────────────────┘
```

**Sponsor / Pemilik Usaha:** Furqan Nul Fatah (Owner Klinik Ban Langsa)

---

## 2. Role & Responsibility Matrix (RACI)

| ID | Aktivitas | Muhammad Fitra Fuadi (PM) | Ammra M. Akbharieq (Dev 1) | M. Rizal S. Ramadhan (Dev 2) | Sponsor |
|----|----------|:---:|:---:|:---:|:---:|
| A1 | Inisiasi & Perencanaan | **R/A** | C | C | I |
| A2 | Pengumpulan Kebutuhan | **R/A** | C | C | **C** |
| A3 | Pemodelan Sistem | A | **R** | **R** | I |
| A4 | Desain UI/UX | A | **R** | C | I |
| A5 | Setup Lingkungan Dev | C | **R** | **R/A** | — |
| A6 | Modul Autentikasi | A | **R** | C | — |
| A7 | Modul Master Data | A | C | **R** | — |
| A8 | Modul Transaksi & Nota | A | **R** | **R** | I |
| A9 | Modul Manajemen Stok | A | **R** | C | — |
| A10 | Modul Riwayat Servis | A | C | **R** | — |
| A11 | Dashboard & Laporan | A | **R** | **R** | I |
| A12 | Integrasi & Pengujian | **R/A** | **R** | **R** | C |
| A13 | Perbaikan Bug & Optimasi | A | **R** | **R** | — |
| A14 | Deployment & Dokumentasi | **R/A** | C | **R** | I |
| A15 | Serah Terima & Penutupan | **R/A** | C | C | **C** |

> **R** = Responsible (Pelaksana), **A** = Accountable (Penanggung jawab), **C** = Consulted, **I** = Informed

---

## 3. Alokasi Sumber Daya per Aktivitas

| ID | Aktivitas | Anggota yang Terlibat | Peralatan / Tools |
|----|----------|----------------------|-------------------|
| A1 | Inisiasi & Perencanaan | Fitra, Ammra, Rizal | Google Docs, Trello |
| A2 | Pengumpulan Kebutuhan | Fitra, Ammra, Rizal, Sponsor | Google Forms, WhatsApp, tatap muka |
| A3 | Pemodelan Sistem | Ammra, Rizal | draw.io, StarUML |
| A4 | Desain UI/UX | Ammra | Figma |
| A5 | Setup Lingkungan Dev | Ammra, Rizal | VS Code, Git, GitHub, Node.js, PostgreSQL |
| A6 | Modul Autentikasi | Ammra | VS Code, Postman |
| A7 | Modul Master Data | Rizal | VS Code, Postman, Prisma Studio |
| A8 | Modul Transaksi & Nota | Ammra, Rizal | VS Code, Postman |
| A9 | Modul Manajemen Stok | Ammra | VS Code, Postman |
| A10 | Modul Riwayat Servis | Rizal | VS Code, Postman |
| A11 | Dashboard & Laporan | Ammra, Rizal | VS Code, Chart.js / Recharts |
| A12 | Integrasi & Pengujian | Fitra, Ammra, Rizal | Jest, Postman, Chrome DevTools |
| A13 | Perbaikan Bug & Optimasi | Ammra, Rizal | VS Code, Lighthouse |
| A14 | Deployment & Dokumentasi | Fitra, Rizal | Vercel / Railway, Google Docs |
| A15 | Serah Terima & Penutupan | Fitra, Ammra, Rizal | Google Slides, Zoom/tatap muka |

---

## 4. Ketersediaan Tim

| Anggota | Peran | Ketersediaan (jam/minggu) | Catatan |
|---------|-------|:------------------------:|---------|
| Muhammad Fitra Fuadi | Project Manager | ~15 jam | Juga menangani koordinasi dengan dosen & sponsor |
| Ammra Musharra Akbharieq | Developer 1 (Frontend-heavy) | ~20 jam | Fokus pada frontend React & modul stok |
| M. Rizal Syahrul Ramadhan | Developer 2 (Backend-heavy) | ~20 jam | Fokus pada backend Express, Prisma, PostgreSQL |

---

## 5. Komunikasi Tim

| Jenis Komunikasi | Frekuensi | Media | Peserta |
|------------------|-----------|-------|---------|
| Daily Stand-up | Setiap hari kerja | WhatsApp Group | Semua anggota |
| Sprint Review | Setiap 2 minggu | Zoom / Tatap muka | Semua anggota + Dosen |
| Progress Report ke Sponsor | Bulanan / saat milestone | WhatsApp / Tatap muka | PM + Sponsor |
| Code Review | Per pull request | GitHub PR Review | Dev 1, Dev 2 |

---

*Dokumen ini akan diperbarui jika ada perubahan komposisi atau alokasi tim.*
