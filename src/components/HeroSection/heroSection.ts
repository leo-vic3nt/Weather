import { WeatherData } from "../../weatherApiInterfaces";
import { WEATHER_ICONS } from "../../ts/imagesMapping";

export async function renderHeroSection(weatherData: WeatherData) {
    renderTemperature(weatherData);
    await renderSecondaryStats(weatherData);
}

function renderTemperature(weatherData: WeatherData) {
    const temperature = document.querySelector(".hero-section__temperature-value") as HTMLParagraphElement;
    temperature.textContent = `${weatherData.current.temp_c.toFixed(0)}`;

    const maxTemperature = document.querySelector(".hero-section__max-temperature") as HTMLParagraphElement;
    maxTemperature.textContent = `${weatherData.forecast.forecastday[0].day.maxtemp_c.toFixed(0)}º`;

    const minTemperature = document.querySelector(".hero-section__min-temperature") as HTMLParagraphElement;
    minTemperature.textContent = `${weatherData.forecast.forecastday[0].day.mintemp_c.toFixed(0)}º`;
}

function loadIcon(weatherData: WeatherData): Promise<void> {
    return new Promise((resolve) => {
        const currentConditionText = weatherData.current.condition.text;
        const conditionIcon = document.querySelector(".hero-section__condition-icon") as HTMLImageElement;

        if (weatherData.current.is_day) {
            conditionIcon.src = WEATHER_ICONS.day[currentConditionText];
        } else {
            conditionIcon.src = WEATHER_ICONS.night[currentConditionText];
        }

        conditionIcon.onload = function () {
            resolve();
        };
    });
}

async function renderSecondaryStats(weatherData: WeatherData) {
    await loadIcon(weatherData);

    const humidityText = document.querySelector(".hero-section__humidity-text") as HTMLParagraphElement;
    humidityText.textContent = `${weatherData.current.humidity}%`;

    const chanceOfRainText = document.querySelector(".hero-section__chance-of-rain-text") as HTMLParagraphElement;
    // foracastday[0] means today
    chanceOfRainText.textContent = `${weatherData.forecast.forecastday[0].day.daily_chance_of_rain}%`;

    const windSpeedText = document.querySelector(".hero-section__wind-speed-text") as HTMLParagraphElement;
    windSpeedText.textContent = `${weatherData.current.wind_kph.toFixed(0)}  km/h`;

    const uvIndexText = document.querySelector(".hero-section__uv-index-text") as HTMLParagraphElement;
    uvIndexText.textContent = `${weatherData.current.uv}.0`;
}
