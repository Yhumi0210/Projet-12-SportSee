export default class Activities {
    constructor(data) {
        this.activities = data.sessions.map((session, index) => ({
            ...session,
            day: index + 1,
            calories: session.calories,
            kilogram: session.kilogram
        }))
    }
}