import { useEffect, useState } from 'react'
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'
import { useMediaQuery } from 'react-responsive'
import PropTypes from 'prop-types'

/**
 * AverageScore component that displays a radial bar chart of the user's average score.
 *
 * @component
 * @param {Object} props
 * @param {number} props.score
 * @example
 * return (
 *   <AverageScore score={0.7} />
 * )
 */
function AverageScore(props) {
    const [barSize, setBarSize] = useState(130)

    const isLargeScreen = useMediaQuery({ minWidth: 1440 })
    const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1440 })
    const isSmallScreen = useMediaQuery({ maxWidth: 767 })

    useEffect(() => {
        if (isLargeScreen) {
            setBarSize(170)  // Taille pour grand écran
        } else if (isMediumScreen) {
            setBarSize(110)  // Taille pour écran moyen
        } else if (isSmallScreen) {
            setBarSize(70)   // Taille pour petit écran
        }
    }, [isLargeScreen, isMediumScreen, isSmallScreen])

    const dataArray = [{ name: 'score', value: props.score * 100 }]

    return (
        <div className='chartgoal'>
            <h3 className='chartgoal__title'>Score</h3>
            <ResponsiveContainer width='100%' height='100%'>
                <RadialBarChart innerRadius="0%" outerRadius="0%" data={dataArray} startAngle={90} endAngle={450}>
                    <RadialBar data={[{ value: 100 }]} dataKey="value" barSize={barSize} fill="#FFF" isAnimationActive={false}/>
                    <RadialBar dataKey="value" barSize={10} cornerRadius={100} fill="#FF0000"/>
                </RadialBarChart>
            </ResponsiveContainer>
            <div className='chartgoal__text'>
                <p className='chartgoal__text__score'>
                    {props.score * 100}%
                </p>
                <p className='chartgoal__text__obj'>de votre<br/>
                    objectif</p>
            </div>
        </div>
    )
}

AverageScore.propTypes = {
    /**
     * The user's score, represented as a fraction (e.g., 0.7 for 70%).
     */
    score: PropTypes.number.isRequired
}

export default AverageScore
