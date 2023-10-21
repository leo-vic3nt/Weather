import { WeatherData } from "../../ts/weatherApiInterfaces";

export { displayDateTime };

function getLocalTimeDateObj(apiResponse: WeatherData): Date {
    // Api response localtime property format: "YYYY-MM-DD HH:MM"
    const dateResponse = apiResponse.location.localtime;
    return new Date(dateResponse);
}

function formatDate(date: Date): string {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

    const dayNr = date.getDate();
    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day}, ${dayNr} ${month} ${year}`;
}

function formatTime(date: Date): string {
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const hoursFormatted = hours < 10 ? `0${hours}` : hours;
    const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes;

    return `${hoursFormatted} : ${minutesFormatted}`;
}

function renderDate(date: string): void {
    const dateElement = document.querySelector(".date__formatted") as HTMLDivElement;
    dateElement.textContent = date;
}

function renderTime(time: string): void {
    const timeElement = document.querySelector(".date__time") as HTMLDivElement;
    timeElement.textContent = time;
}

function displayDateTime(apiResponse: WeatherData): void {
    const date = getLocalTimeDateObj(apiResponse);

    renderDate(formatDate(date));
    renderTime(formatTime(date));
}
