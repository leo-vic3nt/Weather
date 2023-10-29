import {
    displayErrorMessage,
    fadeIn,
    fadeOut,
    removeErrorMessage,
    sanitizeInputString,
} from "../../ts/helperFunctions";
import { renderPage } from "../../main";
import { getWeatherData } from "../../ts/weatherApiFunctions";
import { populateDaysForecast } from "../Forecast/forecast";

const locationForm = document.querySelector(".search") as HTMLFormElement;
const locationInput = document.querySelector(".search__input") as HTMLInputElement;
const daysForecast = document.querySelector(".forecast__days") as HTMLDivElement;

function checkErrorPatterMissmatch() {
    locationInput.validity.patternMismatch
        ? locationInput.setCustomValidity("Use only words")
        : locationInput.setCustomValidity("");
}

function handleFormSubmit(submitEvent: SubmitEvent): void {
    submitEvent.preventDefault();
    const sanitizedString = sanitizeInputString(locationInput.value);

    getWeatherData(sanitizedString)
        .then((data) => {
            fadeOut();
            removeErrorMessage();
           
            populateDaysForecast(data.forecast);
            renderPage(data).then(() => fadeIn());
            locationInput.value = "";
        })
        .catch((err) => {
            console.error(err);
            displayErrorMessage(err);
        });
}

export function innitLocationSearch(): void {
    locationInput.addEventListener("input", checkErrorPatterMissmatch);
    locationForm.addEventListener("submit", handleFormSubmit);
}
