import { fadeIn, fadeOut, sanitizeInputString } from "../../ts/helperFunctions";
import { renderPage } from "../../main";
import { getWeatherData } from "../../ts/weatherApiFunctions";

export { innitLocationSearch };

const locationForm = document.querySelector(".search") as HTMLFormElement;
const locationInput = document.querySelector(".search__input") as HTMLInputElement;

function checkErrorPatterMissmatch() {
    locationInput.validity.patternMismatch
        ? locationInput.setCustomValidity("Use only words")
        : locationInput.setCustomValidity("");
}

function handleFormSubmit(submitEvent: SubmitEvent): void {
    submitEvent.preventDefault();
    fadeOut();
    const sanitizedString = sanitizeInputString(locationInput.value);

    getWeatherData(sanitizedString).then((data) => {
        renderPage(data).then(() => fadeIn());
    });

    locationInput.value = "";
}

function innitLocationSearch(): void {
    locationInput.addEventListener("input", checkErrorPatterMissmatch);
    locationForm.addEventListener("submit", handleFormSubmit);
}
