import type weatherModel from "../models/weatherObject.model";

const api_key = import.meta.env.VITE_API_KEY;

export const getWeather = async (cityName: string): Promise<weatherModel> => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${api_key}`
    );
    if (response.ok) {
      const state = await response.json();
      console.log(state);
      return state;
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
    throw new Error("Cannot reach api");
  }
};
