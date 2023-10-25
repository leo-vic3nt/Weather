import { WeatherData } from "../../ts/weatherApiInterfaces";

export function renderGreetings(weatherData: WeatherData) {
    const subtitle = document.querySelector(".greetings__subtitle") as HTMLHeadingElement;
    const title = document.querySelector(".greetings__title") as HTMLHeadingElement;

    const locationName = weatherData.location.name;
    const country = weatherData.location.country;
    subtitle.textContent = `Today in ${locationName}, ${country}`;

    // Remove some unecessary verbosity from api response
    const currentCondition = weatherData.current.condition.text
        .replace(/(Patchy|Possible|at times|Moderate or heavy)/gi, "")
        .trim();

    title.textContent = currentCondition;
}
