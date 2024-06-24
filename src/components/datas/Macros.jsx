import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import {fetchUser} from '../../services/service.js'

/**
 * Macro component that fetches and displays the user's macro data.
 *
 * @component
 * @param {object} props - The component props.
 * @param {string} props.type - The type of macro data to display. Can be 'calorieCount', 'proteinCount', 'carbohydrateCount', or 'lipidCount'.
 * @example
 * return (
 *   <Macro type="calorieCount" />
 * )
 */

function Macro({ type }) { // 'type' peut être 'calorieCount', 'proteinCount', 'carbohydrateCount', ou 'lipidCount'
    const { userId } = useParams()
    const [value, setValue] = useState(0)
    const [setError] = useState(null)

    useEffect(() => {
        if (!userId) {
            setError("User ID is not defined")
            return
        }
        fetchUser(userId).then(result => {
            if (result && result.data && result.data.keyData && result.data.keyData[type]) {
                setValue(result.data.keyData[type])
            }
        })
            .catch(error => {
                console.error('Erreur lors de la récupération des données utilisateur :', error)
            })
    }, [])

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
     * Can be 'calorieCount', 'proteinCount', 'carbohydrateCount', or 'lipidCount'.
     */
    type: PropTypes.oneOf(['calorieCount', 'proteinCount', 'carbohydrateCount', 'lipidCount']).isRequired,
}

export default Macro