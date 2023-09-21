import { WeatherData, ApiError } from "./weatherApiInterfaces";
import { ApiInternalError, GenericError, LocationNotFound } from "./errorFunctions";
import { sleep } from "./helperFunctions";

const KEY = "fdc857fd0eaa40b6a1925541230509";
const API_URL = "http://api.weatherapi.com/v1/forecast.json";

export async function getWeatherData(location: string): Promise<WeatherData> {
    const MAX_TRIES = 3;
    for (let i = 0; i < MAX_TRIES; i++) {
        try {
            const request = await fetch(`${API_URL}?key=${KEY}&days=3&q=${location}`);

            if (request.ok) {
                const sucessJson: WeatherData = await request.json();
                return sucessJson;
            }

            const errorJson: ApiError = await request.json();
            switch (errorJson.error.code) {
                case 1006:
                    throw new LocationNotFound(location);
                case 9999:
                    throw new ApiInternalError();
                default:
                    throw new GenericError();
            }
        } catch (error) {
            if (error instanceof LocationNotFound || error instanceof ApiInternalError) {
                throw error;
            }
            await sleep(1000);
        }
    }

    throw new GenericError();
}

export async function firstLoadWeatherQuery(): Promise<WeatherData> {
    return await getWeatherData("auto:ip");
}