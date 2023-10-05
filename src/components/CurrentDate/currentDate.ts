import { WeatherData } from "../../weatherApiInterfaces";

const dateElement = document.querySelector(".date__formatted") as HTMLDivElement;
const timeElement = document.querySelector(".date__time") as HTMLDivElement;

function getDateFromTargetLocation(apiResponse: WeatherData): string {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

    // Api response localtime property format: "YYYY-MM-DD HH:MM"
    const dateResponse = apiResponse.location.localtime;
    const currentDate = new Date(dateResponse);
    const dayNr = currentDate.getDate();
    const day = days[currentDate.getDay()];
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    return `${day}, ${dayNr} ${month} ${year}`;
}

function getTimeFromTargetLocation(apiResponse: WeatherData): string {
    const dateResponse = apiResponse.location.localtime;
    const currentDate = new Date(dateResponse);
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();

    const hoursFormatted = hours < 10 ? `0${hours}` : hours;
    const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes;

    return `${hoursFormatted} : ${minutesFormatted}`;
}


function renderDate(date: string): void {
    dateElement.textContent = date;
}

function renderTime(time: string): void {
    timeElement.textContent = time;
}

export function displayDateTime(apiResponse: WeatherData): void {
    const formattedDate = getDateFromTargetLocation(apiResponse);
    const formattedTime = getTimeFromTargetLocation(apiResponse);

    renderDate(formattedDate);
    renderTime(formattedTime);
}
