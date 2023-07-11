import API from "@/config/constants";
import axios from "axios";

export const http = axios.create({
  baseURL: API,
  headers: {
    "Content-Type": "application/json"
  }
});
