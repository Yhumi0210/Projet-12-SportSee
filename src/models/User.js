// User renvoi l'objet créé donc data qui contient les infos

export default class User {
    /**
     * @param {Object} data
     * @param {number} data.id
     * @param {Object} data.userInfos
     * @param {string} data.userInfos.firstName
     */
     constructor(data) {
     /**
     * @property {number} id
     * @property {string} firstName
     */
    this.id = data.id
    this.firstName = data.userInfos.firstName

    // {
    //     "data": {
    //     "id": 12,
    //         "userInfos": {
    //         "firstName": "Karl",
    //             "lastName": "Dovineau",
    //             "age": 31
    //     },
    //     "todayScore": 0.12,
    //         "keyData": {
    //         "calorieCount": 1930,
    //             "proteinCount": 155,
    //             "carbohydrateCount": 290,
    //             "lipidCount": 50
    //     }
    // }
    // }
    }
}