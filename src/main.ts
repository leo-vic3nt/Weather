import { displayDateTime } from "./components/CurrentDate/currentDate";
import { renderHeroCard } from "./components/HeroCard/heroCard";
import { innitLocationSearch } from "./components/SearchBar/searchBar";
import { getWeatherByIp } from "./weatherApiFunctions";

displayDateTime();
innitLocationSearch();

getWeatherByIp().then(data => renderHeroCard(data))