import { NavLink } from 'react-router-dom'
import SportSeeLogo from '../../assets/img/Group.svg'
import '../../assets/scss/index.scss'
import {useEffect} from 'react'

function Header() {

    useEffect(() => {
        fetch('http://localhost:3000/user/12')
            .then(response => response.json())
            .then(result => {
                console.log(result)
            })
    }, [])

    // faire en sorte qu'en fonction de l'URL 12 ou 18, les infos s'affichent

  return (
      <div>
          <header className='header'>
              <NavLink to='/' className='header__logo'>
                  <img className='header__logo__img' src={SportSeeLogo} alt='Logo de SportSee'/>
                  <p className='header__logo__brand'>SportSee</p>
              </NavLink>
              <nav className='header__nav'>
                  <NavLink to='/' className='header__nav__menu' end>
                      Accueil
                  </NavLink>
                  <NavLink to='' className='header__nav__menu' end>
                      Profil
                  </NavLink>
                  <NavLink to='' className='header__nav__menu' end>
                      Réglage
                  </NavLink>
                  <NavLink to='' className='header__nav__menu' end>
                      Communauté
                  </NavLink>
              </nav>
          </header>
      </div>
  )
}

export default Header
