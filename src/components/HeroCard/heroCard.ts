import { WeatherData } from "../../weatherApiInterfaces";

interface WeatherIconsInterface {
    day: { [key: string]: string };
    night: { [key: string]: string };
}

const WEATHER_ICONS: WeatherIconsInterface = {
    day: {
        Sunny: "/icons/Weather-Icons/day/sunny.png",
        "Partly cloudy": "/icons/Weather-Icons/day/partly-cloudy-day.png",
        Cloudy: "/icons/Weather-Icons/day/partly-cloudy-day.png",
        Overcast: "/icons/Weather-Icons/overcast.png",
        Mist: "/icons/Weather-Icons/day/mist.png",
        "Patchy rain possible": "/icons/Weather-Icons/drizzle.png",
        "Patchy snow possible": "/icons/Weather-Icons/snowing.png",
        "Patchy sleet possible": "/icons/Weather-Icons/rain-with-snow.png",
        "Patchy freezing drizzle possible": "/icons/Weather-Icons/rain-with-snow.png",
        "Thundery outbreaks possible": "/icons/Weather-Icons/thunderstorm.png",
        "Blowing snow": "/icons/Weather-Icons/snowing.png",
        Blizzard: "/icons/Weather-Icons/blizzard.png",
        Fog: "/icons/Weather-Icons/fog.png",
        "Freezing fog": "/icons/Weather-Icons/fog.png",
        "Patchy light drizzle": "/icons/Weather-Icons/rain-with-snow.png",
        "Light drizzle": "/icons/Weather-Icons/drizzle.png",
        "Freezing drizzle": "/icons/Weather-Icons/rain-with-snow.png",
        "Heavy freezing drizzle": "/icons/Weather-Icons/rain-with-snow.png",
        "Patchy light rain": "/icons/Weather-Icons/day/light-rain-day.png",
        "Light rain": "/icons/Weather-Icons/day/light-rain-day.png",
        "Moderate rain at times": "/icons/Weather-Icons/moderateORheavy-rain.png",
        "Moderate rain": "/icons/Weather-Icons/moderateORheavy-rain.png",
        "Heavy rain at times": "/icons/Weather-Icons/moderateORheavy-rain.png",
        "Heavy rain": "/icons/Weather-Icons/moderateORheavy-rain.png",
        "Light freezing rain": "/icons/Weather-Icons/rain-with-snow.png",
        "Moderate or heavy freezing rain": "/icons/Weather-Icons/rain-with-snow.png",
        "Light sleet": "/icons/Weather-Icons/rain-with-snow.png",
        "Moderate or heavy sleet": "/icons/Weather-Icons/rain-with-snow.png",
        "Patchy light snow": "/icons/Weather-Icons/snowing.png",
        "Light snow": "/icons/Weather-Icons/snowing.png",
        "Patchy moderate snow": "/icons/Weather-Icons/snowing.png",
        "Moderate snow": "/icons/Weather-Icons/snowing.png",
        "Patchy heavy snow": "/icons/Weather-Icons/blizzard.png",
        "Heavy snow": "/icons/Weather-Icons/blizzard.png",
        "Ice pellets": "/icons/Weather-Icons/ice-pellets.png",
        "Light rain shower": "/icons/Weather-Icons/day/light-rain-day.png",
        "Moderate or heavy rain shower": "/icons/Weather-Icons/moderateORheavy-rain.png",
        "Torrential rain shower": "/icons/Weather-Icons/moderateORheavy-rain.png",
        "Light sleet showers": "/icons/Weather-Icons/day/light-rain-day.png",
        "Moderate or heavy sleet showers": "/icons/Weather-Icons/moderateORheavy-rain.png",
        "Light snow showers": "/icons/Weather-Icons/snowing.png",
        "Moderate or heavy snow showers": "/icons/Weather-Icons/snowing.png",
        "Light showers of ice pellets": "/icons/Weather-Icons/ice-pellets.png",
        "Moderate or heavy showers of ice pellets": "/icons/Weather-Icons/ice-pellets.png",
        "Patchy light rain with thunder": "/icons/Weather-Icons/thunderstorm.png",
        "Moderate or heavy rain with thunder": "/icons/Weather-Icons/thunderstorm.png",
        "Patchy light snow with thunder": "/icons/Weather-Icons/snowing.png",
        "Moderate or heavy snow with thunder": "/icons/Weather-Icons/snowing.png",
    },

    night: {
        Clear: "/icons/Weather-Icons/night/clear.png",
        "Partly cloudy": "/icons/Weather-Icons/night/cloudy-night.png",
        Cloudy: "/icons/Weather-Icons/night/cloudy-night.png",
        Overcast: "/icons/Weather-Icons/overcast.png",
        Mist: "/icons/Weather-Icons/night/night-mist.png",
        "Patchy rain possible": "/icons/Weather-Icons/drizzle.png",
        "Patchy snow possible": "/icons/Weather-Icons/snowing.png",
        "Patchy sleet possible": "/icons/Weather-Icons/rain-with-snow.png",
        "Patchy freezing drizzle possible": "/icons/Weather-Icons/rain-with-snow.png",
        "Thundery outbreaks possible": "/icons/Weather-Icons/thunderstorm.png",
        "Blowing snow": "/icons/Weather-Icons/snowing.png",
        Blizzard: "/icons/Weather-Icons/blizzard.png",
        Fog: "/icons/Weather-Icons/fog.png",
        "Freezing fog": "/icons/Weather-Icons/fog.png",
        "Patchy light drizzle": "/icons/Weather-Icons/rain-with-snow.png",
        "Light drizzle": "/icons/Weather-Icons/drizzle.png",
        "Freezing drizzle": "/icons/Weather-Icons/rain-with-snow.png",
        "Heavy freezing drizzle": "/icons/Weather-Icons/rain-with-snow.png",
        "Patchy light rain": "/icons/Weather-Icons/raining.png",
        "Light rain": "/icons/Weather-Icons/raining.png",
        "Moderate rain at times": "/icons/Weather-Icons/moderateORheavy-rain.png",
        "Moderate rain": "/icons/Weather-Icons/moderateORheavy-rain.png",
        "Heavy rain at times": "/icons/Weather-Icons/moderateORheavy-rain.png",
        "Heavy rain": "/icons/Weather-Icons/moderateORheavy-rain.png",
        "Light freezing rain": "/icons/Weather-Icons/rain-with-snow.png",
        "Moderate or heavy freezing rain": "/icons/Weather-Icons/rain-with-snow.png",
        "Light sleet": "/icons/Weather-Icons/rain-with-snow.png",
        "Moderate or heavy sleet": "/icons/Weather-Icons/rain-with-snow.png",
        "Patchy light snow": "/icons/Weather-Icons/snowing.png",
        "Light snow": "/icons/Weather-Icons/snowing.png",
        "Patchy moderate snow": "/icons/Weather-Icons/snowing.png",
        "Moderate snow": "/icons/Weather-Icons/snowing.png",
        "Patchy heavy snow": "/icons/Weather-Icons/blizzard.png",
        "Heavy snow": "/icons/Weather-Icons/blizzard.png",
        "Ice pellets": "/icons/Weather-Icons/ice-pellets.png",
        "Light rain shower": "/icons/Weather-Icons/raining.png",
        "Moderate or heavy rain shower": "/icons/Weather-Icons/moderateORheavy-rain.png",
        "Torrential rain shower": "/icons/Weather-Icons/moderateORheavy-rain.png",
        "Light sleet showers": "/icons/Weather-Icons/raining.png",
        "Moderate or heavy sleet showers": "/icons/Weather-Icons/moderateORheavy-rain.png",
        "Light snow showers": "/icons/Weather-Icons/snowing.png",
        "Moderate or heavy snow showers": "/icons/Weather-Icons/snowing.png",
        "Light showers of ice pellets": "/icons/Weather-Icons/ice-pellets.png",
        "Moderate or heavy showers of ice pellets": "/icons/Weather-Icons/ice-pellets.png",
        "Patchy light rain with thunder": "/icons/Weather-Icons/thunderstorm.png",
        "Moderate or heavy rain with thunder": "/icons/Weather-Icons/thunderstorm.png",
        "Patchy light snow with thunder": "/icons/Weather-Icons/snowing.png",
        "Moderate or heavy snow with thunder": "/icons/Weather-Icons/snowing.png",
    },
};

