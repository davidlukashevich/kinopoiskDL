import axios from "axios";

export const http = axios.create({
    baseURL: import.meta.env.VITE_TMDB_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

http.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`;

    return config;
});