import { getFormattedDate, getFormattedTime } from "../../helperFunctions";
const dateElement = document.querySelector(".date__formatted") as HTMLDivElement;
const timeElement = document.querySelector(".date__time") as HTMLDivElement;

function renderDate(): void {
    dateElement.textContent = getFormattedDate();
}

function renderTime(): void {
    timeElement.textContent = getFormattedTime();
}

export function displayDateTime(): void {
    renderDate();
    renderTime();

    setInterval(renderTime, 1000);
}
