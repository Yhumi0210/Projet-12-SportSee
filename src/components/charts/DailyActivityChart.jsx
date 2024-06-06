import React from 'react'
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts'

function CustomTooltip({ payload, label, active }) {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip" style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc' }}>
                <p className="label">{`Jour ${label}`}</p>
                <p style={{ color: '#020203' }}>{`Poids : ${payload[0].value} kg`}</p>
                <p style={{ color: '#E60000' }}>{`Calories brûlées : ${payload[1].value} kcal`}</p>
            </div>
        )
    }

    return null
}

function DailyActivityChart({ activities }) {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart
                data={activities}
                margin={{
                    top: 20, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar yAxisId="left" dataKey="kilogram" fill="#020203" name="Poids (kg)" />
                <Bar yAxisId="right" dataKey="calories" fill="#E60000" name="Calories brûlées (kCal)" />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default DailyActivityChart
