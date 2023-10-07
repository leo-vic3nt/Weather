import { renderBackgroundImage, sanitizeInputString } from "../../helperFunctions";
import { getWeatherData } from "../../weatherApiFunctions";
import { displayDateTime } from "../CurrentDate/currentDate";
import { renderHeroCard } from "../HeroCard/heroCard";

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
    getWeatherData(sanitizedString).then((data) => {
        renderHeroCard(data);
        renderBackgroundImage(data);
        displayDateTime(data);
    });
}

export function innitLocationSearch(): void {
    locationInput.addEventListener("input", checkErrorPatterMissmatch);
    locationForm.addEventListener("submit", handleFormSubmit);
}
