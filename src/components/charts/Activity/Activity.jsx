import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import CustomToolTip from './CustomToolTip.jsx'
import PropTypes from 'prop-types'

/**
 * Activity component that displays a bar chart of daily activity.
 *
 * @component
 * @param {Object} props
 * @param {Array<{day: string, kilogram: number, calories: number}>} props.activities
 * @example
 * return (
 *   <Activity activities={[{ day: '2023-01-01', kilogram: 70, calories: 240 },
 *   { day: '2023-01-02', kilogram: 69, calories: 220 }]} />
 * )
 */
function Activity({ activities }) {
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
                        dataKey='kilogram'
                        orientation="right"
                        tickMargin={30}
                        tick={{ fill: '#9B9EAC' }}
                        tickLine={false}
                        axisLine={false}
                        domain={['dataMin-2', 'dataMax+1']}
                        tickCount={3}
                    />
                    <YAxis yAxisId="calories" dataKey='calories' orientation="left" stroke="#9B9EAC" hide={true}/>
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

Activity.propTypes = {
    activities: PropTypes.arrayOf(
        PropTypes.shape({
            day: PropTypes.string.isRequired,
            kilogram: PropTypes.number.isRequired,
            calories: PropTypes.number.isRequired,
        })
    ).isRequired
}

export default Activity
