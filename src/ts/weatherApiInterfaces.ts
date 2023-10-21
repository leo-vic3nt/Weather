export type { WeatherData, ApiError };

interface Location {
    name: string;
    region: string;
    country: string;
    tz_id: string;
    localtime: string;
    localtime_epoch: number;
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

interface Astro {
    sunrise: string;
    sunset: string;
}

interface Forecastday {
    date: string;
    day: Day;
    hour: Hour[];
    astro: Astro;
}

interface Forecast {
    forecastday: Forecastday[];
}

interface WeatherData {
    location: Location;
    current: Current;
    forecast: Forecast;
}

interface ApiError {
    error: {
        code: number;
        message: string;
    };
}
