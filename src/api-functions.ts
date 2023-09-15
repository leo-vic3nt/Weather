const KEY = "fdc857fd0eaa40b6a1925541230509";

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
    const data = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${KEY}&days=3&q=${location}`
    );
    return await data.json();
}

function userLocationPromise(): Promise<GeolocationPosition | GeolocationPositionError> {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, { enableHighAccuracy: true });
    });
}

export async function onLoadWeatherQuery(): Promise<WeatherData> {
    try {
        const userLocation = await userLocationPromise();

        if (userLocation instanceof GeolocationPositionError) {
            throw new Error();
        }

        return await getWeatherData(
            `${userLocation.coords.latitude},${userLocation.coords.longitude}`
        );
    } catch (error) {
        return await getWeatherData("auto:ip");
    }
}
