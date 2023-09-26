import { sanitizeInputString } from "../../helperFunctions";
import { getWeatherData } from "../../weatherApiFunctions";

const locationForm = document.querySelector(".search") as HTMLFormElement;
const locationInput = document.querySelector(".search__input") as HTMLInputElement;
// const errorMessage = document.querySelector(".search__error") as HTMLDivElement;




/* TODO
Implement function to toggle the error message on the display
Don't allow the message error on the input in the case of patternMissmatch but allow others
*/
function handleFormSubmit(submitEvent: SubmitEvent): void {
    submitEvent.preventDefault();

    // if (locationInput.validity.patternMismatch) {
    //     locationInput.setCustomValidity("");
    //     toggleErrorMessage();
    //     return;
    // } else {
    //     toggleErrorMessage();
    // }

    const sanitizedString = sanitizeInputString(locationInput.value);
    getWeatherData(sanitizedString)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
}

export function innitLocationSearch(): void {
    locationForm.addEventListener("submit", handleFormSubmit);
}
