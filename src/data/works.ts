import type { PropertyImage } from './properties'
import type { IconName } from '../components/Icon'
import ideaPool from '../assets/ideias/image.png'
import ideaPoolNight from '../assets/ideias/image copy.png'
import ideaKitchen from '../assets/ideias/image copy 2.png'
import ideaIntegration from '../assets/ideias/image copy 3.png'
import ideaOutdoorNight from '../assets/ideias/image copy 4.png'
import ideaFacadeNight from '../assets/ideias/ideia2/image.png'
import ideaFacade from '../assets/ideias/ideia2/image copy.png'
import ideaEntrance from '../assets/ideias/ideia2/image copy 2.png'
import inspectionSite from '../assets/fiscalizacao/image.png'
import inspectionVisit from '../assets/fiscalizacao/image copy.png'
import inspectionFoundation from '../assets/fiscalizacao/image copy 2.png'
import inspectionFollowUp from '../assets/fiscalizacao/image copy 3.png'

export interface Work {
  id: string
  title: string
  category: string
  summary: string
  description: string
  scope: string[]
  images: PropertyImage[]
  kind: 'project' | 'service'
  icon: IconName
  source?: { label: string; url: string }
}

export const works: Work[] = [
  {
    id: 'ideia-residencia-com-piscina',
    title: 'Residência contemporânea com piscina',
    category: 'Projeto arquitetônico',
    summary: 'Projeto autoral com piscina, cozinha integrada e fachada contemporânea. Explore os ambientes em 3D.',
    description: 'Uma ideia para transformar o jeito de viver em casa. Este projeto autoral da Construtora reúne área externa com piscina, cozinha com bancada e integração por portas de vidro. Na fachada, volumes em tons neutros, revestimento texturizado e iluminação destacam a proposta contemporânea. A galeria apresenta as visualizações em 3D compartilhadas pela construtora.',
    scope: ['Área externa com piscina', 'Cozinha com bancada', 'Integração entre os ambientes', 'Fachada com revestimento texturizado', 'Iluminação externa', 'Visualizações diurnas e noturnas'],
    images: [
      { src: ideaPool, alt: 'Projeto 3D: residência com piscina e área externa durante o dia' },
      { src: ideaPoolNight, alt: 'Projeto 3D: iluminação noturna da área da piscina' },
      { src: ideaKitchen, alt: 'Projeto 3D: cozinha com bancada e mesa de jantar' },
      { src: ideaIntegration, alt: 'Projeto 3D: portas de vidro integrando a cozinha à área externa' },
      { src: ideaOutdoorNight, alt: 'Projeto 3D: vista noturna da casa e da área de lazer' },
      { src: ideaFacade, alt: 'Projeto 3D: fachada com revestimento texturizado e jardim' },
      { src: ideaFacadeNight, alt: 'Projeto 3D: iluminação da fachada durante a noite' },
      { src: ideaEntrance, alt: 'Projeto 3D: vista frontal do portão de entrada' },
    ],
    kind: 'project',
    icon: 'house',
    source: { label: 'Instagram', url: 'https://www.instagram.com/wbconstrutora/' },
  },
  {
    id: 'fiscalizacao-de-obras',
    title: 'Fiscalização de obras',
    category: 'Acompanhamento técnico',
    kind: 'service',
    icon: 'shield',
    summary: 'Presença técnica na obra para acompanhar os serviços e conferir as etapas da construção.',
    description: 'A fiscalização acompanha o andamento da obra e verifica os serviços em execução. As imagens mostram visitas técnicas e diferentes etapas de construção, com acompanhamento no local.',
    scope: ['Visitas técnicas à obra', 'Verificação dos serviços em execução', 'Acompanhamento das etapas construtivas', 'Registro do andamento da obra'],
    images: [
      { src: inspectionVisit, alt: 'Registro de fiscalização durante visita a uma obra' },
      { src: inspectionSite, alt: 'Obra em fase de alvenaria' },
      { src: inspectionFoundation, alt: 'Acompanhamento de obra na fase de fundação e início da alvenaria' },
      { src: inspectionFollowUp, alt: 'Visita de acompanhamento técnico durante a execução de uma obra' },
    ],
  },
  {
    id: 'projeto-estrutural',
    title: 'Projeto estrutural',
    category: 'Engenharia de projetos',
    kind: 'service',
    icon: 'structure',
    summary: 'Planejamento da estrutura com atenção à segurança e às necessidades de cada construção.',
    description: 'O projeto estrutural define as soluções da estrutura que sustenta a construção. A proposta considera a arquitetura e as necessidades da obra, com foco na segurança e na eficiência.',
    scope: ['Planejamento da estrutura', 'Integração com o projeto arquitetônico', 'Detalhamento para execução'],
    images: [],
  },
  {
    id: 'projeto-eletrico',
    title: 'Projeto elétrico',
    category: 'Instalações',
    kind: 'service',
    icon: 'bolt',
    summary: 'Instalações planejadas para atender à rotina dos ambientes com segurança e funcionalidade.',
    description: 'O projeto elétrico organiza as instalações de acordo com o uso dos ambientes. Iluminação, tomadas e circuitos são considerados no planejamento para orientar a execução.',
    scope: ['Planejamento de iluminação e tomadas', 'Organização dos circuitos', 'Detalhamento das instalações'],
    images: [],
  },
  {
    id: 'projeto-hidrossanitario',
    title: 'Projeto hidrossanitário',
    category: 'Instalações',
    kind: 'service',
    icon: 'drop',
    summary: 'Soluções para abastecimento de água e escoamento integradas ao projeto da construção.',
    description: 'O projeto hidrossanitário planeja as instalações de água e esgoto, considerando a distribuição dos ambientes e os pontos de utilização. Os detalhes orientam a execução das instalações.',
    scope: ['Abastecimento de água', 'Escoamento e instalações sanitárias', 'Integração com os ambientes'],
    images: [],
  },
  {
    id: 'regularizacao-de-imoveis',
    title: 'Regularização de imóveis',
    category: 'Documentação imobiliária',
    kind: 'service',
    icon: 'document',
    summary: 'Desmembramento, remembramento e averbação para cuidar da documentação do seu imóvel.',
    description: 'A Construtora oferece serviços de regularização documental, incluindo desmembramento, remembramento e averbação. Entre em contato para conversar sobre a situação do imóvel e o serviço necessário.',
    scope: ['Desmembramento', 'Remembramento', 'Averbação'],
    images: [],
  },
  {
    id: 'execucao-de-obras',
    title: 'Execução de obras',
    category: 'Construção',
    kind: 'service',
    icon: 'house',
    summary: 'Construção de espaços residenciais e comerciais, em obras públicas e privadas.',
    description: 'A execução transforma o projeto em construção. A Construtora atua em obras residenciais e comerciais, públicas e privadas, de acordo com as características e necessidades de cada empreendimento.',
    scope: ['Obras residenciais', 'Obras comerciais', 'Obras públicas e privadas'],
    images: [],
  },
  {
    id: 'vistoria-de-imovel',
    title: 'Vistoria de imóvel',
    category: 'Avaliação técnica',
    kind: 'service',
    icon: 'photos',
    summary: 'Análise das condições do imóvel, das instalações aos acabamentos.',
    description: 'A vistoria técnica verifica as condições do imóvel e registra os pontos observados. A análise pode abranger instalações, pisos, revestimentos, pintura, portas e janelas.',
    scope: ['Verificação das instalações', 'Análise de pisos e revestimentos', 'Conferência de portas e janelas', 'Registro das condições do imóvel'],
    images: [],
  },
]
