const KEY = "fdc857fd0eaa40b6a1925541230509";

export async function getWeatherData(location: string) {
    const data = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${location}`
    );
    return await data.json();
}