function renderGreetings(weatherData: WeatherData) {
    const subtitle = document.querySelector(".heroCard__subtitle") as HTMLHeadingElement;
    const title = document.querySelector(".heroCard__title") as HTMLHeadingElement;

    const locationName = weatherData.location.name;
    subtitle.textContent = `Today in ${locationName}`;

    const currentCondition = weatherData.current.condition.text;
    title.textContent = currentCondition;
}

function renderStats(weatherData: WeatherData) {
    const conditionIcon = document.querySelector(".heroCard__icon") as HTMLImageElement;
    const temperature = document.querySelector(".heroCard__temperature") as HTMLDivElement;
    const conditionText = weatherData.current.condition.text;

    if (weatherData.current.is_day) {
        conditionIcon.src = WEATHER_ICONS.day[conditionText];
    } else {
        conditionIcon.src = WEATHER_ICONS.night[conditionText];
    }

    temperature.textContent = `${weatherData.current.temp_c}ºC`;
}

function renderSecondaryStats(weatherData: WeatherData) {
    const humidity = document.querySelector(".heroCard__humidity") as HTMLDivElement;
    const chanceOfRain = document.querySelector(".heroCard__chance-rain") as HTMLDivElement;
    const windSpeed = document.querySelector(".heroCard__wind-speed") as HTMLDivElement;
    const uvIndex = document.querySelector(".heroCard__uv-index") as HTMLDivElement;

    const humidityText = document.createElement("p");
    humidityText.textContent = `${weatherData.current.humidity}%`;
    humidity.appendChild(humidityText);

    const chanceOfRainText = document.createElement("p");
    chanceOfRainText.textContent = `${weatherData.forecast.forecastday[0].day.daily_will_it_rain}%`;
    chanceOfRain.appendChild(chanceOfRainText);

    const windSpeedText = document.createElement("p");
    windSpeedText.textContent = `${weatherData.current.wind_kph} km/h`;
    windSpeed.appendChild(windSpeedText);

    const uvIndexText = document.createElement("p");
    uvIndexText.textContent = `${weatherData.current.uv}`;
    uvIndex.appendChild(uvIndexText);
}

export function renderHeroCard(weatherData: WeatherData) {
    renderGreetings(weatherData);
    renderStats(weatherData);
    renderSecondaryStats(weatherData);
}
