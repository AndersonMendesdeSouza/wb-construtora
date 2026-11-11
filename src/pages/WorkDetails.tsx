import { Icon } from '../components/Icon'
import { PhotoGallery } from '../components/PhotoGallery'
import { contact } from '../data/properties'
import type { Work } from '../data/works'

export function WorkDetails({ work }: { work: Work }) {
  const message = `Olá! Gostaria de conversar com a WB sobre ${work.title.toLowerCase()}.`
  const whatsappUrl = `${contact.whatsapp}?text=${encodeURIComponent(message)}`
  const isProject = work.kind === 'project'

  return (
    <main id="conteudo" tabIndex={-1} className="details-page container wb-work-details">
      <a className="text-link detail-back" href="#/wb/trabalhos">
        <Icon name="arrow" className="rotate" />Voltar aos serviços
      </a>
      <div className="detail-heading">
        <div>
          <span className="wb-kicker">{work.category}</span>
          <h1>{work.title}</h1>
          <p className="detail-location">Projetos e serviços · WB Construtora</p>
        </div>
        <span className="wb-demo-badge">{isProject ? 'Projeto autoral · Visualizações 3D' : 'Serviço WB Construtora'}</span>
      </div>
      <div className="wb-work-detail-layout">
        <div className="detail-main">
          {work.images.length > 0 && <PhotoGallery images={work.images} title={work.title} />}
          {work.source && (
            <p className="image-credit">
              Projeto autoral da WB Construtora · Publicado por{' '}
              <a href={work.source.url} target="_blank" rel="noreferrer">{work.source.label}</a>
            </p>
          )}
          <section className="detail-description" aria-labelledby="work-description-title">
            <span className="eyebrow">{isProject ? 'Sobre o projeto' : 'Conheça o serviço'}</span>
            <h2 id="work-description-title">{isProject ? 'O projeto em detalhes.' : work.title}</h2>
            <p>{work.description}</p>
          </section>
          <section className="features-section" aria-labelledby="work-scope-title">
            <h3 id="work-scope-title">{isProject ? 'Destaques do projeto' : 'O que o serviço contempla'}</h3>
            <ul>
              {work.scope.map((item) => <li key={item}><Icon name="check" />{item}</li>)}
            </ul>
          </section>
        </div>
        <aside className="price-panel" aria-label="Orçamento do serviço">
          <span className="eyebrow">Tem um projeto em mente?</span>
          <h2 className="wb-budget-title">Vamos construir<br />o próximo passo.</h2>
          <p className="wb-budget-copy">Converse com a equipe sobre seu projeto e solicite um orçamento.</p>
          <a className="button button-navy" href={whatsappUrl} target="_blank" rel="noreferrer">
            <Icon name="whatsapp" />Solicitar orçamento<Icon name="arrow" />
          </a>
          <p className="contact-hint">WB Construtora · +55 (62) 98582-4049</p>
          {isProject && <p className="demo-disclaimer">Projeto arquitetônico apresentado em 3D. Converse com a WB sobre as possibilidades para a sua construção.</p>}
        </aside>
      </div>
    </main>
  )
}
