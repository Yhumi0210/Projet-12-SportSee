import { useEffect, useState } from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'
import { useMediaQuery } from 'react-responsive'
import PropTypes from 'prop-types'

/**
 * TypeActivity component that displays a radar chart of the user's activity types.
 *
 * @component
 * @param {Object} props
 * @param {Array} props.typeActivity
 * @example
 * return (
 *   <TypeActivity typeActivity={[{ name: 'Cardio', value: 120 },
 *   { name: 'Energie', value: 80 }]} />
 * )
 */
function TypeActivity({typeActivity}) {
    const [RadarSize, setRadarSize] = useState(130)

    const isLargeScreen = useMediaQuery({ minWidth: 1440 })
    const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1440 })
    const isSmallScreen = useMediaQuery({ maxWidth: 767 })

    useEffect(() => {
        if (isLargeScreen) {
            setRadarSize(90)
        } else if (isMediumScreen) {
            setRadarSize(50)
        } else if (isSmallScreen) {
            setRadarSize(40)
        }
    }, [isLargeScreen, isMediumScreen, isSmallScreen])

    return (
        <div className='radarchart'>
            <ResponsiveContainer width='100%' height='100%'>
                <RadarChart outerRadius={RadarSize} data={typeActivity}>
                    <PolarGrid gridType="polygon" stroke="white" radialLines={false} />
                    <PolarAngleAxis dataKey="name" tick={{ fill: '#FFFFFF', fontSize: 12 }} tickSize={10} />
                    <PolarRadiusAxis axisLine={false} domain={[0, 250]} tick={false} tickCount={7} />
                    <Radar name="Performance" dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}

TypeActivity.propTypes = {
    /**
     * The array of activity types data.
     * Each item should be an object with `name` and `value` properties.
     */
    typeActivity: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired
        })
    ).isRequired
}

export default TypeActivity
