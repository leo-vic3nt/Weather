import { WeatherData } from "../../weatherApiInterfaces";
import { BACKGROUND_IMGS } from "../../imagesMapping";

export function renderBackgroundImages(weatherData: WeatherData): void {
    const heroSectionElement = document.getElementById("heroSection") as HTMLDivElement;

    const isDay = weatherData.current.is_day;
    const currentCondition = weatherData.current.condition.text;
    const gradientFilter = "linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))";

    if (isDay) {
        heroSectionElement.style.backgroundImage = `${gradientFilter},url(${BACKGROUND_IMGS.day[currentCondition]})`;
    } else {
        heroSectionElement.style.backgroundImage = `${gradientFilter},url(${BACKGROUND_IMGS.night[currentCondition]})`;
    }
}
