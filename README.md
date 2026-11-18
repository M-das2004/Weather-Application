# 🌤️ Weather App

A simple, responsive weather application built with **React 19**, **Vite**, and **Material UI**. Search for any city and instantly see its current temperature, humidity, min/max temperature, and a "feels like" reading — along with a themed image and icon that change based on the weather conditions.

## ✨ Features

- 🔍 **City search** – look up current weather by city name
- 🌡️ **Detailed weather info** – temperature, feels-like, min/max temperature, humidity, and a text description (e.g. "light rain")
- 🖼️ **Dynamic visuals** – the card image and icon change based on conditions:
  - 🌧️ **Rainy** – humidity above 80%
  - ☀️ **Hot** – temperature above 20 °C
  - ❄️ **Cold** – everything else
- ⚠️ **Error handling** – shows a friendly message when a city isn't found
- 🎨 **Clean UI** – Material UI components (TextField, Button, Card) with custom styling

## 🛠️ Tech Stack

| Tool | Purpose |
| --- | --- |
| [React 19](https://react.dev/) | UI library |
| [Vite 8](https://vite.dev/) | Dev server & build tool |
| [Material UI (MUI)](https://mui.com/) | UI components |
| [Emotion](https://emotion.sh/) | Styling engine used by MUI |
| [Font Awesome](https://fontawesome.com/) | Weather icons (loaded via CDN) |
| [Oxlint](https://oxc.rs/docs/guide/usage/linter) | Linting |
| [OpenWeatherMap API](https://openweathermap.org/api) | Weather data source |

## 📁 Project Structure

```
react-project/
├── public/
│   ├── assets/
│   │   ├── cold_weather.png
│   │   ├── hot_weather.png
│   │   └── rainny_weather.png
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── App.jsx            # Root component
│   ├── WeatherApp.jsx     # Main container – holds weather state
│   ├── SearchBox.jsx      # City input form + API call
│   ├── InfoBox.jsx        # Weather card display
│   ├── SearchBox.css
│   ├── InfoBox.css
│   ├── App.css
│   ├── index.css
│   └── main.jsx           # App entry point
├── index.html
├── vite.config.js
├── .oxlintrc.json
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or later recommended)
- npm (comes with Node.js)
- A free API key from [OpenWeatherMap](https://openweathermap.org/api)

### Installation

1. **Clone or download** the project and move into the folder:

   ```bash
   cd react-project
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure the API.** Open `src/SearchBox.jsx` and fill in these two constants:

   ```jsx
   const API_URL = "https://api.openweathermap.org/data/2.5/weather";
   const API_KEY = "your_api_key_here";
   ```

   > ⚠️ **Security note:** Don't commit your real API key to a public repository. For a safer setup, move it into a `.env` file and read it with `import.meta.env`:
   >
   > ```bash
   > # .env
   > VITE_WEATHER_API_URL=https://api.openweathermap.org/data/2.5/weather
   > VITE_WEATHER_API_KEY=your_api_key_here
   > ```
   >
   > ```jsx
   > const API_URL = import.meta.env.VITE_WEATHER_API_URL;
   > const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
   > ```
   >
   > Make sure `.env` is listed in your `.gitignore`.

4. **Start the development server:**

   ```bash
   npm run dev
   ```

   Then open the URL shown in your terminal (usually <http://localhost:5173>).

## 📜 Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with hot reload |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Lint the code with Oxlint |

## 🧩 How It Works

1. **`WeatherApp`** keeps the current weather in state (it starts with a default for Kolkata) and passes an `updateInfo` function down to `SearchBox`.
2. **`SearchBox`** takes the city name, calls the OpenWeatherMap API (`units=metric`), extracts the needed fields, and updates the parent state. If the request fails, an error message is displayed.
3. **`InfoBox`** receives the weather data and renders an MUI card, choosing the image and icon from the humidity and temperature values.

## 🔮 Possible Improvements

- Move the API key to environment variables (see above)
- Add a loading indicator while fetching
- Clear the error message after a successful search
- Show a 5-day forecast
- Add °C / °F toggle
- Detect the user's location with the Geolocation API
- Use the actual weather condition code from the API (instead of only humidity/temperature) to pick visuals

## 👩‍💻 Author

Made by **Meghma**.

