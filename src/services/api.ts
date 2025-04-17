import axios from "axios";

// json-server --watch db.json
export const api = axios.create({
  baseURL: "https://680111cb81c7e9fbcc416972.mockapi.io/products",
});
