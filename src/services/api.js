import axios from "axios";

const instance = axios.create({
  baseURL: "https://66b323067fba54a5b7eb9148.mockapi.io",
});

export const getAllCars = async () => {
  const { data } = await instance.get("/adverts");
  return data;
};

export const getCarDetailsById = async (carId) => {
  const { data } = await instance.get(`/adverts/${carId}`);
  return data;
};
