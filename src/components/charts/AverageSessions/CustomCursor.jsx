import { Rectangle } from 'recharts'
import PropTypes from 'prop-types'

/**
 * CustomCursor component that renders a rectangle as a custom cursor in a chart.
 *
 * @component
 * @param {Object} props - The props of the component.
 * @param {Array} props.points - An array of points where the cursor is located.
 * @returns {JSX.Element} A rectangle element used as a custom cursor.
 *
 * @example
 * <CustomCursor points={pointsArray} />
 */
const CustomCursor = ({ points }) => {
    return (
        <Rectangle
            fill='#000000'
            opacity={0.2}
            x={points[1].x}
            width={1000}
            height={700}
        />
    )
}

CustomCursor.propTypes = {
    points: PropTypes.array
}

export default CustomCursor
