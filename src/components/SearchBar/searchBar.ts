import {
    displayErrorMessage,
    fadeIn,
    fadeOut,
    removeErrorMessage,
    sanitizeInputString,
} from "../../ts/helperFunctions";
import { renderPage } from "../../main";
import { getWeatherData } from "../../ts/weatherApiFunctions";

const locationForm = document.querySelector(".search") as HTMLFormElement;
const locationInput = document.querySelector(".search__input") as HTMLInputElement;

function checkErrorPatterMissmatch() {
    locationInput.validity.patternMismatch
        ? locationInput.setCustomValidity("Use only words")
        : locationInput.setCustomValidity("");
}

function handleFormSubmit(submitEvent: SubmitEvent): void {
    submitEvent.preventDefault();
    const sanitizedString = sanitizeInputString(locationInput.value);
    fadeOut();

    getWeatherData(sanitizedString)
        .then((data) => {
            removeErrorMessage();
            renderPage(data).then(() => fadeIn());
            locationInput.value = "";
        })
        .catch((err) => {
            console.error(err);
            displayErrorMessage(err);
            fadeIn();
        });
}

export function innitLocationSearch(): void {
    locationInput.addEventListener("input", checkErrorPatterMissmatch);
    locationForm.addEventListener("submit", handleFormSubmit);
}
