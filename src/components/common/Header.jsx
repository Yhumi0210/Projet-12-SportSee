import { NavLink } from 'react-router-dom'
import SportSeeLogo from '../../assets/img/Group.svg'
import '../../assets/scss/index.scss'


function Header() {

  return (
      <div>
          <header className='header'>
              <NavLink to='/user/:userId' className='header__logo'>
                  <img className='header__logo__img' src={SportSeeLogo} alt='Logo de SportSee'/>
                  <p className='header__logo__brand'>SportSee</p>
              </NavLink>
              <nav className='header__nav'>
                  <NavLink to='/user/:userId' className='header__nav__menu' end>
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
