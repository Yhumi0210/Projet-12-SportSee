/**
 * Intercepts fetch requests to handle CORS and network errors gracefully.
 *
 * @param {string} url - The URL to fetch data from.
 * @param {RequestInit} options - The options for the fetch request.
 * @returns {Promise<Response>} A promise that resolves to the fetch response.
 */
export const interceptFetch = async (url, options) => {
    try {
        const response = await fetch(url, options)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response
    } catch (error) {
        if (error.message.includes('Failed to fetch') || error.message.includes('CORS')) {
            // Mask CORS errors
            console.warn(`CORS or Network error while fetching ${url}`)
            return new Response(JSON.stringify({ error: 'CORS error or network error' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            })
        }
        throw error
    }
}

// ici j'essaie d'intercepter les erreurs type CORS : Blocage d’une requête multiorigine (Cross-Origin Request)
// mais je ne parviens pas à les cacher car elles proviennent du navigateur lui même.
