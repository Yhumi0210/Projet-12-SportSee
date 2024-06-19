import PropTypes from 'prop-types'


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
    active: PropTypes.bool,
    payload: PropTypes.array,

}

export default CustomToolTip