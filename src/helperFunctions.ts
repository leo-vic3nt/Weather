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

export function renderBackgroundImage(apiResponse: WeatherData): void {
    const body = document.querySelector("body") as HTMLElement;
    const isDay = apiResponse.current.is_day;
    const currentCondition = apiResponse.current.condition.text;
    // greadientFilter creates a black tint over the background image for better readability
    const gradientFilter = "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))";

    // apiResponse localtime format "YYYY-MM-DD HH:MM"
    const currentTimeHours = Number(apiResponse.location.localtime.split(" ")[1].split(":")[0]);
    // Adding 12 to convert it to 24 hours format to match currentTime format
    const sunriseTime = Number(apiResponse.forecast.forecastday[0].astro.sunrise.split(":")[0]);
    const sunsetTime = Number(apiResponse.forecast.forecastday[0].astro.sunset.split(":")[0]) + 12;

    const img = new Image();

    // Checking equality for the same hour
    if (currentTimeHours === sunriseTime) {
        img.src = BACKGROUND_IMGS.sunrise;
    }
    if (currentTimeHours === sunsetTime) {
        img.src = BACKGROUND_IMGS.sunset;
    }

    if (isDay) {
        img.src = BACKGROUND_IMGS.day[currentCondition];
    } else {
        img.src = BACKGROUND_IMGS.night[currentCondition];
    }

    img.onload = function () {
        body.style.backgroundImage = `${gradientFilter},url(${img.src})`;
    };
}

export function toggleLoading() {
    const loading = document.getElementById("loading") as HTMLDivElement;
    const styles = getComputedStyle(loading);
    const display = styles.getPropertyValue("display");

    if (display === "flex") {
        loading.style.display = "none";
    } else {
        loading.style.display = "flex";
    }
}
