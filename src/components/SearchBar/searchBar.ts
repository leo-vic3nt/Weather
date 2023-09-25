import { sanitizeInputString } from "../../helperFunctions";
import { getWeatherData } from "../../weatherApiFunctions";
const locationForm = document.querySelector(".search") as HTMLFormElement;
const locationInput = document.querySelector(".search__input") as HTMLInputElement;

function handleFormSubmit(submitEvent: SubmitEvent): void {
    submitEvent.preventDefault();
    const sanitizedString = sanitizeInputString(locationInput.value);
    getWeatherData(sanitizedString).then((res) => console.log(res));
}

export function innitLocationSearch(): void {
    locationForm.addEventListener("submit", handleFormSubmit);
}
