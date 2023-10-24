import { currentWeatherData } from "../../main";
import { dayController } from "../../ts/currentDayController";
import { stringToDateObject } from "../../ts/helperFunctions";
import { renderTime } from "../CurrentDate/currentDate";
import { renderCurentDay } from "../Greetings/greetings";

const leftArrow = document.querySelector(".day-picker__left");
const rightArrow = document.querySelector(".day-picker__right");

function renderNextDay() {
    dayController.incrementDay();

    const currentDay = dayController.getCurrentDay();
    const currentTime = stringToDateObject(currentWeatherData.location.localtime);
    const dayForecast = currentWeatherData.forecast.forecastday[currentDay];
    const forecastCurrentHour = dayForecast.hour[currentTime.getHours()];

    renderCurentDay(currentDay);
    
}
