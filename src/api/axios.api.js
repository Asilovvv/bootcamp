import axios from "axios";

export const apiService = axios.create({
    baseURL: 'https://hackathon-production-3ce8.up.railway.app',
})