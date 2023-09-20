import { WeatherData, ApiError } from "./weather-api.interface";
import { ApiInternalError, GenericError, LocationNotFound } from "./errors";

export class WeatherApi {
    #KEY = "fdc857fd0eaa40b6a1925541230509";
    #API_URL = "http://api.weatherapi.com/v1/current.json";

    #wait = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay));

    async getWeatherData(location: string): Promise<WeatherData> {
        const MAX_TRIES = 3;
        for (let i = 0; i < MAX_TRIES; i++) {
            try {
                const request = await fetch(`${this.#API_URL}?key=${this.#KEY}&days=3&q=${location}`);

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
                await this.#wait(1000);
            }
        }

        throw new GenericError();
    }

    requestGeolocation(): Promise<GeolocationPosition | GeolocationPositionError> {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, { enableHighAccuracy: true });
        });
    }

    async onLoadWeatherQuery(): Promise<WeatherData> {
        return await this.getWeatherData("auto:ip");
    }
}
