// User renvoi l'objet créé donc data qui contient les infos

export default class User {
    /**
     * @param {Object} data
     * @param {number} data.id
     * @param {Object} data.userInfos
     * @param {string} data.userInfos.firstName
     * @param {number | undefined} data.score
     * @param {number | undefined} data.todayScore
     */
    constructor(data) {
        /**
         * @property {number} id
         * @property {string} firstName
         * @property {number | undefined} score
         * @property {number | undefined} todayScore
         */
        this.id = data.id
        this.firstName = data.userInfos.firstName
        this.score = data.score || data.todayScore
    }
}