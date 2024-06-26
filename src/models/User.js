// User renvoi l'objet créé donc data qui contient les infos

/**
 * Class representing a User.
 */
export default class User {
    /**
     * Create a User.
     * @param {Object} data
     * @param {number} data.id
     * @param {Object} data.userInfos
     * @param {string} data.userInfos.firstName
     * @param {number} [data.score]
     * @param {number} [data.todayScore]
     */
    constructor(data) {
        /**
         * The user ID.
         * @type {number}
         */
        this.id = data.id

        /**
         * The first name of the user.
         * @type {string}
         */
        this.firstName = data.userInfos.firstName

        /**
         * The score of the user. If not provided, today's score is used.
         * @type {number | undefined}
         */
        this.score = data.score || data.todayScore
    }
}
