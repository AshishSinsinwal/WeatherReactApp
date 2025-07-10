import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function InfoWeather({ weather }) {
    const weatherIconUrl = weather.icon 
        ? `https://openweathermap.org/img/wn/${weather.icon}@2x.png`
        : 'https://plus.unsplash.com/premium_photo-1714923303591-3b262dd1864f?q=80&w=1332&auto=format&fit=crop';

    return (
        <Card  className="weather-card">
    <CardContent>
        <Typography variant="h5" component="div" className="weather-location">
            {weather.name}
        </Typography>
        
        <div className="weather-main">
            <img 
                src={weatherIconUrl} 
                alt={weather.description} 
                className="weather-icon"
            />
            <Typography  className="weather-temp">
                {Math.round(weather.temp)}°C
            </Typography>
        </div>

        <div className="weather-details">
            <Typography variant="body1" className="weather-detail" sx={{ mb: 1 }}>
                Feels like: {Math.round(weather.feels_like)}°C | {weather.description}
            </Typography>
            
            <Typography variant="body2" color="text.secondary" className="weather-detail" sx={{ mb: 1 }}>
                High: {Math.round(weather.temp_max)}°C | Low: {Math.round(weather.temp_min)}°C
            </Typography>
            
            <Typography variant="body2" color="text.secondary" className="weather-detail" sx={{ mb: 1 }}>
                Humidity: {weather.humidity}% | Pressure: {weather.pressure} hPa
            </Typography>
            
            <Typography variant="body2" color="text.secondary" className="weather-detail">
                Wind: {weather.wind_speed} m/s | Visibility: {(weather.visibility/1000).toFixed(1)} km
            </Typography>
        </div>
    </CardContent>
</Card>
    );
}