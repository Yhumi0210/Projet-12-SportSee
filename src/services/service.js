const url = 'http://localhost:3000'
const mock = (userId) => `${window.location.origin}/user/${userId}`

/**
 * Fetches user data from the API.
 * @param {string} userId
 * @returns {Promise<object>}
 * @throws Will
 */
const fetchUser = async (userId) => {
    try {
        const response = await fetch(`${url}/user/${userId}`)
        //const response = await fetch(mock(userId)+'/user.json')
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

/**
 * Fetches user activity data from the API.
 * @param {string} userId
 * @returns {Promise<object>}
 * @throws Will
 */
const fetchActivity = async (userId) => {
    try {
        const response = await fetch(`${url}/user/${userId}/activity`)
        // const response = await fetch(mock(userId)+'/activity.json')
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

/**
 * Fetches user average sessions data from the API.
 * @param {string} userId
 * @returns {Promise<object>}
 * @throws Will
 */
const fetchAverageSessions = async (userId) => {
    try {
        const response = await fetch(`${url}/user/${userId}/average-sessions`)
        //const response = await fetch(mock(userId)+'/average-sessions.json')
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

/**
 * Fetches user performance data from the API.
 * @param {string} userId
 * @returns {Promise<object>}
 * @throws Will
 */
const fetchTypeActivity = async (userId) => {
    try {
        const response = await fetch(`${url}/user/${userId}/performance`)
        //const response = await fetch(mock(userId)+'/performance.json')
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
