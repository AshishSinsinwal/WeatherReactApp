import { useState } from 'react';
import SearchBox from './SearchBox';
import InfoWeather from './InfoWeather';

export default function WeatherApp() {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    const updateInfo = (newInfo) => {
        setWeather(newInfo);
        setError(null);
    };

    const handleError = (err) => {
        setError(err);
        setWeather(null);
    };

    return (
        <div className='weather-app' >
            <h1 className="app-title" >Weather App <i className="fa-solid fa-cloud "></i></h1>
            <SearchBox 
                updateInfo={updateInfo} 
                handleError={handleError}
            />
            {error && <p >{error}</p>}
            {weather && <InfoWeather weather={weather}/>}
        </div>
    );
}