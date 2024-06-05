import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function FirstName() {
    // Création de l'état pour stocker le prénom de l'utilisateur
    const { userId } = useParams()
    const [firstName, setFirstName] = useState('')

    useEffect(() => {
        if (!userId) return

        fetch(`http://localhost:3000/user/${userId}`)
            .then(response => response.json())
            .then(result => {
                if (result && result.data && result.data.userInfos && result.data.userInfos.firstName) {
                    setFirstName(result.data.userInfos.firstName)
                }
            })
            .catch(error => {
                console.error('Error fetching user data:', error)
            })
    }, [userId])

    return (
        <div>
            {firstName}
        </div>
    )
}

export default FirstName