import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './headerAux.css'

const HeaderAux = () => {
  const [Clicked, setStateClicked] = useState(false)
  return (
    <nav className='navbarItems'>
      <h1 className='navbarLogo'> Company Shelby Limited</h1>
      <div className='menuIcon' onClick={setStateClicked(!Clicked)}>
        <i className={Clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>

      <ul className={Clicked ? 'nav-menu active' : 'nav-menu'}>
        <li> <Link className='navLinks'> Buscar </Link> </li>
        <li> <Link className='navLinks'> Compras </Link> </li>
        <li> <Link className='navLinks'> Contato </Link> </li>
        <li> <Link className='navLinksMobile'> Login </Link> </li>
      </ul>
    </nav>
  )
}

export default HeaderAux