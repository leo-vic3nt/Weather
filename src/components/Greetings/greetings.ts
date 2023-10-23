import { currentDay } from "../../main";
import { WeatherData } from "../../ts/weatherApiInterfaces";

export { renderGreetings, renderCurentDay };

function renderGreetings(weatherData: WeatherData) {
    const title = document.querySelector(".greetings__title") as HTMLHeadingElement;
    const locationElement = document.querySelector(".greetings__location") as HTMLSpanElement;
    const locationName = weatherData.location.name;
    const countryName = weatherData.location.country;

    locationElement.textContent = ` at ${locationName}, ${countryName}`;
    renderCurentDay(currentDay);

    // Remove some unecessary verbosity from api response
    const currentCondition = weatherData.current.condition.text
        .replace(/(Patchy|Possible|at times|Moderate or heavy)/gi, "")
        .trim();

    title.textContent = currentCondition;
}

function renderCurentDay(day: number) {
    const possibleDays = ["Today", "Tomorrow", "After Tomorrow"];
    const currentDayElement = document.querySelector(".greetings__current-day") as HTMLSpanElement;
    currentDayElement.textContent = possibleDays[day];
}
