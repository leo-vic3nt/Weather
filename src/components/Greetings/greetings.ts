import { WeatherData } from "../../ts/weatherApiInterfaces";

export { renderGreetings };

function renderGreetings(weatherData: WeatherData) {
    const title = document.querySelector(".greetings__title") as HTMLHeadingElement;
    const locationElement = document.querySelector(".greetings__location") as HTMLSpanElement;
    const locationName = weatherData.location.name;

    locationElement.textContent = ` in ${locationName}`;

    // Remove some unecessary verbosity from api response
    const currentCondition = weatherData.current.condition.text
        .replace(/(Patchy|Possible|at times|Moderate or heavy)/gi, "")
        .trim();

    title.textContent = currentCondition;
}
