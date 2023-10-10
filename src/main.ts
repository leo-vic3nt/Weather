import { displayDateTime } from "./components/CurrentDate/currentDate";
import { renderHeroCard } from "./components/HeroCard/heroCard";
import { innitLocationSearch } from "./components/SearchBar/searchBar";
import { renderBackgroundImage, removeLoading } from "./helperFunctions";
import { getWeatherByGeolocation, getWeatherByIp, getWeatherData } from "./weatherApiFunctions";
import { WeatherData } from "./weatherApiInterfaces";

innitLocationSearch();

function renderPage(data: WeatherData): void {
    renderHeroCard(data);
    renderBackgroundImage(data);
    displayDateTime(data);
    removeLoading();
}

getWeatherByGeolocation()
    .then((res) => renderPage(res))
    .catch((err) => {
        console.error(err);
        getWeatherByIp()
            .then((res) => renderPage(res))
            .catch(() => getWeatherData("Fortaleza"));
    });
