import { displayDateTime } from "./components/CurrentDate/currentDate";
import { renderGreetings } from "./components/Greetings/greetings";
import { renderHeroSection } from "./components/HeroSection/heroSection";
import { innitLocationSearch as innitSearch } from "./components/SearchBar/searchBar";
import { renderBackgroundImage, removeLoading } from "./helperFunctions";
import { getWeatherByGeolocation, getWeatherByIp, getWeatherData } from "./weatherApiFunctions";
import { WeatherData } from "./weatherApiInterfaces";

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
        getWeatherData("Fortaleza").then((data) => {
            currentWeatherData = data;
            renderPage(data);
        });
    });

getWeatherByGeolocation()
    .then((data) => {
        currentWeatherData = data;
        renderPage(data);
    })
    .catch((err) => console.error(err));
