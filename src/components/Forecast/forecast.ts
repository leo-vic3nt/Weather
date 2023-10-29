import { WEATHER_ICONS } from "../../ts/imagesMapping";
import { Forecast, Forecastday, Hour } from "../../ts/weatherApiInterfaces";

const dailyPicker = document.querySelector(".picker__days") as HTMLButtonElement;
const hourlyPicker = document.querySelector(".picker__hours") as HTMLButtonElement;
const daysForecastContainer = document.querySelector(".forecast__days") as HTMLDivElement;
const hoursForecastContainer = document.querySelector(".forecast__hours") as HTMLDivElement;

function toggleForecastType(click: MouseEvent): void {
    dailyPicker.classList.remove("forecast__picker--active");
    hourlyPicker.classList.remove("forecast__picker--active");
    daysForecastContainer.style.display = "none";
    hoursForecastContainer.style.display = "none";

    const clickedBtn = click.target as HTMLButtonElement;
    clickedBtn.classList.add("forecast__picker--active");
    if (clickedBtn.textContent === "Daily") {
        daysForecastContainer.style.display = "flex";
    } else {
        hoursForecastContainer.style.display = "flex";
    }
}

function createDayCard(day: Forecastday) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const card = document.createElement("div");
    card.classList.add("forecast__card-days");

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
function populateDaysForecast(forecast: Forecast) {
    const daysForecast = document.querySelector(".forecast__days") as HTMLDivElement;
    // Clear before repopulating
    daysForecast.textContent = "";
    const tomorrow = createDayCard(forecast.forecastday[1]);
    const afterTomorrow = createDayCard(forecast.forecastday[2]);

    daysForecast.append(tomorrow, afterTomorrow);
}

function createHourCard(hour: Hour) {
    const hourCard = document.createElement("div");
    hourCard.classList.add("forecast__card-hours");

    const hourValue = document.createElement("p");
    hourValue.classList.add("hour");
    // time property format : YYY-MM-DD HH:MM
    hourValue.textContent = hour.time.split(" ")[1];

    const conditionIcon = new Image();
    conditionIcon.classList.add("condition-icon");
    if (hour.is_day) {
        conditionIcon.src = WEATHER_ICONS.day[hour.condition.text];
    } else {
        conditionIcon.src = WEATHER_ICONS.night[hour.condition.text];
    }

    const temperature = document.createElement("p");
    temperature.classList.add("temperature");
    temperature.textContent = `${hour.temp_c}°C`;

    hourCard.append(hourValue, conditionIcon, temperature);

    return hourCard;
}

function populateHoursForecast(forecast: Forecast) {
    


}

dailyPicker.addEventListener("click", toggleForecastType);
hourlyPicker.addEventListener("click", toggleForecastType);
