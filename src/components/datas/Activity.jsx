import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

function Activity() {
    const { userId } = useParams()
    const [activities, setActivities] = useState([])

    useEffect(() => {
        if (!userId) return

        fetch(`http://localhost:3000/user/${userId}/activity`)
            .then(response => response.json())
            .then(result => {
                if (result && result.data && result.data.sessions) {
                    const formattedData = result.data.sessions.map((session, index) => ({
                        ...session,
                        day: index + 1,  // Format le jour pour l'affichage
                        kilogram: session.kilogram,
                        calories: session.calories
                    }))
                    setActivities(formattedData)
                }
            })
            .catch(error => {
                console.error('Error fetching user data:', error)
            })
    }, [userId])

    return (
        <div style={{width: '100%', height: 300}}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={activities}
                    margin={{
                        top: 30, right: 30, left: 20, bottom: 5,
                    }}
                    barGap={10}
                >
                    <CartesianGrid strokeDasharray="1 2" vertical={false}/>
                    <XAxis dataKey="day" />
                    <YAxis yAxisId="left" orientation="left" stroke="#74798C" hide={true} />
                    <YAxis
                        yAxisId="right"
                        orientation="right"
                        stroke="#74798C"
                        domain={[69,100]}  // Définit la plage de valeurs de 69 à 71
                        axisLine={false}
                        tickLine={false}
                    />
                    <Tooltip/>
                    <Legend
                        className="custom-legend"
                        verticalAlign="top"
                        align="right"
                        iconType="circle"
                        wrapperStyle={{ top: -20, right: 10 }}
                        payload={[
                            { value: 'Poids (kg)', type: 'circle', color: '#282D30' },
                            { value: 'Calories brûlées (kcal)', type: 'circle', color: '#FF0000' },
                        ]}
                    />
                    <Bar yAxisId="left" dataKey="kilogram" fill="#020203" name="Poids (kg)" barSize={10}
                         radius={[5, 5, 0, 0]}/>
                    <Bar yAxisId="right" dataKey="calories" fill="#E60000" name="Calories brûlées (kCal)" barSize={10}
                         radius={[5, 5, 0, 0]}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Activity
