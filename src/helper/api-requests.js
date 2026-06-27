//https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_networks=213

const API_KEY="8976cf021adffa56b790540eb515604f";


const apiRequests = {
    getNetflixOriginals:`/discover/tv?api_key=${API_KEY}&language=en-US&page=1&with_networks=213`,
    getCollection: (platform, endpoint) =>`/${platform}/${endpoint}?api_key=${API_KEY}&language=en-US&page=1`,
    getDetails:(platform, id) =>`/${platform}/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos`,
    getGenres:(platform) => `genre/${platform}/list?api_key=${API_KEY}&language=en`,
    getByGenres: (platform, genreid) => `/discover/${platform}?api_key=${API_KEY}&language=en-US&page=1&with_genres=${genreid}`,
    getByQuery: (platform, query) => `/search/${platform}?api_key=${API_KEY}&language=en-US&page=1&query=${query}`
}
export const IMG_URL = 'https://image.tmdb.org/t/p/original';
export const platformType ={
    movie:"movie",
    tv: "tv"
}
 
export const endpoints = {
    nowplaying: "now_playing",
    topRated: "top_rated",
    upcoming:"upcoming",
    popular : "popular",
    onTheAir: "on_the_air",
    AiringToday: "airing_today"

}

export default apiRequests;