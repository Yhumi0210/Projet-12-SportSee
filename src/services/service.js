const url = 'http://localhost:3000'
/**
 * @param {string} userId
 * @returns {Promise<object>}
 */

const fetchUser = async (userId) => {
    try {
        const response = await fetch(`${url}/user/${userId}`)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const result = await response.json()
        return result
    } catch (error) {
        console.error('Error fetching user data:', error)
        throw error
    }
}

const fetchActivity = async (userId) => {
    try {
        const response = await fetch(`${url}/user/${userId}/activity`)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const result = await response.json()
        return result
    } catch (error) {
        console.error('Error fetching user activity data:', error)
        throw error
    }
}

const fetchAverageSessions = async (userId) => {
    try {
        const response = await fetch(`${url}/user/${userId}/average-sessions`)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const result = await response.json()
        return result
    } catch (error) {
        console.error('Error fetching user average sessions data:', error)
        throw error
    }
}

const fetchTypeActivity = async (userId) => {
    try {
        const response = await fetch(`${url}/user/${userId}/performance`)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const result = await response.json()
        return result
    } catch (error) {
        console.error('Error fetching user performance data:', error)
        throw error
    }
}

export {
    fetchUser,
    fetchActivity,
    fetchAverageSessions,
    fetchTypeActivity
}