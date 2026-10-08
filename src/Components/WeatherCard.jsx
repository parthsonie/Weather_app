import "./WeatherCard.css";

function WeatherCard({ weather }) {

    if (!weather) {
        return null;
    }

    return (
        <div className="weather-card">

            {/* Top Section */}
            <div className="weather-header">

                <div>
                    <p className="weather-label">
                        CURRENT WEATHER
                    </p>

                    <h1 className="city-name">
                        {weather.location.name}
                    </h1>

                    <p className="country-name">
                        {weather.location.region}, {weather.location.country}
                    </p>
                </div>

                <div className="weather-condition">
                    <img
                        src={`https:${weather.current.condition.icon}`}
                        alt={weather.current.condition.text}
                    />

                    <span>
                        {weather.current.condition.text}
                    </span>
                </div>

            </div>


            {/* Main Temperature */}
            <div className="temperature-section">

                <div className="temperature">
                    {Math.round(weather.current.temp_c)}
                    <span>°</span>
                </div>

                <div className="temperature-unit">
                    C
                </div>

            </div>


            {/* Weather Details */}
            <div className="weather-details">

                <div className="weather-detail">

                    <div className="detail-icon humidity-icon">
                        <span>💧</span>
                    </div>

                    <div className="detail-content">
                        <p>Humidity</p>

                        <h3>
                            {weather.current.humidity}%
                        </h3>
                    </div>

                </div>


                <div className="weather-detail">

                    <div className="detail-icon wind-icon">
                        <span>↗</span>
                    </div>

                    <div className="detail-content">
                        <p>Wind Speed</p>

                        <h3>
                            {weather.current.wind_kph} km/h
                        </h3>
                    </div>

                </div>


                <div className="weather-detail">

                    <div className="detail-icon feels-icon">
                        <span>°</span>
                    </div>

                    <div className="detail-content">
                        <p>Feels Like</p>

                        <h3>
                            {Math.round(weather.current.feelslike_c)}°C
                        </h3>
                    </div>

                </div>

            </div>


            {/* Footer */}
            <div className="weather-footer">

                <span>
                    Updated {weather.current?.last_updated}
                </span>

                <span className="weather-status">
                    ● Live
                </span>

            </div>

        </div>
    );
}

export default WeatherCard;