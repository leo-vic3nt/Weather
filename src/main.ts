import { displayDateTime } from "./components/CurrentDate/currentDate";
import { renderHeroCard } from "./components/HeroCard/heroCard";
import { innitLocationSearch } from "./components/SearchBar/searchBar";
import { getWeatherByGeolocation, getWeatherByIp, getWeatherData } from "./weatherApiFunctions";

displayDateTime();
innitLocationSearch();

getWeatherData("São Paulo").then((res) => renderHeroCard(res));
