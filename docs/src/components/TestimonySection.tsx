import React from 'react';

const TestimonySection: React.FC = () => {
  return (
    <section>
      <section className="testimonial-column-light">
        <div className="container">
          <div className="w-container image-wrapper-title w-blockcontainer">
            <img
              src="./src/assets/images/68781aa12e65e6c572d4f246_cao-olhando%20para%20baixo.png"
              loading="lazy"
              width={130}
              sizes="130px"
              alt="Imagem de um cão olhando para baixo"
              srcSet="./src/assets/images/68781aa12e65e6c572d4f246_cao-olhando%20para%20baixo-p-500.png 500w, ./src/assets/images/68781aa12e65e6c572d4f246_cao-olhando%20para%20baixo-p-800.png 800w, ./src/assets/images/68781aa12e65e6c572d4f246_cao-olhando%20para%20baixo.png 1028w"
              className="image-5"
            />
          </div>
          <h2 className="centered-heading">Depoimentos</h2>
          <div className="testimonial-grid-two">
            <div id="w-node-f03169a2-ce5f-45fe-b5ee-e999968ebe25-fd3b6913" className="testimonial-card-two">
              <p className="testimonial-text-two">
                "Quero expressar minha sincera gratidão pelo excelente cuidado. Fiquei muito tranquila sabendo que ele estava em ótimas mãos. Muito obrigada!"
              </p>
              <div className="testimonial-info-three">
                <img
                  src="./src/assets/images/687552f7ae48ff72e17a1bec_89253.png"
                  loading="lazy"
                  alt="Foto da cliente Viviane e seu cão Tob"
                  className="testimonial-image"
                />
                <div>
                  <h3 className="testimonial-main-heading">
                    Viviane
                    <br />
                    &amp; Tob
                  </h3>
                  <div>Clientes Vip</div>
                </div>
              </div>
            </div>
            <div id="w-node-f03169a2-ce5f-45fe-b5ee-e999968ebe2f-fd3b6913" className="testimonial-card-two">
              <p className="testimonial-text-two">
                “É com grande alívio e alegria que venho agradecer o serviço impecável de cuidado ao meu pet. Recomendo de olhos fechados!”
              </p>
              <div className="testimonial-info-three">
                <img
                  src="./src/assets/images/68755ac1065fe5da4056e845_produtos_tosa.png"
                  loading="lazy"
                  width="auto"
                  alt="Foto do cliente Cleiton e sua cadela Minie"
                  className="testimonial-image"
                />
                <div>
                  <h3 className="testimonial-main-heading">
                    Cleiton
                    <br />
                    &amp; Minie
                  </h3>
                  <div>Clientes Vip</div>
                </div>
              </div>
            </div>
            <div id="w-node-f03169a2-ce5f-45fe-b5ee-e999968ebe39-fd3b6913" className="testimonial-card-two">
              <p className="testimonial-text-two">
                “Gostaria de agradecer imensamente o carinho e a atenção dedicados ao meu pet durante o período em que esteve sob os cuidados de vocês. Muito obrigada!”
              </p>
              <div className="testimonial-info-three">
                <img
                  src="https://cdn.prod.website-files.com/687549ad611a6d4efd3b690a/687552dee60e599ca30941ba_Union.jpg"
                  loading="lazy"
                  sizes="(max-width: 542px) 100vw, 542px"
                  srcSet="https://cdn.prod.website-files.com/687549ad611a6d4efd3b690a/687552dee60e599ca30941ba_Union-p-500.jpg 500w, https://cdn.prod.website-files.com/687549ad611a6d4efd3b690a/687552dee60e599ca30941ba_Union.jpg 542w"
                  alt="Foto da cliente Lili e seu cão Pity"
                  className="testimonial-image"
                />
                <div>
                  <h3 className="testimonial-main-heading">
                    Lili
                    <br />
                    &amp; Pity
                  </h3>
                  <div>Clientes Vip</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default TestimonySection;