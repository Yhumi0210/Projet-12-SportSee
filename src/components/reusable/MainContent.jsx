import AsideIcons from '../common/AsideIcons.jsx'
import FirstName from '../datas/FirstName.jsx'
import Activity from '../datas/Activity.jsx'
// import AverageSessions from '../datas/AverageSessions.jsx'
// import Performance from '../datas/Performance.jsx'
import Macros from '../datas/Macros.jsx'

function MainContent() {

    return (
        <section className='content'>
            <AsideIcons />
            <article className='maincontent'>
                <h1 className='maincontent__title'>
                    Bonjour
                    <span className='maincontent__title__name'>
                        <FirstName />
                    </span>
                </h1>
                <p className='maincontent__applause'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                <div className='maincontent__chart'>
                    <Activity />
                    {/*<AverageSessions />*/}
                    {/*<Performance />*/}
                    <div className='allmacros'>
                        <Macros type="calorieCount" />
                        <Macros type="proteinCount" />
                        <Macros type="carbohydrateCount" />
                        <Macros type="lipidCount" />
                    </div>
                </div>
            </article>
        </section>
    )
}

export default MainContent