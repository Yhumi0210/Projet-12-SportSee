import { Link } from 'react-router-dom'
import Header from '../common/Header.jsx'
import AsideIcons from '../common/AsideIcons.jsx'
import SportSeeLogo from '../../assets/img/Group.svg'

/**
 * UserSelection component that provides links to different user pages.
 *
 * @component
 * @example
 * return (
 *   <UserSelection />
 * )
 */

function UserSelection() {
    return (
        <div>
            <Header />
            <section className="userselect">
                <AsideIcons />
                <div className="userselect__container">
                    <div className="userselect__container__brand">
                        <img className='userselect__container__brand__logo' src={SportSeeLogo} alt='Logo de SportSee'/>
                        <p>SportSee</p>
                    </div>
                    <h1 className="userselect__container__title">Selectionner un <strong>utilisateur</strong></h1>
                    <div className='userselect__container__buttons'>
                        <Link className="userselect__container__buttons__user" to="/user/12">User 12</Link>
                        <Link className="userselect__container__buttons__user" to="/user/18">User 18</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default UserSelection
