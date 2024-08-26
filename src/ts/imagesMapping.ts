/*
//* The purpose of this file is to create a mapping of the possible api weather condition
//* response to the respective background/icon
*/

interface WeatherIconsInterface {
  day: { [key: string]: string };
  night: { [key: string]: string };
}

interface BackgroundImagesInterface {
  sunrise: string;
  sunset: string;
  day: { [key: string]: string };
  night: { [key: string]: string };
}

export const WEATHER_ICONS: WeatherIconsInterface = {
  day: {
    Sunny: "/icons/Weather-Icons/day/sunny.svg",
    "Partly Cloudy": "/icons/Weather-Icons/day/partly-cloudy-day.svg",
    "Partly cloudy": "/icons/Weather-Icons/day/partly-cloudy-day.svg",
    Cloudy: "/icons/Weather-Icons/day/partly-cloudy-day.svg",
    Overcast: "/icons/Weather-Icons/overcast.svg",
    Mist: "/icons/Weather-Icons/day/mist.svg",
    "Patchy rain possible": "/icons/Weather-Icons/drizzle.svg",
    "Patchy rain nearby": "/icons/Weather-Icons/drizzle.svg",
    "Patchy snow possible": "/icons/Weather-Icons/snowing.svg",
    "Patchy sleet possible": "/icons/Weather-Icons/rain-with-snow.svg",
    "Patchy freezing drizzle possible": "/icons/Weather-Icons/rain-with-snow.svg",
    "Thundery outbreaks possible": "/icons/Weather-Icons/thunderstorm.svg",
    "Blowing snow": "/icons/Weather-Icons/snowing.svg",
    Blizzard: "/icons/Weather-Icons/blizzard.svg",
    Fog: "/icons/Weather-Icons/fog.svg",
    "Freezing fog": "/icons/Weather-Icons/fog.svg",
    "Patchy light drizzle": "/icons/Weather-Icons/rain-with-snow.svg",
    "Light drizzle": "/icons/Weather-Icons/drizzle.svg",
    "Freezing drizzle": "/icons/Weather-Icons/rain-with-snow.svg",
    "Heavy freezing drizzle": "/icons/Weather-Icons/rain-with-snow.svg",
    "Patchy light rain": "/icons/Weather-Icons/day/light-rain-day.svg",
    "Light rain": "/icons/Weather-Icons/day/light-rain-day.svg",
    "Moderate rain at times": "/icons/Weather-Icons/moderateORheavy-rain.svg",
    "Moderate rain": "/icons/Weather-Icons/moderateORheavy-rain.svg",
    "Heavy rain at times": "/icons/Weather-Icons/moderateORheavy-rain.svg",
    "Heavy rain": "/icons/Weather-Icons/moderateORheavy-rain.svg",
    "Light freezing rain": "/icons/Weather-Icons/rain-with-snow.svg",
    "Moderate or heavy freezing rain": "/icons/Weather-Icons/rain-with-snow.svg",
    "Light sleet": "/icons/Weather-Icons/rain-with-snow.svg",
    "Moderate or heavy sleet": "/icons/Weather-Icons/rain-with-snow.svg",
    "Patchy light snow": "/icons/Weather-Icons/snowing.svg",
    "Light snow": "/icons/Weather-Icons/snowing.svg",
    "Patchy moderate snow": "/icons/Weather-Icons/snowing.svg",
    "Moderate snow": "/icons/Weather-Icons/snowing.svg",
    "Patchy heavy snow": "/icons/Weather-Icons/blizzard.svg",
    "Heavy snow": "/icons/Weather-Icons/blizzard.svg",
    "Ice pellets": "/icons/Weather-Icons/ice-pellets.svg",
    "Light rain shower": "/icons/Weather-Icons/day/light-rain-day.svg",
    "Moderate or heavy rain shower": "/icons/Weather-Icons/moderateORheavy-rain.svg",
    "Torrential rain shower": "/icons/Weather-Icons/moderateORheavy-rain.svg",
    "Light sleet showers": "/icons/Weather-Icons/day/light-rain-day.svg",
    "Moderate or heavy sleet showers": "/icons/Weather-Icons/moderateORheavy-rain.svg",
    "Light snow showers": "/icons/Weather-Icons/snowing.svg",
    "Moderate or heavy snow showers": "/icons/Weather-Icons/snowing.svg",
    "Light showers of ice pellets": "/icons/Weather-Icons/ice-pellets.svg",
    "Moderate or heavy showers of ice pellets": "/icons/Weather-Icons/ice-pellets.svg",
    "Patchy light rain with thunder": "/icons/Weather-Icons/thunderstorm.svg",
    "Moderate or heavy rain with thunder": "/icons/Weather-Icons/thunderstorm.svg",
    "Patchy light snow with thunder": "/icons/Weather-Icons/snowing.svg",
    "Moderate or heavy snow with thunder": "/icons/Weather-Icons/snowing.svg",
  },

  night: {
    Clear: "/icons/Weather-Icons/night/clear.svg",
    "Partly Cloudy": "/icons/Weather-Icons/night/cloudy-night.svg",
    "Partly cloudy": "/icons/Weather-Icons/night/cloudy-night.svg",
    "Patchy rain nearby": "/icons/Weather-Icons/drizzle.svg",
    Cloudy: "/icons/Weather-Icons/night/cloudy-night.svg",
    Overcast: "/icons/Weather-Icons/overcast.svg",
    Mist: "/icons/Weather-Icons/night/night-mist.svg",
    "Patchy rain possible": "/icons/Weather-Icons/drizzle.svg",
    "Patchy snow possible": "/icons/Weather-Icons/snowing.svg",
    "Patchy sleet possible": "/icons/Weather-Icons/rain-with-snow.svg",
    "Patchy freezing drizzle possible": "/icons/Weather-Icons/rain-with-snow.svg",
    "Thundery outbreaks possible": "/icons/Weather-Icons/thunderstorm.svg",
    "Blowing snow": "/icons/Weather-Icons/snowing.svg",
    Blizzard: "/icons/Weather-Icons/blizzard.svg",
    Fog: "/icons/Weather-Icons/fog.svg",
    "Freezing fog": "/icons/Weather-Icons/fog.svg",
    "Patchy light drizzle": "/icons/Weather-Icons/rain-with-snow.svg",
    "Light drizzle": "/icons/Weather-Icons/drizzle.svg",
    "Freezing drizzle": "/icons/Weather-Icons/rain-with-snow.svg",
    "Heavy freezing drizzle": "/icons/Weather-Icons/rain-with-snow.svg",
    "Patchy light rain": "/icons/Weather-Icons/raining.svg",
    "Light rain": "/icons/Weather-Icons/raining.svg",
    "Moderate rain at times": "/icons/Weather-Icons/moderateORheavy-rain.svg",
    "Moderate rain": "/icons/Weather-Icons/moderateORheavy-rain.svg",
    "Heavy rain at times": "/icons/Weather-Icons/moderateORheavy-rain.svg",
    "Heavy rain": "/icons/Weather-Icons/moderateORheavy-rain.svg",
    "Light freezing rain": "/icons/Weather-Icons/rain-with-snow.svg",
    "Moderate or heavy freezing rain": "/icons/Weather-Icons/rain-with-snow.svg",
    "Light sleet": "/icons/Weather-Icons/rain-with-snow.svg",
    "Moderate or heavy sleet": "/icons/Weather-Icons/rain-with-snow.svg",
    "Patchy light snow": "/icons/Weather-Icons/snowing.svg",
    "Light snow": "/icons/Weather-Icons/snowing.svg",
    "Patchy moderate snow": "/icons/Weather-Icons/snowing.svg",
    "Moderate snow": "/icons/Weather-Icons/snowing.svg",
    "Patchy heavy snow": "/icons/Weather-Icons/blizzard.svg",
    "Heavy snow": "/icons/Weather-Icons/blizzard.svg",
    "Ice pellets": "/icons/Weather-Icons/ice-pellets.svg",
    "Light rain shower": "/icons/Weather-Icons/raining.svg",
    "Moderate or heavy rain shower": "/icons/Weather-Icons/moderateORheavy-rain.svg",
    "Torrential rain shower": "/icons/Weather-Icons/moderateORheavy-rain.svg",
    "Light sleet showers": "/icons/Weather-Icons/raining.svg",
    "Moderate or heavy sleet showers": "/icons/Weather-Icons/moderateORheavy-rain.svg",
    "Light snow showers": "/icons/Weather-Icons/snowing.svg",
    "Moderate or heavy snow showers": "/icons/Weather-Icons/snowing.svg",
    "Light showers of ice pellets": "/icons/Weather-Icons/ice-pellets.svg",
    "Moderate or heavy showers of ice pellets": "/icons/Weather-Icons/ice-pellets.svg",
    "Patchy light rain with thunder": "/icons/Weather-Icons/thunderstorm.svg",
    "Moderate or heavy rain with thunder": "/icons/Weather-Icons/thunderstorm.svg",
    "Patchy light snow with thunder": "/icons/Weather-Icons/snowing.svg",
    "Moderate or heavy snow with thunder": "/icons/Weather-Icons/snowing.svg",
  },
};

