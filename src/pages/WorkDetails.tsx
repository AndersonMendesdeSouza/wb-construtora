import { Icon } from '../components/Icon'
import { PhotoGallery } from '../components/PhotoGallery'
import type { Work } from '../data/works'

export function WorkDetails({ work }: { work: Work }) {
  const isProject = work.kind === 'project'

  return (
    <main id="conteudo" tabIndex={-1} className="details-page container wb-work-details">
      <a className="text-link detail-back" href="#trabalhos">
        <Icon name="arrow" className="rotate" />Voltar aos serviços
      </a>
      <div className="detail-heading">
        <div>
          <span className="wb-kicker">{work.category}</span>
          <h1>{work.title}</h1>
          <p className="detail-location">Projetos e serviços · Construtora</p>
        </div>
        <span className="wb-demo-badge">{isProject ? 'Projeto ilustrativo · Visualizações 3D' : 'Serviço demonstrativo'}</span>
      </div>
      <div className="wb-work-detail-layout">
        <div className="detail-main">
          {work.images.length > 0 && <PhotoGallery images={work.images} title={work.title} />}
          {work.source && (
            <p className="image-credit">
              Imagens ilustrativas · Fonte:{' '}
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
        <aside className="price-panel" aria-label="Explorar serviços">
          <span className="eyebrow">Serviços de exemplo</span>
          <h2 className="wb-budget-title">Conheça as soluções<br />para cada etapa.</h2>
          <p className="wb-budget-copy">Explore uma apresentação ilustrativa de serviços de engenharia e construção.</p>
          <a className="button button-navy" href="#servicos">
            <Icon name="structure" />Ver todos os serviços<Icon name="arrow" />
          </a>
          <p className="contact-hint">Projeto demonstrativo para portfólio.</p>
          {isProject && <p className="demo-disclaimer">Visualização arquitetônica ilustrativa em 3D.</p>}
        </aside>
      </div>
    </main>
  )
}
