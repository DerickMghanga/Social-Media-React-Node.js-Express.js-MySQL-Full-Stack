import axios from "axios";

//base URL and Request
export const makeRequest = axios.create({
    baseURL: "http://localhost:8800/api/",
    withCredentials: true,
})