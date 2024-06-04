import AsideIcons from '../common/AsideIcons.jsx'

function MainContent() {
    return (
        <section className='content'>
            <AsideIcons />
            <article className='maincontent'>
                <h1 className='maincontent__title'>
                    Bonjour
                    <span className='maincontent__title__name'>
                        Thomas
                    </span>
                </h1>
                <p className='maincontent__applause'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </article>
        </section>
    )
}

export default MainContent