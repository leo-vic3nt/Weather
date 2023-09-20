import { ApiInternalError, GenericError, LocationNotFound } from "./errors";

const KEY = "fdc857fd0eaa40b6a1925541230509";
const apiURL = "http://api.weatherapi.com/v1/current.json";

interface ApiError {
    error: {
        code: number;
        message: string;
    };
}

interface Location {
    name: string;
    region: string;
    country: string;
    tz_id: string;
    localtime: string;
}

interface Current {
    temp_c: number;
    feelslike_c: number;
    is_day: number;
    condition: {
        text: string;
    };
    wind_kph: number;
    wind_dir: string;
    humidity: number;
    cloud: number;
    uv: number;
}

interface Day {
    maxtemp_c: number;
    mintemp_c: number;
    avgtemp_c: number;
    maxwind_kph: number;
    totalprecip_mm: number;
    avghumidity: number;
    daily_will_it_rain: number;
    daily_will_it_snow: number;
    daily_chance_of_snow: number;
    daily_chance_of_rain: number;
    uv: number;
    condition: {
        text: string;
    };
}

interface Hour {
    time: string;
    temp_c: number;
    condition: {
        text: string;
    };
    wind_kph: number;
    wind_dir: string;
    precip_mm: number;
    humidity: number;
    feelslike_c: number;
    chance_of_rain: number;
    chance_of_snow: number;
    gust_kph: number;
}

interface Forecastday {
    date: string;
    day: Day;
    hour: Hour[];
}

interface Forecast {
    forecastday: Forecastday[];
}

interface WeatherData {
    location: Location;
    current: Current;
    forecast: Forecast;
}

export async function getWeatherData(location: string): Promise<WeatherData> {
    const wait = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay));

    let nrOfTries = 0;
    while (nrOfTries < 3) {
        nrOfTries++;
        try {
            const request = await fetch(`${apiURL}?key=${KEY}&days=3&q=${location}`);

            if (request.ok) {
                const sucessJson: WeatherData = await request.json();
                return sucessJson;
            }

            const errorJson: ApiError = await request.json();
            if (errorJson.error.code === 1006) throw new LocationNotFound(location);
            if (errorJson.error.code === 9999) throw new ApiInternalError();
            throw new GenericError();
        } catch (error) {
            if (error instanceof LocationNotFound || error instanceof ApiInternalError) throw error;
            await wait(1000);
        }
    }

    throw new GenericError();
}

export function requestGeolocation(): Promise<GeolocationPosition | GeolocationPositionError> {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, { enableHighAccuracy: true });
    });
}
export async function onLoadWeatherQuery(): Promise<WeatherData> {
    return await getWeatherData("auto:ip");
}
