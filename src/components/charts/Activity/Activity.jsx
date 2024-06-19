import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import CustomToolTip from './CustomToolTip.jsx'
import {fetchActivity} from '../../../services/service.js'


function Activity() {
    const { userId } = useParams()
    const [activities, setActivities] = useState([])

    useEffect(() => {
        if (!userId) return
        fetchActivity(userId).then(result => {
            if (result && result.data && result.data.sessions) {
                const formattedData = result.data.sessions.map((session, index) => ({
                    ...session,
                    day: index + 1,
                    calories: session.calories,
                    kilogram: session.kilogram
                }))
                setActivities(formattedData)
            }
        })
    }, [userId])

    return (
        <div className='barchart'>
            <h2 className='barchart__title'>Activité quotidienne</h2>
            <ResponsiveContainer width='100%' height='100%'>
                <BarChart
                    data={activities}
                    margin={{
                        top: 10, right: 0, left: 0, bottom: 10,
                    }}
                    barGap={8}
                    barCategoryGap="20%"
                >
                    <CartesianGrid strokeDasharray="1 1" vertical={false}/>
                    <XAxis dataKey="day"
                           tick={{ fill: '#9B9EAC' }}
                           tickLine={false}
                           stroke="#DEDEDE"
                           strokeWidth={2}
                           tickMargin={16}/>
                    <YAxis
                        yAxisId="kilogram"
                        orientation="right"
                        tickMargin={30}
                        tick={{ fill: '#9B9EAC' }}
                        tickLine={false}
                        axisLine={false}
                        domain={['dataMin-2', 'dataMax+1']}
                        tickCount={3}
                    />
                    <YAxis yAxisId="calories" orientation="left" stroke="#9B9EAC" hide={true}/>
                    <Tooltip content={<CustomToolTip />} cursor={{ fill: 'rgba(196, 196, 196, 0.3)' }}/>
                    <Legend
                        className="custom-legend"
                        verticalAlign="top"
                        align="right"
                        iconType="circle"
                        wrapperStyle={{top: -20, right: 10}}
                        payload={[
                            {value: 'Poids (kg)', type: 'circle', color: '#020203'},
                            {value: 'Calories brûlées (kcal)', type: 'circle', color: '#E60000'},
                        ]}
                    />
                    <Bar yAxisId="kilogram" dataKey="kilogram" fill="#020203" name="Poids (kg)" barSize={10}
                         radius={[5, 5, 0, 0]}/>
                    <Bar yAxisId="calories" dataKey="calories" fill="#E60000" name="Calories brûlées (kCal)" barSize={10}
                         radius={[5, 5, 0, 0]}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Activity