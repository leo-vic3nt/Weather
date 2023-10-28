import { currentWeatherData } from "../../main";
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
    const timezone = currentWeatherData.location.tz_id;
    const card = document.createElement("div");
    card.classList.add("forecast__card");

    const dateConvertedTimeZone: string = new Date(day.date_epoch * 1000).toLocaleString("en-US", {
        timeZone: `${timezone}`,
    });
    const actualDate = new Date(dateConvertedTimeZone);
    const currentDay = document.createElement("p");
    currentDay.classList.add("day");
    currentDay.textContent = days[actualDate.getDay()];

    const conditionIcon = new Image();
    conditionIcon.src = WEATHER_ICONS.day[day.day.condition.text];
    conditionIcon.classList.add("condition-icon");

    const minMax = document.createElement("div");
    minMax.classList.add("min-max-container");
    const max = document.createElement("p");
    max.classList.add("max");
    max.textContent = `${day.day.maxtemp_c}`;
    const min = document.createElement("p");
    min.classList.add("min");
    min.textContent = `${day.day.mintemp_c}`;
    minMax.append(max, min);

    card.append(currentDay, conditionIcon, minMax);

    return card;
}

export function populateDaysForecast(forecast: Forecast) {
    const daysForecast = document.querySelector(".forecast__days");

    const tomorrow = createDayCard(forecast.forecastday[2]);
    const afterTomorrow = createDayCard(forecast.forecastday[2]);

    daysForecast?.append(tomorrow, afterTomorrow);
}
