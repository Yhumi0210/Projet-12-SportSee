/**
 * Class representing a Macro.
 */
export default class Macro {
    /**
     * Create a Macro.
     * @param {Object} data - The data for the macro.
     * @param {string} data.type - The type of the macro.
     * @param {number} data.value - The value of the macro.
     */
    constructor(data) {
        /**
         * The type of the macro.
         * @type {string}
         */
        this.type = data.type

        /**
         * The value of the macro.
         * @type {number}
         */
        this.value = data.value
    }
}
