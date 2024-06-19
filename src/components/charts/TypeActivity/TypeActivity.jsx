import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'
import {fetchTypeActivity} from '../../../services/service.js'
import {useMediaQuery} from "react-responsive";

function TypeActivity() {
    const {userId} = useParams()
    const [data, setData] = useState([])
    const [setError] = useState(null)
    const [RadarSize, setRadarSize] = useState(130)

    const isLargeScreen = useMediaQuery({ minWidth: 1440 })
    const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1440 })
    const isSmallScreen = useMediaQuery({ maxWidth: 767 })

    useEffect(() => {
        if (!userId) {
            setError("User ID is not defined")
            return
        }
        fetchTypeActivity(userId).then(result => {
            if (result && result.data && result.data.kind && result.data.data) {
                const kindMapping = {
                    1: 'Cardio',
                    2: 'Energie',
                    3: 'Endurance',
                    4: 'Force',
                    5: 'Vitesse',
                    6: 'Intensité'
                }

                const formattedData = result.data.data.map(item => ({
                    name: kindMapping[item.kind],
                    value: item.value
                }))
                setData(formattedData)
                // const user = new User(result.data)
                // console.log(user)
            }
        })
        if (isLargeScreen) {
            setRadarSize(90)
        } else if (isMediumScreen) {
            setRadarSize(50)
        } else if (isSmallScreen) {
            setRadarSize(40)
        }
    }, [userId, data, setError,isLargeScreen, isMediumScreen, isSmallScreen])

    return (
        <div className='radarchart'>
            <ResponsiveContainer width='100%' height='100%'>
                <RadarChart outerRadius={RadarSize} data={data.reverse()}>
                    <PolarGrid gridType="polygon" stroke="white" radialLines={false}/>
                    <PolarAngleAxis dataKey="name" tick={{fill: '#FFFFFF', fontSize: 12}} tickSize={10}/>
                    <PolarRadiusAxis axisLine={false} domain={[0, 250]} tick={false} tickCount={7}/>
                    <Radar name="Performance" dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7}/>
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default TypeActivity