import AsideIcons from '../common/AsideIcons.jsx'
import FirstName from '../datas/FirstName.jsx'
import Activity from '../charts/Activity/Activity.jsx'
import AverageSessions from '../charts/AverageSessions/AverageSessions.jsx'
import TypeActivity from '../charts/TypeActivity/TypeActivity.jsx'
import AverageScore from '../charts/AverageScore/AverageScore.jsx'
import Macros from '../datas/Macros.jsx'
import { useEffect, useState } from 'react'
import { fetchUser, fetchActivity, fetchAverageSessions, fetchTypeActivity } from '../../services/service.js'
import { useParams } from 'react-router-dom'
import Activities from '../../models/Activities.js'
import User from '../../models/User.js'
import Session from '../../models/Session.js'
import ActivityType from '../../models/TypeActivity.js'

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
    const { userId } = useParams()+10
    const [activities, setActivities] = useState([])
    const [user, setUser] = useState({})
    const [averageSessions, setSessions] = useState([])
    const [typeActivity, setTypeActivity] = useState([])
    const [ loading, setLoading ] = useState(true)

    const getUser = async() => {
        try {
            const result = await fetchUser(userId)
            setUser(new User(result.data))
            return result
        }
        catch (error) {
            return error
        }
    }
    const getActivity = async() => {
        try {
            const result = await fetchActivity(userId)
            setActivities(new Activities(result.data).activities)
            return result
        }
        catch (error) {
            return error
        }
    }
    const getAverageSessions = async() => {
        try {
            const result = await fetchAverageSessions(userId)
            setSessions(result.data.sessions.map(item => new Session(item)))
            return result
        }
        catch (error) {
            return error
        }
    }
    const getTypeActivity = async() => {
        try {
            const result = await fetchTypeActivity(userId)
            setTypeActivity(result.data.data.map(item => new ActivityType(item)))
            return result
        }
        catch (error) {
            return error
        }
    }

    useEffect(() => {
        Promise.all([
            getUser(),
            getActivity(),
            getAverageSessions(),
            getTypeActivity()
        ]).then(() => {
            setLoading(false)
        }).catch(()=> {
            console.log('all error')
        })
    }, [])

    return (
        <section className='content'>
            <AsideIcons />
            <article className='maincontent'>
                <h1 className='maincontent__title'>
                    Bonjour
                    <span className='maincontent__title__name'>
                        <FirstName firstName={user.firstName} />
                    </span>
                </h1>

                <p className='maincontent__applause'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                <div className='maincontent__chart'>
                    {!loading?
                        <div className='maincontent__chart__graph'>
                            <Activity activities={activities}/>
                            <div className='row'>
                                <AverageSessions averageSessions={averageSessions}/>
                                <TypeActivity typeActivity={typeActivity}/>
                                <AverageScore score={user.score}/>
                            </div>
                        </div> : <div>Loading...</div>
                    }
                    <div className='allmacros'>
                        <Macros type="calorieCount"/>
                        <Macros type="proteinCount"/>
                        <Macros type="carbohydrateCount"/>
                        <Macros type="lipidCount"/>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default MainContent
