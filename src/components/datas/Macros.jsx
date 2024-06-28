import PropTypes from 'prop-types'

/**
 * Macro component that fetches and displays the user's macro data.
 *
 * @component
 * @param {object} props
 * @param {string} props.type
 * @example
 * return (
 *   <Macro type="calorieCount" />
 * )
 */

function Macro({ type, value }) { // 'type' peut être 'calorieCount', 'proteinCount', 'carbohydrateCount', ou 'lipidCount'

    /**
     * Format the type to a readable string.
     *
     * @param {string} type - The macro type.
     * @returns {string} The formatted macro type.
     */

    // Fonction pour formater le type de manière lisible
    function formatType(type) {
        switch (type) {
            case 'calorieCount':
                return 'Calories'
            case 'proteinCount':
                return 'Protéines'
            case 'carbohydrateCount':
                return 'Glucides'
            case 'lipidCount':
                return 'Lipides'
            default:
                return 'Inconnu'
        }
    }

    const imagePath = `../assets/img/${type}.png`

    return (
        <div className='macros'>
            <img className='macros__img' src={imagePath} alt={formatType(type)}/>
            <div className='macros__values'>
                <p className='macros__values__number'>{value}{type === 'calorieCount' ? 'kCal' : 'g'}</p>
                <p className='macros__values__text'>{formatType(type)}</p>
            </div>
        </div>
    )
}

Macro.propTypes = {
    /**
     * The type of macro data to display.
     */
    type: PropTypes.oneOf(['calorieCount', 'proteinCount', 'carbohydrateCount', 'lipidCount']).isRequired,
    value: PropTypes.number.isRequired
}

export default Macro