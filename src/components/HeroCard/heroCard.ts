import { WeatherData } from "../../weatherApiInterfaces";
import { WEATHER_ICONS } from "../../imagesMapping";

function renderGreetings(weatherData: WeatherData) {
    const subtitle = document.querySelector(".hero-card__subtitle") as HTMLHeadingElement;
    const title = document.querySelector(".hero-card__title") as HTMLHeadingElement;

    const locationName = weatherData.location.name;
    subtitle.textContent = `Today in ${locationName}`;

    const currentCondition = weatherData.current.condition.text;
    title.textContent = currentCondition;
}

function renderTemperature(weatherData: WeatherData) {
    const temperature = document.querySelector(".hero-card__temperature-value") as HTMLParagraphElement;
    temperature.insertAdjacentText("afterbegin", `${weatherData.current.temp_c}`);

    const maxTemperature = document.querySelector(".hero-card__max-temperature") as HTMLParagraphElement;
    maxTemperature.insertAdjacentText("beforeend", `${weatherData.forecast.forecastday[0].day.maxtemp_c.toFixed(0)}`);

    const minTemperature = document.querySelector(".hero-card__min-temperature") as HTMLParagraphElement;
    minTemperature.insertAdjacentText("beforeend", `${weatherData.forecast.forecastday[0].day.mintemp_c.toFixed(0)}`);
}

function renderSecondaryStats(weatherData: WeatherData) {
    const conditionIcon = document.querySelector(".hero-card__condition-icon") as HTMLImageElement;
    const currentConditionText = weatherData.current.condition.text;

    if (weatherData.current.is_day) {
        conditionIcon.src = WEATHER_ICONS.day[currentConditionText];
    } else {
        conditionIcon.src = WEATHER_ICONS.night[currentConditionText];
    }

    const humidityText = document.querySelector(".hero-card__humidity-text") as HTMLParagraphElement;
    humidityText.textContent = `${weatherData.current.humidity}%`;

    const chanceOfRainText = document.querySelector(".hero-card__chance-of-rain-text") as HTMLParagraphElement;
    // foracastday[0] means today
    chanceOfRainText.textContent = `${weatherData.forecast.forecastday[0].day.daily_chance_of_rain}%`;

    const windSpeedText = document.querySelector(".hero-card__wind-speed-text") as HTMLParagraphElement;
    windSpeedText.textContent = `${weatherData.current.wind_kph.toFixed(0)}  km/h`;

    const uvIndexText = document.querySelector(".hero-card__uv-index-text") as HTMLParagraphElement;
    uvIndexText.textContent = `${weatherData.current.uv}.0`;
}

export function renderHeroCard(weatherData: WeatherData) {
    renderGreetings(weatherData);
    renderTemperature(weatherData);
    renderSecondaryStats(weatherData);
}
