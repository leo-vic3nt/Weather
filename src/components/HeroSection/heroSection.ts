import { WeatherData } from "../../weatherApiInterfaces";
import { BACKGROUND_IMGS } from "../../imagesMapping";

export function renderBackgroundImages(weatherData: WeatherData): void {
    const bodyElement = document.querySelector("body") as HTMLBodyElement;
    const heroSectionElement = document.getElementById("heroSection") as HTMLDivElement;

    const isDay = weatherData.current.is_day;
    const currentCondition = weatherData.current.condition.text;

    if (isDay) {
        bodyElement.style.backgroundImage = `url(${BACKGROUND_IMGS.day[currentCondition]})`;
        heroSectionElement.style.backgroundImage = `url(${BACKGROUND_IMGS.day[currentCondition]})`;
    } else {
        bodyElement.style.backgroundImage = `url(${BACKGROUND_IMGS.night[currentCondition]})`;
        heroSectionElement.style.backgroundImage = `url(${BACKGROUND_IMGS.night[currentCondition]})`;
    }
}
