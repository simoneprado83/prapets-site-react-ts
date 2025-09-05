import React from 'react';

// Interface para definir a estrutura dos dados de cada item de preço
interface PriceItem {
  tagline: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  prices: {
    size: string;
    value: string;
  }[];
  link: string;
}

// Dados dos produtos e serviços
const priceData: PriceItem[] = [
  {
    tagline: 'Serviço',
    title: 'Banho',
    imageSrc: './src/assets/images/68755ac3e5e2f5b3e56a93f4_produtos.png',
    imageAlt: 'Imagem de um cachorro sendo lavado.',
    prices: [
      { size: 'Pet Grande', value: 'a partir de $89,00' },
      { size: 'Pet Médio', value: 'a partir de $69,00' },
      { size: 'Pet Pequeno', value: 'a partir de $60,00' },
    ],
    link: 'https://wa.me/5511968565284',
  },
  {
    tagline: 'Produtos',
    title: 'Produtos Especiais',
    imageSrc: './src/assets/images/68755abcabf2d064ed472b94_produtos_cuidados.png',
    imageAlt: 'Imagem de produtos de cuidado para pets.',
    prices: [
      { size: 'Pet Grande', value: 'a partir de $120,00' },
      { size: 'Pet Médio', value: 'a partir de $80,00' },
      { size: 'Pet Pequeno', value: 'a partir de $60,00' },
    ],
    link: 'https://wa.me/5511968565284',
  },
  {
    tagline: 'Serviço',
    title: 'Tosa com máquina',
    imageSrc: './src/assets/images//68755ac1065fe5da4056e845_produtos_tosa.png',
    imageAlt: 'Imagem de tosa com máquina.',
    prices: [
      { size: 'Pet Grande', value: 'a partir de $232,00' },
      { size: 'Pet Médio', value: 'a partir de $112,00' },
      { size: 'Pet Pequeno', value: 'a partir de $85,00' },
    ],
    link: 'https://wa.me/5511968565284',
  },
  {
    tagline: 'Serviço',
    title: 'Tosa com tesoura',
    imageSrc: './src/assets/images/68781feb74d44e8960cc5994_tosa-com-tesoura.png',
    imageAlt: 'Imagem de tosa com tesoura.',
    prices: [
      { size: 'Pet Grande', value: 'a partir de $116,00' },
      { size: 'Pet Médio', value: 'a partir de $98,00' },
      { size: 'Pet Pequeno', value: 'a partir de $89,00' },
    ],
    link: 'https://wa.me/5511968565284',
  },
  {
    tagline: 'Serviço',
    title: 'Tosa com Trimming',
    imageSrc: './src/assets/images/687821531222f606dd631a27_tosa-triming.png',
    imageAlt: 'Imagem de tosa com trimming.',
    prices: [
      { size: 'Pet Grande', value: 'a partir de $600,00' },
      { size: 'Pet Médio', value: 'a partir de $279,00' },
      { size: 'Pet Pequeno', value: 'a partir de $159,00' },
    ],
    link: 'https://wa.me/5511968565284',
  },
  {
    tagline: 'Serviço',
    title: 'Plano Básico',
    imageSrc: './src/assets/images/687825cafbeec3975cb43d80_planos-pacotes-basicos.png',
    imageAlt: 'Imagem de plano básico.',
    prices: [
      { size: 'Pet Grande', value: 'a partir de $687,00' },
      { size: 'Pet Médio', value: 'a partir de $334,80' },
      { size: 'Pet Pequeno', value: 'a partir de $176,40' },
    ],
    link: 'https://wa.me/5511968565284',
  },
  {
    tagline: 'Serviço',
    title: 'Plano Premium',
    imageSrc: './src/assets/images/687825ca900bab97939edbd2_planos-pacotes-PREMIUM.png',
    imageAlt: 'Imagem de plano premium.',
    prices: [
      { size: 'Pet Grande', value: 'a partir de $702,00' },
      { size: 'Pet Médio', value: 'a partir de $349,20' },
      { size: 'Pet Pequeno', value: 'a partir de $190,80' },
    ],
    link: 'https://wa.me/5511968565284',
  },
  {
    tagline: 'Serviço',
    title: 'Plano Prapet´s',
    imageSrc: './src/assets/images/687825d64f33f38c579f0d90_planos-pacotes-PRAPET%27S.png',
    imageAlt: 'Imagem de plano Prapet´s.',
    prices: [
      { size: 'Pet Grande', value: 'a partir de $712,00' },
      { size: 'Pet Médio', value: 'a partir de $360,00' },
      { size: 'Pet Pequeno', value: 'a partir de $201,60' },
    ],
    link: 'https://wa.me/5511968565284',
  },
];

// Componente para um único cartão de preço
const PricingCard: React.FC<PriceItem> = ({ tagline, title, imageSrc, imageAlt, prices, link }) => (
  <div className="pricing-card-two">
    <img src={imageSrc} loading="lazy" alt={imageAlt} className="plano-prapets-imagem shadow-two" />
    <div className="pricing-content">
      <div className="tagline">{tagline}</div>
      <div className="pricing-info">
        <h3>{title}</h3>
        <h3>{prices[prices.length - 1].value}</h3>
      </div>
      <div className="pricing-divider-two"></div>
      <div className="price-details">
        {prices.map((price, index) => (
          <div key={index} className="pricing-block">
            <p className="pricing-details-text">{price.value}</p>
            <p className="tagline">{price.size}</p>
          </div>
        ))}
      </div>
      <div className="price-details">
        <div className="w-layout-hflex card-info-wrapper">
          <div className="text-block">saiba mais</div>
          <a href={link} className="arrow-icon-button w-inline-block" target="_blank" rel="noopener noreferrer"></a>
        </div>
      </div>
    </div>
  </div>
);

// Componente principal da seção de preços
const PriceSection: React.FC = () => {
  return (
    <section className="section" id="price-item">
      <div className="container">
        <div className="w-layout-blockcontainer image-wrapper-title w-container">
          <img
            src="./src/assets/images/68781aa10627905763af9a1d_cao-cotovelo.png"
            loading="lazy"
            width="85"
            height="Auto"
            alt="Imagem de um cachorro com o cotovelo."
            srcSet="./src/assets/images/68781aa10627905763af9a1d_cao-cotovelo-p-500.png 500w, ./src/assets/images/68781aa10627905763af9a1d_cao-cotovelo.png 637w"
            sizes="85px"
            className="image-5"
          />
        </div>
        <h2 className="centered-heading">Produtos e serviços</h2>
        <div className="pricing-wrapper-two">
          {priceData.map((item, index) => (
            <PricingCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceSection;