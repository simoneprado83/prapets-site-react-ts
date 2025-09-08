import React from 'react';

const AboutUsSection: React.FC = () => {
  return (
    <section>
      <section className="section-3">
        <div className="w-layout-blockcontainer image-wrapper-title w-container">
          <img
            className="image-5"
            src="./src/assets/images/687a91250eb014eadd1add46_Cachorro-logo.png"
            width="132"
            height="auto"
            alt="Logo de um cachorro"
            sizes="132px"
            id="sobre"
            loading="lazy"
            srcSet="./src/assets/images/687a91250eb014eadd1add46_Cachorro-logo-p-500.png 500w, ./src/assets/images/687a91250eb014eadd1add46_Cachorro-logo.png 577w"
          />
        </div>
        <h2 className="h2-final">Sobre nós</h2>
        <div className="container-2">
          <div className="hero-wrapper">
            <div className="hero-split">
              <img
                src="https://cdn.prod.website-files.com/687549ad611a6d4efd3b690a/687552dee60e599ca30941ba_Union.jpg"
                loading="lazy"
                sizes="(max-width: 542px) 100vw, 542px"
                srcSet="https://cdn.prod.website-files.com/687549ad611a6d4efd3b690a/687552dee60e599ca30941ba_Union-p-500.jpg 500w, https://cdn.prod.website-files.com/687549ad611a6d4efd3b690a/687552dee60e599ca30941ba_Union.jpg 542w"
                alt="Imagem de cães"
                className="shadow-two"
              />
            </div>
            <div className="hero-split">
              <h1 className="heading-2">Aqui<br /></h1>
              <p className="margin-bottom-24px">
                Na PraPet's, acreditamos que seus pets merecem o melhor! Somos mais do que um centro de tosa e uma boutique; somos um espaço dedicado ao bem-estar, à beleza e à felicidade dos seus companheiros de quatro patas. Em nossa boutique, você encontrará uma seleção especial de acessórios, brinquedos e produtos que combinam estilo e funcionalidade, pensados para enriquecer o dia a dia do seu amigo.Venha nos conhecer e descubra por que a PraPet's é o lugar perfeito para cuidar do seu pet com amor e profissionalismo. Seu melhor amigo merece esse carinho!
              </p>
              <a href="https://wa.me/5511968565284" className="button-pink w-button">saiba mais</a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutUsSection;