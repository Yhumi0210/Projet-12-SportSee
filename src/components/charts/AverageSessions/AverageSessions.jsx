import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import CustomDot from './CustomDot.jsx'
import CustomToolTip from './CustomToolTip.jsx'
import {fetchAverageSessions} from '../../../services/service.js'


function AverageSessions() {
    const { userId } = useParams()
    const [averageSessions, setAverageSessions] = useState('')
    const [activeIndex] = useState(-1)

    useEffect(() => {
        if (!userId) return
        fetchAverageSessions(userId).then(result => {
            if (result && result.data && result.data.sessions) {
                setAverageSessions(result.data.sessions)

            }
        })
    }, [userId])

    const formatLabel = (value) => {
        const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
        return days[value - 1] || value
    }

    const renderCustomAxisTick = ({ x, y, payload }) => {
        const xOffset = 0
        return (
            <text x={x + xOffset} y={y} dy={0} fill="rgba(255, 255, 255, 0.50)" fontSize="0.8rem" textAnchor="middle">
                {formatLabel(payload.value)}
            </text>
        )
    }

    return (
        <div className='linechart' style={{
            backgroundColor: activeIndex >= 0 ? 'rgba(230, 0, 0, 0.5)' : ''
        }}>
            <h3 className='linechart__title'>
                Durée moyenne des <br/>
                sessions
            </h3>
            <ResponsiveContainer width='100%' height='100%'>
                <LineChart data={averageSessions} margin={{ top: 0, right: 20, left: 20, bottom: 0 }}>
                    <Line
                        type="natural"
                        dataKey="sessionLength"
                        stroke="url(#colorUv)"
                        strokeWidth={2}
                        activeDot={<CustomDot/>}
                        dot={false}
                    />
                    <XAxis
                        dataKey="day"
                        axisLine={false}
                        tickLine={false}
                        tick={renderCustomAxisTick}
                        tickMargin={0}
                    />
                    <Tooltip content={<CustomToolTip/>} cursor={false} />
                    <YAxis hide domain={['dataMin-10', 'dataMax+10']} />
                    <defs>
                        <linearGradient
                            id="colorUv"
                            x1="0%"
                            y1="0"
                            x2="100%"
                            y2="0"
                        >
                            <stop
                                offset="0%"
                                stopColor="rgba(255, 255, 255, 0.3)"
                            />
                            <stop
                                offset="20%"
                                stopColor="rgba(255, 255, 255, 0.4)"
                            />
                            <stop
                                offset="40%"
                                stopColor="rgba(255, 255, 255, 0.5)"
                            />
                            <stop
                                offset="60%"
                                stopColor="rgba(255, 255, 255, 0.6)"
                            />
                            <stop
                                offset="100%"
                                stopColor="rgba(255, 255, 255, 1)"
                            />
                        </linearGradient>
                    </defs>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AverageSessions