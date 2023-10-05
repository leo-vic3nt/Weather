import { getDateFromTargetLocation, getTimeFromTargetLocation } from "../../helperFunctions";
import { WeatherData } from "../../weatherApiInterfaces";
const dateElement = document.querySelector(".date__formatted") as HTMLDivElement;
const timeElement = document.querySelector(".date__time") as HTMLDivElement;

function renderDate(apiResponse: WeatherData): void {
    dateElement.textContent = getDateFromTargetLocation(apiResponse);
}

function renderTime(apiResponse: WeatherData): void {
    timeElement.textContent = getTimeFromTargetLocation(apiResponse);
}

export function displayDateTime(apiResponse: WeatherData): void {
    renderDate(apiResponse);
    renderTime(apiResponse);
}
