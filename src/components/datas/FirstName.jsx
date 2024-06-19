import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchUser } from '../../services/service.js'
import User from '../../models/User.js'

function FirstName() {
    // Création de l'état pour stocker le prénom de l'utilisateur
    const { userId } = useParams()
    const [firstName, setFirstName] = useState('')

    useEffect(() => {
        if (!userId) return
        fetchUser(userId).then(result => {
            if (result && result.data && result.data.userInfos && result.data.userInfos.firstName) {
                setFirstName(result.data.userInfos.firstName)
                const user = new User(result.data)
                console.log(user)
            }
        })
    }, [userId])

    return (
        <div>
            {firstName}
        </div>
    )
}

export default FirstName