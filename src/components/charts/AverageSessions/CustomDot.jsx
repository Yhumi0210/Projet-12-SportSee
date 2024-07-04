import PropTypes from 'prop-types'

/**
 * CustomDot component that renders custom dots for a chart.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {number} props.cx - The x-coordinate of the dot.
 * @param {number} props.cy - The y-coordinate of the dot.
 * @param {string} [props.stroke='#fff'] - The stroke color of the dot.
 * @example
 * return (
 *   <CustomDot cx={100} cy={100} stroke="#FF0000" />
 * )
 */
const CustomDot = ({ cx, cy, stroke = '#fff' }) => {
    return (
        <g>
            <circle cx={cx} cy={cy} r={10} fill={stroke} fillOpacity={0.3} />
            <circle cx={cx} cy={cy} r={4} fill={stroke} stroke="none" />
        </g>
    )
}

CustomDot.propTypes = {
    /**
     * The x-coordinate of the dot.
     */
    cx: PropTypes.number,

    /**
     * The y-coordinate of the dot.
     */
    cy: PropTypes.number,

    /**
     * The stroke color of the dot.
     */
    stroke: PropTypes.string
}

export default CustomDot
