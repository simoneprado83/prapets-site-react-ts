import React from 'react';

const ContactsFooter: React.FC = () => {
  return (
    <section className="section-2">
      <section className="footer-light">
        <div className="w-layout-blockcontainer image-wrapper-title w-container">
          <img
            src="./src/assets/images/68781aa1419a1918b30a4aa0_cao-dando-tchau.png"
            loading="lazy"
            width="132"
            height="Auto"
            alt="Dog waving goodbye"
            srcSet=" ./src/assets/images/68781aa1419a1918b30a4aa0_cao-dando-tchau-p-800.png 800w, ./src/assets/images/68781aa1419a1918b30a4aa0_cao-dando-tchau.png 1028w"
            sizes="132px"
            className="image-5"
          />
        </div>
        <h2 className="h2-final">Contatos</h2>
        <div className="container">
          <div className="footer-wrapper-two">
            <a href="#" className="footer-brand w-inline-block">
              <img
                src="./src/assets/images/687699f2e2dddd8e573ad822_logo2.png"
                loading="lazy"
                width="390.5"
                sizes="(max-width: 479px) 100vw, 390.5px"
                alt="PraPet´s logo"
                srcSet="./src/assets/images/687699f2e2dddd8e573ad822_logo2.png 500w, ./src/assets/images/687699f2e2dddd8e573ad822_logo2.png 781w"
              />
            </a>
            <div className="footer-block-two">
              <div className="footer-title">Sobre</div>
              <a href="#" className="footer-link-two">
                Quem somos
              </a>
              <a href="#" className="footer-link-two">
                Preços
              </a>
              <a href="https://wa.me/5511968565284" className="footer-link-two">
                Políticas
              </a>
            </div>
            <div className="footer-block-two">
              <div className="footer-title">Links</div>
              <a href="#" className="footer-link-two">
                Produtos
              </a>
              <a href="#" className="footer-link-two">
                Serviços
              </a>
            </div>
            <div className="footer-form w-form">
              <form
                id="wf-form-Footer-Form"
                name="wf-form-Footer-Form"
                data-name="Footer Form"
                method="get"
                className="footer-form-container"
                aria-label="Footer Form"
              >
                <div className="footer-title">Escreva para nós</div>
                <div className="footer-form-block">
                  <input
                    className="footer-form-field w-input"
                    maxLength={256}
                    name="Footer-Email"
                    data-name="Footer Email"
                    aria-label="Get product updates"
                    placeholder="Mande Mensagem"
                    type="email"
                    id="Footer-Email"
                    required
                  />
                  <input
                    type="submit"
                    data-wait="Um momento por favor..."
                    className="footer-form-submit w-button"
                    value=""
                  />
                </div>
              </form>
              <div
                className="w-form-done"
                tabIndex={-1}
                role="region"
                aria-label="Footer Form success"
              >
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div
                className="w-form-fail"
                tabIndex={-1}
                role="region"
                aria-label="Footer Form failure"
              >
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
          <div className="footer-divider-two"></div>
          <div className="footer-bottom">
            <div className="footer-copyright">
              © 2025 PraPet´s. Todos os direitos reservados.
            </div>
            <div className="footer-social-block-two">
              <a href="#" className="footer-social-link w-inline-block">
                <img
                  src="https://cdn.prod.website-files.com/62434fa732124a0fb112aab4/62434fa732124ac76f12aaec_product%20icon-2.svg"
                  loading="lazy"
                  alt="Social media icon"
                />
              </a>
              <a href="#" className="footer-social-link w-inline-block">
                <img
                  src="https://cdn.prod.website-files.com/62434fa732124a0fb112aab4/62434fa732124a4a9512aae0_product%20icon-1.svg"
                  loading="lazy"
                  alt="Social media icon"
                />
              </a>
              <a href="#" className="footer-social-link w-inline-block">
                <img
                  src="https://cdn.prod.website-files.com/62434fa732124a0fb112aab4/62434fa732124a853712aad7_product%20icon.svg"
                  loading="lazy"
                  alt="Social media icon"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ContactsFooter;