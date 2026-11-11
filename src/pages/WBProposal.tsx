import { useState } from 'react'
import { Icon } from '../components/Icon'
import type { IconName } from '../components/Icon'
import { PropertyCard } from '../components/PropertyCard'
import { WorkCard } from '../components/WorkCard'
import { contact, properties } from '../data/properties'
import { works } from '../data/works'
import type { PropertyCategory } from '../data/properties'
import residenceImage from '../assets/wb-banner.png'
import facadeImage from '../assets/ideias/ideia2/image.png'

const instagram = contact.instagram
const whatsapp = `${contact.whatsapp}?text=${encodeURIComponent('Olá! Gostaria de conversar sobre um projeto.')}`

const worksWithPhotos = works.filter((work) => work.images.length > 0)
const fixedServices: { id: string; title: string; icon: IconName; summary: string }[] = [
  {
    id: 'projeto-arquitetonico',
    title: 'Projeto arquitetônico',
    icon: 'house',
    summary: 'Soluções personalizadas e funcionais para transformar ideias em espaços.',
  },
  ...works.filter((work) => work.images.length === 0),
]

export function WBProposal() {
  const [filter, setFilter] = useState<'all' | PropertyCategory>('all')
  const filteredProperties = properties.filter((property) => filter === 'all' || property.category === filter)

  return (
      <main id="conteudo" tabIndex={-1}>
        <section className="wb-hero" aria-labelledby="wb-hero-title">
          <img className="wb-hero-image" src={residenceImage} alt="Ilustração arquitetônica de residência contemporânea" fetchPriority="high" />
          <div className="wb-hero-overlay" />
          <div className="wb-container wb-hero-content">
            <div className="wb-hero-copy">
              <span className="wb-kicker"><span />WB CONSTRUTORA · ENGENHARIA E CONSTRUÇÃO</span>
              <h1 id="wb-hero-title">Projetamos espaços.<br /><span>Construímos histórias.</span></h1>
              <p>Planejamento técnico, atenção aos detalhes e confiança em cada etapa. Do primeiro traço à execução da sua obra.</p>
              <div className="wb-hero-actions">
                <a className="wb-button wb-button-light" href={whatsapp} target="_blank" rel="noreferrer">
                  Converse sobre seu projeto <Icon name="arrow" />
                </a>
                <a className="wb-hero-projects" href="#/wb/trabalhos">Conheça nossos trabalhos <Icon name="arrow" /></a>
              </div>
            </div>
            <div className="wb-hero-bottom">
              <a href="#/wb/atuacao"><span className="wb-scroll-mark" />Explore as possibilidades</a>
              <span>PROJETOS · OBRAS · IMÓVEIS</span>
            </div>
          </div>
          <span className="wb-hero-credit">Imagem ilustrativa</span>
        </section>

        <div className="wb-expertise" aria-label="Áreas de atuação">
          <div className="wb-container">
            <span>PROJETAR.</span><span>PLANEJAR.</span><span>CONSTRUIR.</span>
            <a href="#/wb/servicos">Conheça nossas soluções <Icon name="arrow" /></a>
          </div>
        </div>

        <section id="wb-atuacao" className="wb-section wb-work" aria-labelledby="wb-work-title">
          <div className="wb-container wb-work-grid">
            <div className="wb-work-visual">
              <img src={facadeImage} alt="Projeto autoral da WB: fachada residencial com revestimento texturizado e iluminação noturna" loading="lazy" />
              <span>PROJETO AUTORAL WB · VISUALIZAÇÃO 3D</span>
            </div>
            <div className="wb-work-copy">
              <span className="wb-kicker">01 / PROJETOS E EXECUÇÃO</span>
              <h2 id="wb-work-title">O próximo espaço<br />pode começar<br /><span>com a sua ideia.</span></h2>
              <p>A WB Construtora atua com projetos e execução de obras residenciais e comerciais, públicas e privadas.</p>
              <div className="wb-work-types">
                <div>
                  <span>01</span>
                  <h3>Residencial</h3>
                  <p>Espaços pensados para viver.</p>
                </div>
                <div>
                  <span>02</span>
                  <h3>Comercial</h3>
                  <p>Ambientes para o seu negócio.</p>
                </div>
                <div>
                  <span>03</span>
                  <h3>Obras públicas e privadas</h3>
                  <p>Planejamento e execução de obras.</p>
                </div>
              </div>
              <a className="wb-inline-link" href={instagram} target="_blank" rel="noreferrer">
                Veja os trabalhos no Instagram <Icon name="arrow" />
              </a>
            </div>
          </div>
        </section>

        <section id="wb-imoveis" className="wb-section wb-properties" aria-labelledby="wb-properties-title">
          <div className="wb-container">
            <div className="wb-section-heading">
              <div>
                <span className="wb-kicker">02 / IMÓVEIS</span>
                <h2 id="wb-properties-title">Um novo lugar.<br /><span>Novas possibilidades.</span></h2>
              </div>
              <p>Explore os imóveis do catálogo e veja fotos, características e detalhes de cada espaço.</p>
            </div>
            <div className="wb-catalog-bar">
              <div className="wb-catalog-total" role="status">
                <strong>{filteredProperties.length.toString().padStart(2, '0')}</strong>
                <span>imóveis para<br />você conhecer</span>
              </div>
              <label className="wb-property-filter" htmlFor="wb-property-type">
                <span>O que você procura?</span>
                <span className="wb-select-wrap">
                  <select id="wb-property-type" value={filter} onChange={(event) => {
                    const selectedType = event.target.value
                    if (selectedType === 'all' || selectedType === 'house' || selectedType === 'land') {
                      setFilter(selectedType)
                    }
                  }}>
                    <option value="all">Todos os imóveis</option>
                    <option value="house">Residências</option>
                    <option value="land">Terrenos</option>
                  </select>
                  <Icon name="chevron" />
                </span>
              </label>
            </div>
            <div className="wb-property-grid">
              {filteredProperties.map((property) => <PropertyCard key={property.id} property={property} />)}
            </div>
            <p className="wb-catalog-note">Catálogo demonstrativo com imagens geradas por IA. Valores, endereços e características são fictícios e não representam ofertas confirmadas da WB.</p>
          </div>
        </section>

        <section id="wb-trabalhos" className="wb-section wb-portfolio" aria-labelledby="wb-portfolio-title">
          <div className="wb-container">
            <div className="wb-section-heading">
              <div>
                <span className="wb-kicker">03 / SOLUÇÕES PARA SUA OBRA</span>
                <h2 id="wb-portfolio-title">Serviços da WB Construtora.<br /><span>Do projeto ao acompanhamento.</span></h2>
              </div>
              <a className="wb-inline-link" href={instagram} target="_blank" rel="noreferrer">Acompanhe a WB no Instagram <Icon name="arrow" /></a>
            </div>
            <p className="wb-catalog-note">Conheça cada serviço, explore o projeto autoral e veja os registros de fiscalização de obras.</p>
            <div className="wb-portfolio-grid">
              {worksWithPhotos.map((work) => <WorkCard key={work.id} work={work} />)}
            </div>
            <section id="wb-servicos" className="wb-fixed-services" aria-labelledby="wb-fixed-services-title">
              <div className="wb-fixed-services-heading">
                <span className="wb-kicker">NOSSOS SERVIÇOS</span>
                <h3 id="wb-fixed-services-title">Soluções para cada etapa da sua obra.</h3>
              </div>
              <ul className="wb-fixed-services-list">
                {fixedServices.map((service) => (
                  <li key={service.id}>
                    <Icon name={service.icon} />
                    <div>
                      <h4>{service.title}</h4>
                      <p>{service.summary}</p>
                      {service.id === 'regularizacao-de-imoveis' && (
                        <a className="wb-inline-link" href={whatsapp} target="_blank" rel="noreferrer">
                          Fale sobre regularização <Icon name="arrow" />
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </section>

        <section id="wb-empresa" className="wb-section wb-company" aria-labelledby="wb-company-title">
          <div className="wb-container wb-company-grid">
            <div>
              <span className="wb-kicker">04 / A CONSTRUTORA</span>
              <h2 id="wb-company-title">Engenharia presente.<br /><span>Do projeto à obra.</span></h2>
              <p>Projetar e construir exige olhar para o todo, sem perder de vista os detalhes. É com essa atenção que apresentamos as soluções da WB Construtora.</p>
              <div className="wb-engineer">
                <span className="wb-engineer-mark">WB</span>
                <div><strong>Wilson Bernardo Neto</strong><span>Engenheiro civil</span></div>
              </div>
            </div>
            <div className="wb-principles">
              <div>
                <Icon name="shield" />
                <h3>Segurança</h3>
                <p>Planejamento técnico como base de cada projeto.</p>
              </div>
              <div>
                <Icon name="compass" />
                <h3>Qualidade</h3>
                <p>Atenção às soluções e aos detalhes da construção.</p>
              </div>
              <div>
                <Icon name="check" />
                <h3>Resultados</h3>
                <p>Projetos com foco em espaços funcionais.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="wb-contato" className="wb-contact" aria-labelledby="wb-contact-title">
          <div className="wb-container wb-contact-grid">
            <div>
              <span className="wb-kicker">SEU PROJETO COMEÇA COM UMA CONVERSA</span>
              <h2 id="wb-contact-title">Vamos tirar sua ideia<br /><span>do papel?</span></h2>
              <p>Conte o que você está planejando e converse com a WB sobre os próximos passos.</p>
            </div>
            <div className="wb-contact-actions">
              <a className="wb-button wb-button-light" href={whatsapp} target="_blank" rel="noreferrer">
                <Icon name="whatsapp" />Solicitar orçamento<Icon name="arrow" />
              </a>
              <a className="wb-phone" href="tel:+5562985824049">+55 (62) 98582-4049</a>
              <span>Atendimento pelo WhatsApp</span>
            </div>
          </div>
        </section>
      </main>
  )
}
