import { Icon } from './Icon'
import { formatPrice } from '../data/properties'
import type { Property } from '../data/properties'

export function PropertyCard({ property }: { property: Property }) {
  const cover = property.images[0]
  const isHouse = property.category === 'house'

  return (
    <article className="wb-property-card">
      <a href={`#/imovel/${property.id}`} aria-label={`Ver detalhes de ${property.title}`}>
        <div className="wb-property-image">
          <img className={cover.collage ? 'wb-collage-image' : ''} src={cover.src} alt={cover.alt} loading="lazy" />
          <span className="wb-property-type">{isHouse ? 'Residencial' : 'Terreno'}</span>
          <span className="wb-property-photos"><Icon name="photos" />{property.images.length}</span>
        </div>
        <div className="wb-property-info">
          <div className="wb-property-labels">
            <span>{property.purpose === 'sale' ? 'Disponível para venda' : 'Locação'}</span>
            <span>{property.reference}</span>
          </div>
          <h3>{property.title}</h3>
          <p className="wb-property-address"><Icon name="pin" /><span>{property.neighborhood} · {property.city}</span></p>
          <div className="wb-property-facts">
            <span><Icon name="area" />{property.area.toLocaleString('pt-BR')} m²</span>
            {isHouse ? (
              <>
                <span><Icon name="bed" />{property.bedrooms} quartos</span>
                <span><Icon name="car" />{property.parking} {property.parking === 1 ? 'vaga' : 'vagas'}</span>
              </>
            ) : (
              <span><Icon name="area" />{property.frontage} m de frente</span>
            )}
          </div>
          <div className="wb-property-footer">
            <div>
              <span>{property.purpose === 'rent' ? 'Aluguel mensal' : 'Valor do imóvel'}</span>
              <strong>{formatPrice(property.price)}{property.purpose === 'rent' && <small>/mês</small>}</strong>
            </div>
            <span className="wb-property-open"><Icon name="arrow" /><span className="wb-property-open-label">Ver detalhes</span></span>
          </div>
        </div>
      </a>
    </article>
  )
}
