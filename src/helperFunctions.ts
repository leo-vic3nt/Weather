import { BACKGROUND_IMGS } from "./imagesMapping";
import { WeatherData } from "./weatherApiInterfaces";

export function requestGeolocation(): Promise<GeolocationPosition | GeolocationPositionError> {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, { enableHighAccuracy: true });
    });
}

export function sleep(delay: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}

export function getFormattedDate(): string {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

    const currentDate = new Date();
    const day = days[currentDate.getDay()];
    const dayNr = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    return `${day}, ${dayNr} ${month} ${year}`;
}

export function getFormattedTime(): string {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();

    const hoursFormatted = hours < 10 ? `0${hours}` : hours;
    const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes;

    return `${hoursFormatted} : ${minutesFormatted}`;
}

export function sanitizeInputString(string: string): string {
    // Normalize the Unicode format
    const normalizedString = string.normalize("NFD");
    /*
    Replace accented characters with their normal counterparts
    Also remove any whitespace or punctuation
    */
    const sanitizedString = normalizedString
        .replace(/[\u0300-\u036f\d`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi, "")
        .trim();

    return sanitizedString;
}

export function renderBackgroundImage(weatherData: WeatherData): void {
    const mainSection = document.querySelector("main") as HTMLElement;
    const isDay = weatherData.current.is_day;
    const currentCondition = weatherData.current.condition.text;
    const gradientFilter = "linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))";

    if (isDay) {
        mainSection.style.backgroundImage = `${gradientFilter},url(${BACKGROUND_IMGS.day[currentCondition]})`;
    } else {
        mainSection.style.backgroundImage = `${gradientFilter},url(${BACKGROUND_IMGS.night[currentCondition]})`;
    }
}
