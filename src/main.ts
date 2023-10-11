import { displayDateTime } from "./components/CurrentDate/currentDate";
import { renderHeroCard } from "./components/HeroCard/heroCard";
import { innitLocationSearch } from "./components/SearchBar/searchBar";
import { renderBackgroundImage, removeLoading } from "./helperFunctions";
import { getWeatherByGeolocation, getWeatherByIp, getWeatherData } from "./weatherApiFunctions";
import { WeatherData } from "./weatherApiInterfaces";

innitLocationSearch();

// Exported to be used on the search event listener
export function renderPage(data: WeatherData): void {
    renderBackgroundImage(data).then(() => {
        renderHeroCard(data).then(() => {
            displayDateTime(data);
            removeLoading();
        });
    });
}

// TODO Handle error from getWeatherData call
getWeatherByIp()
    .then((data) => renderPage(data))
    .catch((err) => {
        console.error(err);
        getWeatherData("Fortaleza").then((data) => renderPage(data));
    });

getWeatherByGeolocation()
    .then((data) => renderPage(data))
    .catch((err) => console.error(err));