export const BACKGROUND_IMGS: BackgroundImagesInterface = {
  sunrise: "/images/HeroBackgrounds/sunrise.png",

  sunset: "/images/HeroBackgrounds/sunset.png",

  day: {
    Sunny: "/images/HeroBackgrounds/clear-day.png",
    "Partly cloudy": "/images/HeroBackgrounds/cloudy-day.png",
    Cloudy: "/images/HeroBackgrounds/cloudy-day.png",
    Overcast: "/images/HeroBackgrounds/overcast.png",
    Mist: "/images/HeroBackgrounds/fog-day.png",
    "Patchy rain possible": "/images/HeroBackgrounds/raining-day.png",
    "Patchy snow possible": "/images/HeroBackgrounds/snowing.jpg",
    "Patchy sleet possible": "/images/HeroBackgrounds/snowing.jpg",
    "Patchy freezing drizzle possible": "/images/HeroBackgrounds/snowing.jpg",
    "Thundery outbreaks possible": "/images/HeroBackgrounds/overcast.png",
    "Blowing snow": "/images/HeroBackgrounds/snowing.jpg",
    Blizzard: "/images/HeroBackgrounds/snowing.jpg",
    Fog: "/images/HeroBackgrounds/fog-day.png",
    "Freezing fog": "/images/HeroBackgrounds/fog-day.png",
    "Patchy light drizzle": "/images/HeroBackgrounds/raining-day.png",
    "Light drizzle": "/images/HeroBackgrounds/raining-day.png",
    "Freezing drizzle": "/images/HeroBackgrounds/raining-day.png",
    "Heavy freezing drizzle": "/images/HeroBackgrounds/raining-day.png",
    "Patchy light rain": "/images/HeroBackgrounds/raining-day.png",
    "Light rain": "/images/HeroBackgrounds/raining-day.png",
    "Moderate rain at times": "/images/HeroBackgrounds/raining-day.png",
    "Moderate rain": "/images/HeroBackgrounds/raining-day.png",
    "Heavy rain at times": "/images/HeroBackgrounds/raining-day.png",
    "Heavy rain": "/images/HeroBackgrounds/raining-day.png",
    "Light freezing rain": "/images/HeroBackgrounds/raining-day.png",
    "Moderate or heavy freezing rain": "/images/HeroBackgrounds/raining-day.png",
    "Light sleet": "/images/HeroBackgrounds/raining-day.png",
    "Moderate or heavy sleet": "/images/HeroBackgrounds/snowing.jpg",
    "Patchy light snow": "/images/HeroBackgrounds/snowing.jpg",
    "Light snow": "/images/HeroBackgrounds/snowing.jpg",
    "Patchy moderate snow": "/images/HeroBackgrounds/snowing.jpg",
    "Moderate snow": "/images/HeroBackgrounds/snowing.jpg",
    "Patchy heavy snow": "/images/HeroBackgrounds/snowing.jpg",
    "Heavy snow": "/images/HeroBackgrounds/snowing.jpg",
    "Ice pellets": "/images/HeroBackgrounds/raining-day.png",
    "Light rain shower": "/images/HeroBackgrounds/raining-day.png",
    "Moderate or heavy rain shower": "/images/HeroBackgrounds/heavy-rain.png",
    "Torrential rain shower": "/images/HeroBackgrounds/heavy-rain.png",
    "Light sleet showers": "/images/HeroBackgrounds/raining-day.png",
    "Moderate or heavy sleet showers": "/images/HeroBackgrounds/snowing.jpg",
    "Light snow showers": "/images/HeroBackgrounds/snowing.jpg",
    "Moderate or heavy snow showers": "/images/HeroBackgrounds/snowing.jpg",
    "Light showers of ice pellets": "/images/HeroBackgrounds/snowing.jpg",
    "Moderate or heavy showers of ice pellets": "/images/HeroBackgrounds/snowing.jpg",
    "Patchy light rain with thunder": "/images/HeroBackgrounds/heavy-rain.png",
    "Moderate or heavy rain with thunder": "/images/HeroBackgrounds/heavy-rain.png",
    "Patchy light snow with thunder": "/images/HeroBackgrounds/snowing.jpg",
    "Moderate or heavy snow with thunder": "/images/HeroBackgrounds/snowing.jpg",
  },

  night: {
    Clear: "/images/HeroBackgrounds/clear-night.png",
    "Partly cloudy": "/images/HeroBackgrounds/cloudy-night.png",
    Cloudy: "/images/HeroBackgrounds/cloudy-night.png",
    Overcast: "/images/HeroBackgrounds/overcast.png",
    Mist: "/images/HeroBackgrounds/mist-fog-night.png",
    "Patchy rain possible": "/images/HeroBackgrounds/heavy-rain.png",
    "Patchy snow possible": "/images/HeroBackgrounds/snowing.jpg",
    "Patchy sleet possible": "/images/HeroBackgrounds/snowing.jpg",
    "Patchy freezing drizzle possible": "/images/HeroBackgrounds/snowing.jpg",
    "Thundery outbreaks possible": "/images/HeroBackgrounds/overcast.png",
    "Blowing snow": "/images/HeroBackgrounds/snowing.jpg",
    Blizzard: "/images/HeroBackgrounds/snowing.jpg",
    Fog: "/images/HeroBackgrounds/mist-fog-night.png",
    "Freezing fog": "/images/HeroBackgrounds/mist-fog-night.png",
    "Patchy light drizzle": "/images/HeroBackgrounds/heavy-rain.png",
    "Light drizzle": "/images/HeroBackgrounds/heavy-rain.png",
    "Freezing drizzle": "/images/HeroBackgrounds/heavy-rain.png",
    "Heavy freezing drizzle": "/images/HeroBackgrounds/heavy-rain.png",
    "Patchy light rain": "/images/HeroBackgrounds/heavy-rain.png",
    "Light rain": "/images/HeroBackgrounds/heavy-rain.png",
    "Moderate rain at times": "/images/HeroBackgrounds/heavy-rain.png",
    "Moderate rain": "/images/HeroBackgrounds/heavy-rain.png",
    "Heavy rain at times": "/images/HeroBackgrounds/storm-night.jpg",
    "Heavy rain": "/images/HeroBackgrounds/storm-night.jpg",
    "Light freezing rain": "/images/HeroBackgrounds/heavy-rain.png",
    "Moderate or heavy freezing rain": "/images/HeroBackgrounds/heavy-rain.png",
    "Light sleet": "/images/HeroBackgrounds/heavy-rain.png",
    "Moderate or heavy sleet": "/images/HeroBackgrounds/heavy-rain.png",
    "Patchy light snow": "/images/HeroBackgrounds/snowing.jpg",
    "Light snow": "/images/HeroBackgrounds/snowing.jpg",
    "Patchy moderate snow": "/images/HeroBackgrounds/snowing.jpg",
    "Moderate snow": "/images/HeroBackgrounds/snowing.jpg",
    "Patchy heavy snow": "/images/HeroBackgrounds/snowing.jpg",
    "Heavy snow": "/images/HeroBackgrounds/snowing.jpg",
    "Ice pellets": "/images/HeroBackgrounds/raining-day.png",
    "Light rain shower": "/images/HeroBackgrounds/heavy-rain.png",
    "Moderate or heavy rain shower": "/images/HeroBackgrounds/storm-night.jpg",
    "Torrential rain shower": "/images/HeroBackgrounds/storm-night.jpg",
    "Light sleet showers": "/images/HeroBackgrounds/heavy-rain.png",
    "Moderate or heavy sleet showers": "/images/HeroBackgrounds/heavy-rain.png",
    "Light snow showers": "/images/HeroBackgrounds/snowing.jpg",
    "Moderate or heavy snow showers": "/images/HeroBackgrounds/snowing.jpg",
    "Light showers of ice pellets": "/images/HeroBackgrounds/snowing.jpg",
    "Moderate or heavy showers of ice pellets": "/images/HeroBackgrounds/snowing.jpg",
    "Patchy light rain with thunder": "/images/HeroBackgrounds/storm-night.jpg",
    "Moderate or heavy rain with thunder": "/images/HeroBackgrounds/storm-night.jpg",
    "Patchy light snow with thunder": "/images/HeroBackgrounds/snowing.jpg",
    "Moderate or heavy snow with thunder": "/images/HeroBackgrounds/snowing.jpg",
  },
};
