import { useEffect, useState } from 'react'
import { Header, Footer } from './components/Layout'
import { properties } from './data/properties'
import { works } from './data/works'
import { Home } from './pages/Home'
import { PropertyDetails } from './pages/PropertyDetails'
import { WorkDetails } from './pages/WorkDetails'
import './App.css'
import './pages/WBProposal.css'

function App() {
  const [hash, setHash] = useState(window.location.hash)
  const isPropertyDetails = hash.startsWith('#/imovel/')
  const isWorkDetails = hash.startsWith('#/trabalho/')
  const property = properties.find((item) => `#/imovel/${item.id}` === hash)
  const work = works.find((item) => `#/trabalho/${item.id}` === hash)

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    const title = property?.title ?? work?.title
    document.title = title
      ? `${title} | WB Construtora`
      : 'WB Construtora | Projetos, obras e imóveis'

    const frame = window.requestAnimationFrame(() => {
      let section = ''
      if (hash.startsWith('#/wb/')) {
        section = `wb-${hash.split('/')[2]}`
      } else if (hash && !hash.startsWith('#/')) {
        section = `wb-${hash.slice(1)}`
      }

      if (section) {
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' })
      }
    })
    return () => window.cancelAnimationFrame(frame)
  }, [hash, property, work])

  let page = <Home />
  if (isPropertyDetails && property) {
    page = <PropertyDetails key={property.id} property={property} />
  } else if (isWorkDetails && work) {
    page = <WorkDetails key={work.id} work={work} />
  } else if (isPropertyDetails || isWorkDetails) {
    page = (
      <main id="conteudo" tabIndex={-1} className="container not-found">
        <span className="eyebrow">Conteúdo não encontrado</span>
        <h1>Vamos conhecer outras possibilidades?</h1>
        <p>Este conteúdo não está disponível. Explore os imóveis e trabalhos da WB.</p>
        <a className="button button-navy" href={isPropertyDetails ? '#/wb/imoveis' : '#/wb/trabalhos'}>
          {isPropertyDetails ? 'Explorar imóveis' : 'Explorar trabalhos'}
        </a>
      </main>
    )
  }

  return (
    <div className="wb-site">
      <a className="wb-skip" href="#conteudo" onClick={(event) => {
        event.preventDefault()
        document.getElementById('conteudo')?.focus()
      }}>Pular para o conteúdo</a>
      <Header />
      {page}
      <Footer />
    </div>
  )
}

export default App
