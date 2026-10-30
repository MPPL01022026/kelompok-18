const logo = "/logo-klinik-ban.png";

export default function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#konten">Lewati ke konten</a>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#beranda" aria-label="Klinik Ban Langsa — Beranda">
            <img src={logo} width="1200" height="600" alt="Klinik Ban Langsa" />
          </a>
          <nav aria-label="Navigasi utama">
            <a href="#beranda">Beranda</a>
            <a href="#ban">Ban</a>
            <a href="#service">Service</a>
          </nav>
        </div>
      </header>

      <main id="konten">
        <section className="hero" id="beranda" aria-labelledby="hero-title">
          <div className="hero-rings" aria-hidden="true" />
          <div className="hero-content">
            <p className="eyebrow">LANGSA · SINCE 2020</p>
            <h1 id="hero-title" className="sr-only">Klinik Ban Langsa — Tires Shop &amp; Repair</h1>
            <div className="hero-logo">
              <img className="animated-logo" src="/klinik-ban-animasi.gif" width="960" height="530" alt="Logo Klinik Ban dengan ban dan api yang bergerak" fetchPriority="high" />
              <img className="still-logo" src={logo} width="1200" height="600" alt="Logo Klinik Ban" />
            </div>
            <a className="explore-link" href="#ban"><span>Jelajahi Klinik Ban</span><span aria-hidden="true">↓</span></a>
          </div>
          <div className="brand-stripe" aria-hidden="true" />
        </section>

        {/* Tambahkan katalog produk di dalam section Ban saat konten siap. */}
        <section className="content-section tire-section" id="ban" aria-labelledby="ban-title">
          <div className="section-inner">
            <div className="section-heading"><span className="section-number" aria-hidden="true">01 /</span><h2 id="ban-title">Ban<span>.</span></h2></div>
            <div className="empty-content" />
          </div>
        </section>

        {/* Tambahkan daftar layanan di dalam section Service saat konten siap. */}
        <section className="content-section service-section" id="service" aria-labelledby="service-title">
          <div className="section-inner">
            <div className="section-heading"><span className="section-number" aria-hidden="true">02 /</span><h2 id="service-title">Service<span>.</span></h2></div>
            <div className="empty-content" />
          </div>
        </section>
      </main>

      <footer className="site-footer"><span>Klinik Ban Langsa</span><span>© {new Date().getFullYear()}</span></footer>
    </div>
  );
}
