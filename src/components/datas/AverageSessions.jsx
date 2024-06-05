import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function AverageSessions() {
    // Création de l'état pour stocker le prénom de l'utilisateur
    const { userId } = useParams()
    const [averageSessions, setAverageSessions] = useState('')

    useEffect(() => {
        if (!userId) return

        fetch(`http://localhost:3000/user/${userId}/activity`)
            .then(response => response.json())
            .then(result => {
                if (result && result.data && result.data.sessions) {
                    setAverageSessions(result.data.sessions)
                }
            })
            .catch(error => {
                console.error('Error fetching user data:', error)
            })
    }, [userId])

    return (
        <div>
            {averageSessions.length > 0 ? (
                <ul>
                    {averageSessions.map((sessions, index) => (
                        <li key={index}>
                            Jour : {sessions.day}, Durée de la session : {sessions.sessionsLength} min
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Aucune session trouvée.</p>
            )}
        </div>
    )
}

export default AverageSessions