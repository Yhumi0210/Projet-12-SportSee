import PropTypes from 'prop-types'

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
    active: PropTypes.bool,
    payload: PropTypes.array,

}

export default CustomToolTip