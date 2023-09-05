async function getWeatherDataByLocationName(locationName: string) {
  const apiKey = "";
  const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${locationName}`;
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Error while data fetching.");
    }
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error("An error occured while fetchign the data.");
  }
}

export { getWeatherDataByLocationName };
