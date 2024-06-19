import PropTypes from 'prop-types'

const CustomDot = ({ cx, cy, stroke }) => {
    return (
        <g>
            <circle cx={cx} cy={cy} r={10} fill={stroke} fillOpacity={0.3} />
            <circle cx={cx} cy={cy} r={4} fill={stroke} stroke="none" />
        </g>
    )
}

CustomDot.propTypes = {
    cx: PropTypes.number.isRequired,
    cy: PropTypes.number.isRequired,
    stroke: PropTypes.string
}

CustomDot.defaultProps = {
    stroke: '#fff'
}

export default CustomDot
