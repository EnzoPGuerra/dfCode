import React from 'react'
import { StyledHeader} from "./styles/Header.styled"

function Header() {
  return (
    <StyledHeader>
      <div className='ganbiarra'></div>
      <div className='logo'></div>
      <ul className='navbar'>
        <li>Inicio</li>
        <li>Produtos</li>
        <li>Sobre</li>
        <li>Contato</li>
      </ul>
    </StyledHeader>

  )
}

export default Header