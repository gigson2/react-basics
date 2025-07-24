import React from 'react'

const WeatherCondition = () => {
    const temperature = 10; // Example temperature value

    return (
        <div>
            {/* conditional statement to check the weather below 15, between 15 and 25 and above 25 */}
            <h2>Weather Condition</h2>
            {temperature < 15 ? (
                <p>It's cold outside. Wear a jacket!</p>
            ) : temperature >= 15 && temperature <= 25 ? (
                <p>The weather is pleasant.</p>
            ) : (
                <p>It's hot outside. Stay hydrated!</p>
            )}

        </div>
    )
}

export default WeatherCondition