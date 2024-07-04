/**
 * Mapping for activity kinds to their readable names.
 * @type {Object.<number, string>}
 */
const kindMapping = {
    1: 'Cardio',
    2: 'Energie',
    3: 'Endurance',
    4: 'Force',
    5: 'Vitesse',
    6: 'Intensité'
}

/**
 * Class representing an Activity Type.
 */
export default class ActivityType {
    /**
     * Create an ActivityType.
     * @param {Object} data
     * @param {number} data.kind
     * @param {number} data.value
     */
    constructor(data) {
        /**
         * The name of the activity type.
         * @type {string}
         */
        this.name = kindMapping[data.kind]

        /**
         * The value associated with the activity type.
         * @type {number}
         */
        this.value = data.value
    }
}
