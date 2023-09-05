import { WeatherByLocation } from "../types";

async function fetchWeatherDataByLocationName(
  locationName: string,
): Promise<WeatherByLocation> {
  const apiKey = "961dc6468f1545c7b6f41350230509";
  const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${locationName}`;
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Error while data fetching.");
    }
    const data = await response.json();
    return data as WeatherByLocation;
  } catch (e) {
    return Promise.reject(e)
  }
}

export { fetchWeatherDataByLocationName };
