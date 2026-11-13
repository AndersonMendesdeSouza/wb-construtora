import { Icon } from './Icon'
import type { Work } from '../data/works'

export function WorkCard({ work }: { work: Work }) {
  const cover = work.images[0]

  return (
    <article className="wb-work-card">
      <a href={`#/trabalho/${work.id}`} aria-label={`Ver detalhes de ${work.title}`}>
        {cover ? (
          <div className="wb-work-cover">
            <img src={cover.src} alt={cover.alt} loading="lazy" />
            <span>{work.kind === 'project' ? 'Projeto autoral' : 'Serviço da construtora'}</span>
            <span className="wb-work-photo-count"><Icon name="photos" />{work.images.length} imagens</span>
          </div>
        ) : (
          <div className="wb-service-cover"><Icon name={work.icon} /><span>CONSTRUTORA</span></div>
        )}
        <div className="wb-work-card-body">
          <span className="wb-kicker">{work.category}</span>
          <h3>{work.title}</h3>
          <p>{work.summary}</p>
          <div className="wb-work-card-action">
            {work.kind === 'project' ? 'Explorar projeto e fotos' : 'Conhecer serviço'} <Icon name="arrow" />
          </div>
        </div>
      </a>
    </article>
  )
}
