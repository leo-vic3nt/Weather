import { getWeatherData } from "./api-functions";

export function innitQueryBtn(): void {
    const form = document.getElementById(
        "location-query-form"
    ) as HTMLFormElement;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
    });
}
