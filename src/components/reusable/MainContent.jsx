import AsideIcons from '../common/AsideIcons.jsx'
import FirstName from '../datas/FirstName.jsx'
import Activity from '../charts/Activity/Activity.jsx'
import AverageSessions from '../charts/AverageSessions/AverageSessions.jsx'
import TypeActivity from '../charts/TypeActivity/TypeActivity.jsx'
import AverageScore from '../charts/AverageScore/AverageScore.jsx'
import Macros from '../datas/Macros.jsx'
import {useEffect, useState} from 'react'
import { fetchUser, fetchActivity, fetchAverageSessions, fetchTypeActivity } from '../../services/service.js'
import {useParams} from 'react-router-dom'
import Activities from '../../models/Activities.js'
import User from '../../models/User.js'
import Session from '../../models/Session.js'

/**
 * MainContent component that serves as the main content section of the application,
 * displaying various charts and user data.
 *
 * @component
 * @example
 * return (
 *   <MainContent />
 * )
 */

function MainContent() {
    const { userId } = useParams()
    const [activities, setActivities] = useState([])
    const [user, setUser] = useState({})
    const [averageSessions, setSessions] = useState([])

    useEffect(() => {
        fetchUser(userId).then(result => {
            setUser(new User(result.data))
        })

        fetchActivity(userId).then(result => {
            const activity = new Activities(result.data)
            setActivities(activity.activities)
        })

        fetchAverageSessions(userId).then(result => {
            console.log(result.data)
            const sessionMap = result.data.sessions.map(item => new Session(item))
            console.log(sessionMap)
            setSessions(result.data.sessions.map(item => new Session(item)))
        })
    }, [])

    return (
        <section className='content'>
            <AsideIcons />
            <article className='maincontent'>
                <h1 className='maincontent__title'>
                    Bonjour
                    <span className='maincontent__title__name'>
                        <FirstName firstName={user.firstName}/>
                    </span>
                </h1>

                <p className='maincontent__applause'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                <div className='maincontent__chart'>
                    <div className='maincontent__chart__graph'>
                            <Activity activities={activities}/>
                        <div className='row'>
                            <AverageSessions averageSessions={averageSessions}/>
                            <TypeActivity/>
                            <AverageScore score={user.score}/>
                        </div>
                    </div>
                    <div className='allmacros'>
                        <Macros type="calorieCount"/>
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