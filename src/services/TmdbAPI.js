import axios from 'axios'

// const APIkey = import.meta.env.TMDB_API_KEY
const APIkey = '?api_key=9de1c9f1c264d126506898f0cfc0bb5c'
const adultCont = '&include_adult=false'

axios.defaults.baseURL = 'https://api.themoviedb.org/3'



export const get = async (endpoint) => {
    const response = await axios.get(endpoint)
    return response.data
}



export const getNowPlayingMovies = (id) => {
    return get(`/movie/now_playing${APIkey}${adultCont}`)
}

export const getPopularMovies = (id) => {
    return get(`/movie/popular${APIkey}${adultCont}`)
}

export const getTopRatedMovies = (id) => {
    return get(`/movie/top_rated${APIkey}${adultCont}`)
}

export const getMovie = (id) => {
    return get(`/movie/${id}${APIkey}${adultCont}`)
}

export default {
    get,
    getNowPlayingMovies,
    getPopularMovies,
    getTopRatedMovies,
    getMovie
}