import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Performance() {
    const { userId } = useParams()
    const [performanceData, setPerformanceData] = useState([])

    useEffect(() => {
        if (!userId) return

        fetch(`http://localhost:3000/user/${userId}/performance`)
            .then(response => response.json())
            .then(result => {
                if (result && result.data && Array.isArray(result.data.data)) {
                    const kindMapping = {
                        1: "cardio",
                        2: "energy",
                        3: "endurance",
                        4: "strength",
                        5: "speed",
                        6: "intensity"
                    }

                    const performanceEntries = result.data.data.map(entry => ({
                        value: entry.value,
                        kind: kindMapping[entry.kind] // Remap 'kind' from number to descriptive string
                    }))

                    setPerformanceData(performanceEntries)
                } else {
                    console.error("Unexpected data structure or no data:", result)
                }
            })
            .catch(error => {
                console.error('Error fetching user performance data:', error)
            })
    }, [userId])

    return (
        <div>
            {performanceData.length > 0 ? (
                <ul>
                    {performanceData.map((item, index) => (
                        <li key={index}>
                            Type: {item.kind}, Value: {item.value}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Aucune donnée de performance trouvée.</p>
            )}
        </div>
    )
}

export default Performance
