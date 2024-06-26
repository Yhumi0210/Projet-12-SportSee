/**
 * Class representing a Session.
 */
export default class Session {
    /**
     * Create a Session.
     * @param {Object} data
     * @param {string} data.day
     * @param {number} data.sessionLength
     */
    constructor(data) {
        /**
         * The day of the session.
         * @type {string}
         */
        this.day = data.day

        /**
         * The length of the session.
         * @type {number}
         */
        this.sessionLength = data.sessionLength
    }
}
