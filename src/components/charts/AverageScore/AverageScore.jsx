import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'
import { useMediaQuery } from 'react-responsive'
import PropTypes from 'prop-types'
import {fetchUser} from '../../../services/service.js'

function AverageScore() {
    const { userId } = useParams()
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [barSize, setBarSize] = useState(130)

    const isLargeScreen = useMediaQuery({ minWidth: 1440 })
    const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1440 })
    const isSmallScreen = useMediaQuery({ maxWidth: 767 })

    useEffect(() => {
        if (!userId) return
        fetchUser(userId).then(result => {
            if (result && result.data && (result.data.score || result.data.todayScore)) {
                setData(result.data)
            }
            setLoading(false)
            })
            .catch(error => {
                console.error('Error fetching user data:', error)
                setError(error)
                setLoading(false)
            })

        if (isLargeScreen) {
            setBarSize(170)  // Taille pour grand écran
        } else if (isMediumScreen) {
            setBarSize(110)  // Taille pour écran moyen
        } else if (isSmallScreen) {
            setBarSize(70)   // Taille pour petit écran
        }
    }, [userId,isLargeScreen, isMediumScreen, isSmallScreen])

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    const score = data.todayScore ? data.todayScore : data.score
    const dataArray = [{ name: 'score', value: score * 100 }]

    return (
        <div className='chartgoal'>
            <h3 className='chartgoal__title'>Score</h3>
            <ResponsiveContainer width='100%' height='100%'>
                <RadialBarChart
                    innerRadius="0%"
                    outerRadius="0%"
                    data={dataArray}
                    startAngle={90}
                    endAngle={450}
                >
                    <RadialBar
                        data={[{ value: 100 }]}
                        dataKey="value"
                        barSize={barSize}
                        fill="#FFF"
                        isAnimationActive={false}
                    />
                    <RadialBar
                        dataKey="value"
                        barSize={10}
                        cornerRadius={100}
                        fill="#FF0000"
                    />
                </RadialBarChart>
            </ResponsiveContainer>
            <div className='chartgoal__text'>
                <p className='chartgoal__text__score'>
                    {score * 100}%
                </p>
                <p className='chartgoal__text__obj'>de votre<br/>
                objectif</p>
            </div>
        </div>
    )
}

AverageScore.propTypes = {
    data: PropTypes.object
}

export default AverageScore
