import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function SearchBox({ updateInfo, handleError }) {
    const APIKEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
    const BaseUrl = "https://api.openweathermap.org/data/2.5/weather";
    const [city, setCity] = useState("");

    const fetchWeather = async () => {
        try {
            const response = await fetch(`${BaseUrl}?q=${city}&appid=${APIKEY}&units=metric`);
            
            if (!response.ok) {
                throw new Error('City not found');
            }

            const jsonResponse = await response.json();
            
            return {
                feels_like: jsonResponse.main.feels_like,
                humidity: jsonResponse.main.humidity,
                pressure: jsonResponse.main.pressure,
                temp: jsonResponse.main.temp,
                temp_max: jsonResponse.main.temp_max,
                temp_min: jsonResponse.main.temp_min,
                description: jsonResponse.weather[0].description,
                icon: jsonResponse.weather[0].icon,
                wind_speed: jsonResponse.wind.speed,
                visibility: jsonResponse.visibility,
                name: jsonResponse.name,
            };
        } catch (err) {
            throw err;
        }
    };

    const handleSearch = (e) => {
        setCity(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newInfo = await fetchWeather();
            updateInfo(newInfo);
            setCity("");
        } catch (err) {
            handleError(err.message);
        }
    };

    return (
        <div  className="search-container" >
            <h2 className="search-title">Search <i className="fa-solid fa-bolt-lightning"></i></h2>
            <form  className="search-form"  onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    value={city}
                    onChange={handleSearch}
                    required
                    fullWidth
                />
                <Button variant="contained" type="submit"  className='search-button'> <WbSunnyIcon className='thermo'/></Button>
            </form>
           
        </div>
    );
}