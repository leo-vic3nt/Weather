import { displayDateTime } from "./components/CurrentDate/currentDate";
import { renderGreetings } from "./components/Greetings/greetings";
import { renderHeroSection } from "./components/HeroSection/heroSection";
import { innitLocationSearch as innitSearch } from "./components/SearchBar/searchBar";
import { renderBackgroundImage, removeLoading, displayErrorPage } from "./ts/helperFunctions";
import { getWeatherByGeolocation, getWeatherByIp, getWeatherData } from "./ts/weatherApiFunctions";
import { WeatherData } from "./ts/weatherApiInterfaces";

export let currentWeatherData: WeatherData;

innitSearch();

// Exported to be used on the search event listener
export async function renderPage(data: WeatherData): Promise<void> {
    await renderBackgroundImage(data);
    await renderHeroSection(data);
    renderGreetings(data);
    displayDateTime(data);
    removeLoading();
}

// TODO Handle error from getWeatherData call
getWeatherByIp()
    .then((data) => {
        currentWeatherData = data;
        renderPage(data);
    })
    .catch((err) => {
        console.error(err);
        getWeatherData("Fortaleza")
            .then((data) => {
                currentWeatherData = data;
                renderPage(data);
            })
            .catch((err) => {
                console.error(err);
                removeLoading();
                displayErrorPage();
            });
    });

getWeatherByGeolocation()
    .then((data) => {
        currentWeatherData = data;
        renderPage(data);
    })
    .catch((err) => console.error(err));
