import PropTypes from 'prop-types'

/**
 * CustomToolTip component that renders a custom tooltip for a chart.
 *
 * @component
 * @param {Object} props
 * @param {boolean} props.active
 * @param {Array} props.payload
 * @example
 * return (
 *   <CustomToolTip active={true} payload={[{ value: 50 }, { value: 200 }]} />
 * )
 */
function CustomToolTip({ active, payload }) {
    if (active && payload && payload.length) {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: '#E60000',
                padding: '1rem 0.5rem',
                color: 'white',
                textAlign: 'center',
                height: '3rem',
                fontFamily: 'Roboto',
                fontSize: '10px',
            }}>
                <p>{`${payload[0].value} kg`}</p>
                <p>{`${payload[1].value} kCal`}</p>
            </div>
        )
    }

    return null
}

CustomToolTip.propTypes = {
    /**
     * Indicates if the tooltip is active.
     */
    active: PropTypes.bool,

    /**
     * The payload of the tooltip data.
     */
    payload: PropTypes.array,
}

export default CustomToolTip
