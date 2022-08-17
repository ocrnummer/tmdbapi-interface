import axios from 'axios'

// const APIkey = import.meta.env.TMDB_API_KEY
const APIkey = '9de1c9f1c264d126506898f0cfc0bb5c'
axios.defaults.baseURL = 'https://api.themoviedb.org/3'

const requestOption = {
    headers: {

    }
}

export const get = async (endpoint) => {
    const response = await axios.get(endpoint)
    return response.data
}



export const getNowPlayingMovies = (id) => {
    return get(`/movie/now_playing?api_key=${APIkey}`)
}

export const getPopularMovies = (id) => {
    return get(`/movie/popular?api_key=${APIkey}`)
}

export const getTopRatedMovies = (id) => {
    return get(`/movie/top_rated?api_key=${APIkey}`)
}

export const getMovie = (id) => {
    return get(`/movie/${id}?api_key=${APIkey}`)
}

export default {
    get,
    getNowPlayingMovies,
    getPopularMovies,
    getTopRatedMovies,
    getMovie
}