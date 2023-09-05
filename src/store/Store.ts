import { create } from "zustand";
import { fetchWeatherDataByLocationName } from "../api/fetchWeatherDataByLocation";

interface SearchInterface {
  locationName: string;
  locationData: object;
  currentWeatherData: object;
  updateLocationName: (newLocationName: string) => void;
  fetchWeatherInfoByLocationName: () => void;
}

export const useWeatherDataStore = create<SearchInterface>((set, get) => ({
  locationName: "Dhaka",
  currentWeatherData: {},
  locationData: {},
  updateLocationName: newLocationName => set({ locationName: newLocationName }),
  fetchWeatherInfoByLocationName: async () => {
    const data = await fetchWeatherDataByLocationName(get().locationName);
    set({ locationData: data.location, currentWeatherData: data.current });
  },
}));
