import { WeatherData } from "../../weatherApiInterfaces";
import { WEATHER_ICONS } from "../../imagesMapping";

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
    const temperature = document.querySelector(".heroCard__temperature") as HTMLParagraphElement;
    const currentConditionText = weatherData.current.condition.text;

    if (weatherData.current.is_day) {
        conditionIcon.src = WEATHER_ICONS.day[currentConditionText];
    } else {
        conditionIcon.src = WEATHER_ICONS.night[currentConditionText];
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
