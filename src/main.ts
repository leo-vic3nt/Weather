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

getWeatherByGeolocation()
    .then((res) => renderPage(res))
    .catch((err) => {
        console.error(err);
        getWeatherByIp()
            .then((res) => renderPage(res))
            .catch(() => getWeatherData("Fortaleza"));
    });
