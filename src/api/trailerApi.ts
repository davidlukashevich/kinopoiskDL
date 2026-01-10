import axios from "axios"
import type { TrailerSearchResponse } from "../types/TTrailer"

export const getFilmTrailer = async (title: string) => {
    const query = `${title} film trailer`.trim()
    const res = await axios.get<TrailerSearchResponse>(`${import.meta.env.VITE_YOUTUBE_API_URL}/search`, {
        params: { part: "snippet", q: query, type: "video", maxResults: 1, key: import.meta.env.VITE_YOUTUBE_API_KEY }
    })
    return res.data
}