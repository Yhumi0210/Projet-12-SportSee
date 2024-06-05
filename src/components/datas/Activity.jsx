import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Activity() {
    // Création de l'état pour stocker le prénom de l'utilisateur
    const { userId } = useParams()
    const [activities, setActivities] = useState('')

    useEffect(() => {
        if (!userId) return

        fetch(`http://localhost:3000/user/${userId}/activity`)
            .then(response => response.json())
            .then(result => {
                if (result && result.data && result.data.sessions) {
                    setActivities(result.data.sessions)
                }
            })
            .catch(error => {
                console.error('Error fetching user data:', error)
            })
    }, [userId])

    return (
        <div>
            {activities.length > 0 ? (
                <ul>
                    {activities.map((activity, index) => (
                        <li key={index}>
                            Jour : {activity.day}, Poids : {activity.kilogram} kg, Calories brûlées
                            : {activity.calories} cal
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Aucune activité trouvée.</p>
            )}
        </div>
    )
}

export default Activity