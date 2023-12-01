import axios, { AxiosRequestConfig } from "axios";
import { Platform } from "react-native";
import { responseInterceptor } from "./interceptors/responseInterceptor";
import { errorInterceptor } from "./interceptors/ErrorInterceptor";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const BASE_URL = "http://localhost:8080";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.response.use(
    (response) => responseInterceptor(response),
    (error) => errorInterceptor(error)
);

export { api };