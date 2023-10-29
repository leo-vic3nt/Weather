import { WEATHER_ICONS } from "../../ts/imagesMapping";
import { Forecast, Forecastday } from "../../ts/weatherApiInterfaces";

const dailyPicker = document.querySelector(".picker__days") as HTMLButtonElement;
const hourlyPicker = document.querySelector(".picker__hours") as HTMLButtonElement;
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function toggleActivePicker(click: MouseEvent): void {
    dailyPicker.classList.remove("forecast__picker--active");
    hourlyPicker.classList.remove("forecast__picker--active");

    const clicked = click.target as HTMLButtonElement;

    clicked.classList.add("forecast__picker--active");
}

function createDayCard(day: Forecastday) {
    const card = document.createElement("div");
    card.classList.add("forecast__card");

    const date = new Date(day.hour[0].time);
    const currentDay = document.createElement("p");
    currentDay.classList.add("day");
    currentDay.textContent = days[date.getDay()];

    const conditionIcon = new Image();
    conditionIcon.src = WEATHER_ICONS.day[day.day.condition.text];
    conditionIcon.classList.add("condition-icon");

    const minMax = document.createElement("div");
    minMax.classList.add("min-max-container");
    const max = document.createElement("p");
    max.classList.add("max");
    max.textContent = `${day.day.maxtemp_c.toFixed(0)}º`;
    const min = document.createElement("p");
    min.classList.add("min");
    min.textContent = `${day.day.mintemp_c.toFixed(0)}º`;
    minMax.append(max, min);

    card.append(currentDay, conditionIcon, minMax);

    return card;
}

export function populateDaysForecast(forecast: Forecast) {
    const daysForecast = document.querySelector(".forecast__days") as HTMLDivElement;
    // Clear before repopulating
    daysForecast.textContent = "";
    const tomorrow = createDayCard(forecast.forecastday[1]);
    const afterTomorrow = createDayCard(forecast.forecastday[2]);

    daysForecast.append(tomorrow, afterTomorrow);
}
