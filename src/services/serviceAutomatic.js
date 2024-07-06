/**
 * Fetches data from the specified API endpoint or local mock data.
 *
 * This function determines whether to fetch data from an API or from local mock data
 * based on an environment variable. If the environment variable `VITE_USE_API` is set to `true`,
 * it will fetch data from the API specified by `VITE_FRONT_END_URL`.
 * Otherwise, it will fetch data from the local path specified by `VITE_LOCAL_DATA_PATH`.
 *
 * @param {string} path - The endpoint or path to fetch data from.
 * @returns {Promise<Object>} The fetched data as a JavaScript object.
 * @throws {Error} If the response is not OK or if there is a network error.
 */
export const fetchData = async (path) => {
    const useApi = import.meta.env.VITE_USE_API === 'true' //false pour passer sur les données mock
    const baseUrl = useApi ? import.meta.env.VITE_FRONT_END_URL : import.meta.env.VITE_LOCAL_DATA_PATH
    const url = useApi ? `${baseUrl}/${path}` : `${baseUrl}/${path}.json`

    console.log('API use is : ', baseUrl)
    console.log('url de l API : ', url)

    try {
        const response = await fetch(url)
        const result = await response.json()
        return result
    } catch (error) {
        console.error('Fetch error:', error)
        throw error
    }
}