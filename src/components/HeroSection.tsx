export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="nav-wrapper">
        <img
          src="https://cdn.prod.website-files.com/687549ad611a6d4efd3b690a/687699f2e2dddd8e573ad822_logo2.png"
          loading="lazy"
          width="122"
          sizes="122px"
          alt="Logo"
          srcSet="https://cdn.prod.website-files.com/687549ad611a6d4efd3b690a/687699f2e2dddd8e573ad822_logo2-p-500.png 500w, https://cdn.prod.website-files.com/687549ad611a6d4efd3b690a/687699f2e2dddd8e573ad822_logo2.png 781w"
          className="logo"
        />
        <div className="nav-button-wrapper">
          <a href="#sobre" className="nav-link">Sobre</a>
          <a href="https://pet-shop-site.webflow.io/" className="nav-link">Início</a>
          <a href="https://wa.me/5511968565284" className="nav-link">Contato</a>
          <a href="#price-item" className="nav-link">Produtos</a>
        </div>
      </div>
      <div className="hero-content">
        <h1 className="heading">
          PRAPET'S<br />
          BANHO &amp; TOSA<br />
          <span><code className="code">BOUTIQUE</code></span>
        </h1>
      </div>
      <div className="card">
  <img
    src="https://cdn.prod.website-files.com/687549ad611a6d4efd3b690a/68755ac3e5e2f5b3e56a93f4_produtos.png"
    loading="lazy"
    width="146"
    alt=""
    className="image-3"
  />
  <div className="w-layout-hflex card-info-wrapper">
    <div className="text-block"> R$ 60 • R$ 89</div>
    <a href="https://wa.me/5511968565284" className="arrow-icon-button w-inline-block"></a>
  </div>
</div>
    </section>
  );
}