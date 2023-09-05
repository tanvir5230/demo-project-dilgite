import { create } from "zustand";
import { Current, WeatherByLocation, Location } from "../types";

interface SearchInterface {
  locationName: string;
  locationData?: Location;
  currentWeatherData?: Current;
  updateLocationName: (newLocationName: string) => void;
  fetchWeatherInfoByLocationName?: () => void;
  setState:(params: WeatherByLocation) =>void
}

export const useWeatherDataStore = create<SearchInterface>((set) => ({
  locationName: "Dhaka",
  updateLocationName: newLocationName => set({ locationName: newLocationName }),
  setState:(params)=> {
    set({
      locationData:params.location,
      currentWeatherData: params.current
    })
  }
}));
