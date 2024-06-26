/**
 * Class representing a collection of activities.
 */
export default class Activities {
    /**
     * Create an Activities instance.
     * @param {Object} data
     * @param {Object[]} data.sessions
     * @param {number} data.sessions[].calories
     * @param {number} data.sessions[].kilogram
     */
    constructor(data) {
        /**
         * The list of activity sessions with added day, calories, and kilogram properties.
         * @type {Object[]}
         */
        this.activities = data.sessions.map((session, index) => ({
            ...session,
            day: index + 1,
            calories: session.calories,
            kilogram: session.kilogram
        }))
    }
}
