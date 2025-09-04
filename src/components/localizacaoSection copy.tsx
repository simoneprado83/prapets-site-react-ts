import React from 'react';

const Localizacao: React.FC = () => {
  return (
    <section>
      <section className="hero-heading-right">
        <div className="w-layout-blockcontainer image-wrapper-title w-container">
          <img 
            className="image-5" 
            src="https://cdn.prod.website-files.com/687549ad611a6d4efd3b690a/68781aa48c5d930779c98278_cao-sorrindo.png" 
            width="132" 
            height="Auto" 
            alt="Cachorro sorrindo" 
            sizes="132px" 
            id="sobre" 
            loading="lazy" 
            srcSet="https://cdn.prod.website-files.com/687549ad611a6d4efd3b690a/68781aa48c5d930779c98278_cao-sorrindo-p-500.png 500w, https://cdn.prod.website-files.com/687549ad611a6d4efd3b690a/68781aa48c5d930779c98278_cao-sorrindo-p-800.png 800w, https://cdn.prod.website-files.com/687549ad611a6d4efd3b690a/68781aa48c5d930779c98278_cao-sorrindo.png 1028w" 
          />
        </div>
        <h2 className="h2-final">onde estamos?</h2>
        <div className="container-2">
          <div className="hero-wrapper">
            <div className="hero-split">
              <a href="https://maps.google.com/?q=Rodovia+Bunjiro+Nakao,+45439+-+Jardim+Margarida,+Vargem+Grande+Paulista+-+SP,+06730-000" className="w-inline-block" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://cdn.prod.website-files.com/687549ad611a6d4efd3b690a/687aa83ae4bcbf04629eb9ee_google-maps.png" 
                  loading="lazy" 
                  sizes="(max-width: 560px) 100vw, 560px" 
                  srcSet="https://cdn.prod.website-files.com/687549ad611a6d4efd3b690a/687aa83ae4bcbf04629eb9ee_google-maps-p-500.png 500w, https://cdn.prod.website-files.com/687549ad611a6d4efd3b690a/687aa83ae4bcbf04629eb9ee_google-maps.png 560w" 
                  alt="Ícone do Google Maps" 
                  className="shadow-two" 
                />
              </a>
            </div>
            <div className="hero-split">
              <h1 className="heading-2">Local<br/></h1>
              <p className="margin-bottom-24px">Rodovia Bunjiro Nakao, 45439 - Jardim Margarida, Vargem Grande Paulista - SP, 06730-000</p>
              <a href="https://wa.me/5511968565284" className="button-pink w-button" target="_blank" rel="noopener noreferrer">
                saiba mais
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Localizacao;