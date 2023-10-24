import { Forecastday, WeatherData } from "../../ts/weatherApiInterfaces";
import { loadIcon } from "../../ts/helperFunctions";
import { dayController } from "../../ts/currentDayController";

export { heroSectionFirstRender, renderDayMinMaxTemperature, renderSecondaryStats };

const humidityText = document.querySelector(".hero-section__humidity-text") as HTMLParagraphElement;
const chanceOfRainText = document.querySelector(".hero-section__chance-of-rain-text") as HTMLParagraphElement;
const windSpeedText = document.querySelector(".hero-section__wind-speed-text") as HTMLParagraphElement;
const uvIndexText = document.querySelector(".hero-section__uv-index-text") as HTMLParagraphElement;

function renderTemperature(value: number): void {
    const temperature = document.querySelector(".hero-section__temperature-value") as HTMLParagraphElement;
    temperature.textContent = `${value.toFixed(0)}`;
}

function renderDayMinMaxTemperature(forecastDay: Forecastday) {
    const maxTemperature = document.querySelector(".hero-section__max-temperature") as HTMLParagraphElement;
    maxTemperature.textContent = `${forecastDay.day.maxtemp_c.toFixed(0)}º`;

    const minTemperature = document.querySelector(".hero-section__min-temperature") as HTMLParagraphElement;
    minTemperature.textContent = `${forecastDay.day.mintemp_c.toFixed(0)}º`;
}

async function renderSecondaryStats(forecastDay: Forecastday, hour: number) {
    const condition = forecastDay.hour[hour].condition.text;
    const isDay = forecastDay.hour[hour].is_day;

    await loadIcon(condition, isDay);

    humidityText.textContent = `${forecastDay.hour[hour].humidity}%`;

    chanceOfRainText.textContent = `${forecastDay.day.daily_chance_of_rain}%`;

    windSpeedText.textContent = `${forecastDay.hour[hour].wind_kph}km/h`;

    uvIndexText.textContent = `${forecastDay.hour[hour].uv}`;
}

async function secondaryStatsFirstLoad(weatherData: WeatherData) {
    const condition = weatherData.current.condition.text;
    const isDay = weatherData.current.is_day;
    await loadIcon(condition, isDay);

    humidityText.textContent = `${weatherData.current.humidity}%`;

    // foracastday[0] means today
    chanceOfRainText.textContent = `${weatherData.forecast.forecastday[0].day.daily_chance_of_rain}%`;

    windSpeedText.textContent = `${weatherData.current.wind_kph.toFixed(0)}  km/h`;

    uvIndexText.textContent = `${weatherData.current.uv}.0`;
}

async function heroSectionFirstRender(weatherData: WeatherData) {
    const currentTemperature = weatherData.current.temp_c;
    const forecastDay = weatherData.forecast.forecastday[0];
    renderTemperature(currentTemperature);
    renderDayMinMaxTemperature(forecastDay);
    await secondaryStatsFirstLoad(weatherData);
}
