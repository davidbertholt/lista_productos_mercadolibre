import axios from "axios";
import API from "./constants";

export const http = axios.create({
  baseURL: API,
  headers: {
    "Content-Type": "application/json"
  }
});
