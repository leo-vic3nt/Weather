import { displayDateTime } from "./components/CurrentDate/currentDate";
import { renderHeroCard } from "./components/HeroCard/heroCard";
import { innitLocationSearch } from "./components/SearchBar/searchBar";
import { renderBackgroundImage, removeLoading } from "./helperFunctions";
import { getWeatherByGeolocation, getWeatherByIp, getWeatherData } from "./weatherApiFunctions";

innitLocationSearch();

getWeatherData("Iguatu")
    .then((res) => {
        renderHeroCard(res);
        renderBackgroundImage(res);
        displayDateTime(res);
        removeLoading();
    })

