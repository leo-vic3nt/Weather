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

function renderMainStats(weatherData: WeatherData) {
    const conditionIcon = document.querySelector(".heroCard__main-icon") as HTMLImageElement;
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
    const humidityIcon = document.querySelector(".heroCard__humidity-icon") as HTMLImageElement;
    const humidityText = document.querySelector(".heroCard__humidity-text") as HTMLParagraphElement;
    humidityIcon.src = "/icons/Stats/humidity.png";
    humidityText.textContent = `${weatherData.current.humidity}%`;

    const chanceOfRainIcon = document.querySelector(".heroCard__chance-of-rain-icon") as HTMLImageElement;
    const chanceOfRainText = document.querySelector(".heroCard__chance-of-rain-text") as HTMLParagraphElement;
    chanceOfRainIcon.src = "/icons/Stats/chance-of-rain.png";
    // foracastday[0] means today
    chanceOfRainText.textContent = `${weatherData.forecast.forecastday[0].day.daily_chance_of_rain}%`;

    const windSpeedIcon = document.querySelector(".heroCard__wind-speed-icon") as HTMLImageElement;
    const windSpeedText = document.querySelector(".heroCard__wind-speed-text") as HTMLParagraphElement;
    windSpeedIcon.src = "/icons/Stats/wind-speed.png";
    windSpeedText.textContent = `${weatherData.current.wind_kph.toFixed(0)}  km/h`;

    const uvIndexIcon = document.querySelector(".heroCard__uv-index-icon") as HTMLImageElement;
    const uvIndexText = document.querySelector(".heroCard__uv-index-text") as HTMLParagraphElement;
    uvIndexIcon.src = "/icons/Stats/uv-index.png";
    uvIndexText.textContent = `${weatherData.current.uv}`;
}

export function renderHeroCard(weatherData: WeatherData) {
    renderGreetings(weatherData);
    renderMainStats(weatherData);
    renderSecondaryStats(weatherData);
}
