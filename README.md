# WeatherWise ☀️🌧️

A sleek weather application built with React and Material-UI that displays real-time weather data for any city worldwide.

![Weather App Screenshot](./assets/weatherPreview.png)

## Features ✨

- 🔍 Search weather by city name
- 🌡️ View current temperature (in °C)
- 💨 See wind speed and visibility
- 📊 Check humidity and pressure levels
- 🌅 Dynamic weather icons
- 📱 Fully responsive design

## Technologies Used 🛠️

- React.js (v18+)
- Material-UI (v5)
- OpenWeatherMap API
- CSS3 for custom styling
- Vite 

## Installation 🚀

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AshishSinsinwal/WeatherReactApp.git
   ```

2. **Navigate to project directory:**
   ```bash
   cd weather-app
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Create a `.env` file in root directory:**
   ```env
   VITE_OPENWEATHER_API_KEY=your_api_key_here
   ```
   > Get your free API key from [OpenWeatherMap](https://openweathermap.org/api)

5. **Start development server:**
   ```bash
   npm run dev
   ```

## Project Structure 📂

```
weather-app/
├── src/
│   ├── components/
│   │   ├── SearchBox.jsx
│   │   ├── InfoWeather.jsx
│   │   └── WeatherApp.jsx
│   ├── App.js
│   ├── main.jsx
│   ├── styles.css
│   └── ...
├── public/
├── package.json
└── README.md
```

## Available Scripts 📜

- `npm run dev` - Starts development server
- `npm run build` - Creates production build
- `npm run lint` - Runs ESLint
- `npm test` - Runs tests

## Customization 🎨

To modify styles:

1. Edit `styles.css` for global styles
2. Use `sx` prop for Material-UI component styling


## API Reference 🌐

This app uses OpenWeatherMap Current Weather Data API:

- **Endpoint:** `api.openweathermap.org/data/2.5/weather`
- **Required parameters:** `q={city}&appid={API_KEY}&units=metric`

## Contributing 🤝

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by [Ashish Sinsinwal]