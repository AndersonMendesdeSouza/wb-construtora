import poolHouse from '../assets/imoveis-demo/casa-piscina.png'
import cityHouse from '../assets/imoveis-demo/casa-terrea.png'
import residentialLand from '../assets/imoveis-demo/lote.png'

export type PropertyCategory = 'house' | 'land'

export interface PropertyImage {
  src: string
  alt: string
  collage?: boolean
}

export interface Property {
  id: string
  reference: string
  title: string
  category: PropertyCategory
  purpose: 'sale' | 'rent'
  price: number
  neighborhood: string
  city: string
  area: number
  bedrooms?: number
  bathrooms?: number
  parking?: number
  frontage?: number
  description: string
  features: string[]
  images: PropertyImage[]
  imageSource?: { label: string; url: string }
}

export const contact = {
  whatsapp: 'https://wa.me/5562985824049',
  instagram: 'https://www.instagram.com/wbconstrutora/',
}

export const formatPrice = (price: number) => new Intl.NumberFormat('pt-BR', {
  style: 'currency', currency: 'BRL', maximumFractionDigits: 0,
}).format(price)

// Catálogo fictício para demonstração. Imagens geradas por IA.
export const properties: Property[] = [
  {
    id: 'casa-lago-das-brisas', reference: 'IMV-001', title: 'Casa Lago das Brisas', category: 'house', purpose: 'sale',
    price: 1250000, neighborhood: 'Lago das Brisas', city: 'Buriti Alegre, GO', area: 320, bedrooms: 3, bathrooms: 4, parking: 2,
    description: 'Um exemplo de casa contemporânea com área de lazer, piscina e jardim. A varanda integra os ambientes e oferece espaço para receber a família. Este anúncio é demonstrativo: imagem gerada por IA, valores, localização e características fictícios.',
    features: ['Piscina', 'Jardim', 'Varanda coberta', 'Área de lazer', 'Ambientes integrados', 'Garagem'],
    images: [{ src: poolHouse, alt: 'Ilustração gerada por IA de uma casa contemporânea com piscina e varanda' }],
  },
  {
    id: 'casa-no-centro', reference: 'IMV-002', title: 'Casa no Centro', category: 'house', purpose: 'sale',
    price: 420000, neighborhood: 'Centro', city: 'Buriti Alegre, GO', area: 180, bedrooms: 3, bathrooms: 2, parking: 2,
    description: 'Uma casa térrea de exemplo com fachada contemporânea, jardim e garagem coberta. Uma proposta para apresentar as possibilidades do catálogo residencial. Imagem gerada por IA; valores, localização e características são fictícios.',
    features: ['Casa térrea', 'Jardim', 'Garagem coberta', 'Ambientes bem distribuídos'],
    images: [{ src: cityHouse, alt: 'Ilustração gerada por IA de uma casa térrea com jardim e garagem coberta' }],
  },
  {
    id: 'lote-residencial-brisas', reference: 'IMV-003', title: 'Lote Residencial Brisas', category: 'land', purpose: 'sale',
    price: 185000, neighborhood: 'Lago das Brisas', city: 'Buriti Alegre, GO', area: 450, frontage: 15,
    description: 'Um exemplo de lote residencial para imaginar seu próximo projeto. A imagem foi gerada por IA e não corresponde a um terreno anunciado pela construtora. Localização, valor e medidas são fictícios.',
    features: ['Uso residencial', 'Área aberta', 'Espaço para jardim', 'Possibilidade de projeto personalizado'],
    images: [{ src: residentialLand, alt: 'Ilustração gerada por IA de um lote residencial gramado' }],
  },
]
