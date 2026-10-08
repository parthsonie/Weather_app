import { useState } from "react";
import axios from "axios";

import WeatherCard from "./Components/WeatherCard";
import "./App.css";

function App() {

    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);


    function getWeather() {

        if (city.trim() === "") {
            return;
        }

        axios
            .get(
                `https://api.weatherapi.com/v1/current.json?key=cac5e491f1a74bc897d43909260710&q=${city}`
            )
            .then((response) => {

                console.log(response.data);

                setWeather(response.data);

            })
            .catch((error) => {

                console.log(error);

            });
    }


    return (
        <>

            {/* Search Section */}

            <div className="search-container">

                <input
                    type="text"
                    placeholder="Search for a city..."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            getWeather();
                        }
                    }}
                />

                <button
                    className="weather-btn"
                    onClick={getWeather}
                >
                    <span>Get Weather</span>
                    <span className="weather-btn-arrow">→</span>
                </button>

            </div>


            {/* Weather Card */}

            <WeatherCard weather={weather} />

        </>
    );
}

export default App;