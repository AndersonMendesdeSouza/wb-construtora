import { useState } from 'react'
import { Brand } from './Brand'
import { Icon } from './Icon'
import { contact } from '../data/properties'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="wb-header">
      <div className="wb-container wb-header-inner">
        <Brand />
        <nav id="wb-navigation" className={menuOpen ? 'wb-nav wb-nav-open' : 'wb-nav'} aria-label="Navegação principal">
          <a href="#/wb/servicos" onClick={() => setMenuOpen(false)}>Serviços</a>
          <a href="#/wb/imoveis" onClick={() => setMenuOpen(false)}>Imóveis</a>
          <a href="#/wb/trabalhos" onClick={() => setMenuOpen(false)}>Trabalhos</a>
          <a href="#/wb/empresa" onClick={() => setMenuOpen(false)}>A construtora</a>
          <a className="wb-nav-contact" href="#/wb/contato" onClick={() => setMenuOpen(false)}>
            Solicitar orçamento <Icon name="arrow" />
          </a>
        </nav>
        <button
          className="wb-menu"
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="wb-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} />
        </button>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="wb-footer">
      <div className="wb-container">
        <div className="wb-footer-top">
          <Brand />
          <p>Planejamento técnico.<br />Confiança em cada etapa.</p>
          <a href={contact.instagram} target="_blank" rel="noreferrer">
            <Icon name="instagram" />@wbconstrutora<Icon name="arrow" />
          </a>
        </div>
        <div className="wb-footer-bottom">
          <span>© {new Date().getFullYear()} WB Construtora.</span>
          <span>Proposta demonstrativa · Imagens ilustrativas.</span>
        </div>
      </div>
    </footer>
  )
}
