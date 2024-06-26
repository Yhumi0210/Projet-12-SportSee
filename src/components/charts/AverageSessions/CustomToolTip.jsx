import PropTypes from 'prop-types'

/**
 * CustomToolTip component that renders a custom tooltip for a chart.
 *
 * @component
 * @param {Object} props
 * @param {boolean} props.active - Indicates if the tooltip is active.
 * @param {Array} props.payload
 * @example
 * return (
 *   <CustomToolTip active={true} payload={[{ value: 30 }]} />
 * )
 */
function CustomToolTip({ active, payload }) {
    if (active && payload && payload.length) {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: '#FFFFFF',
                padding: '0.5rem',
                color: '#020203',
                textAlign: 'center',
                fontFamily: 'Roboto',
                fontSize: '10px'
            }}>
                <p>{payload[0].value + ' min'}</p>
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
