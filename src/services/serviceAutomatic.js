//import { interceptFetch } from './interceptFetch'

/**
 * Fetches data from the API or falls back to local data if the API request fails.
 *
 * @param {string} path - The path to the API endpoint or local JSON file.
 * @returns {Promise<Object>} A promise that resolves to the fetched data as a JSON object.
 */
export const fetchData = async (path) => {
    const apiUrl = `${import.meta.env.VITE_FRONT_END_URL}/${path}`
    try {
        const response = await fetch(apiUrl)
        if (response.status === 500) {
            throw new Error('Failed to fetch from API')
        }
        const result = await response.json()
        console.log('fetch data from API succeeded')
        return result
    } catch (error) {
        console.log('Switching to local data fetch due to error:', error.message)
        try {
            const localUrl = `${import.meta.env.VITE_LOCAL_DATA_PATH}/${path}.json`
            const response = await fetch(localUrl)
            const result = await response.json()
            console.log('fetch data from local API succeeded')
            return result
        } catch (backupError) {
            console.error(`Error fetching local data from local API`, backupError)
            throw backupError
        }
    }
}
