import { BACKGROUND_IMGS } from "./imagesMapping";
import { WeatherData } from "./weatherApiInterfaces";

export {
    requestGeolocation,
    sleep,
    sanitizeInputString,
    renderBackgroundImage,
    removeLoading,
    fadeOut,
    fadeIn,
    displayErrorPage,
    displayErrorMessage,
    removeErrorMessage,
};

function requestGeolocation(): Promise<GeolocationPosition | GeolocationPositionError> {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, { enableHighAccuracy: true });
    });
}

function sleep(delay: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}

function sanitizeInputString(string: string): string {
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

function loadBackgroundImage(apiResponse: WeatherData): Promise<HTMLImageElement> {
    return new Promise((resolve) => {
        const isDay = apiResponse.current.is_day;
        const currentCondition = apiResponse.current.condition.text;
        // apiResponse localtime format "YYYY-MM-DD HH:MM"
        const currentTimeHours = Number(apiResponse.location.localtime.split(" ")[1].split(":")[0]);
        // Adding 12 to convert it to 24 hours format to match currentTime format
        const sunriseTime = Number(apiResponse.forecast.forecastday[0].astro.sunrise.split(":")[0]);
        const sunsetTime = Number(apiResponse.forecast.forecastday[0].astro.sunset.split(":")[0]) + 12;

        const img = new Image();

        img.onload = function () {
            resolve(img);
        };

        if (isDay) {
            if (currentTimeHours === sunriseTime) {
                img.src = BACKGROUND_IMGS.sunrise;
            } else if (currentTimeHours === sunsetTime) {
                img.src = BACKGROUND_IMGS.sunset;
            } else {
                img.src = BACKGROUND_IMGS.day[currentCondition];
            }
        } else {
            img.src = BACKGROUND_IMGS.night[currentCondition];
        }
    });
}

async function renderBackgroundImage(apiResponse: WeatherData): Promise<void> {
    const backgroundImg = await loadBackgroundImage(apiResponse);
    const body = document.querySelector("body") as HTMLElement;
    // greadientFilter creates a black tint over the background image for better readability
    const gradientFilter = "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))";

    body.style.backgroundImage = `${gradientFilter},url(${backgroundImg.src})`;
}

// This feels like a hack. Implement 1s delay for better experience
function removeLoading(): void {
    const loading = document.getElementById("loading") as HTMLDivElement;
    setTimeout(() => {
        loading.style.opacity = "0";
        setTimeout(() => {
            loading.style.display = "none";
        }, 1000);
    }, 1000);
}

function fadeOut(): void {
    const main = document.querySelector("main") as HTMLElement;
    main.classList.add("fade-out");
}

function fadeIn(): void {
    const main = document.querySelector("main") as HTMLElement;
    main.classList.remove("fade-out");
}

function displayErrorPage(): void {
    const errorPage = document.getElementById("error-page") as HTMLDivElement;
    errorPage.style.display = "flex";
}

function displayErrorMessage(error: Error): void {
    const errorMessage = document.querySelector(".error-message") as HTMLDivElement;
    errorMessage.textContent = error.message;
}

function removeErrorMessage(): void {
    const errorMessage = document.querySelector(".error-message") as HTMLDivElement;
    errorMessage.textContent = "";
}
