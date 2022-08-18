import axios from 'axios'

const APIkey = `?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
const sorting = 'popularity.desc'
const genre = 'popularity.desc'

axios.defaults.baseURL = 'https://api.themoviedb.org/3'



export const get = async (endpoint) => {
	const response = await axios.get(endpoint)

	return response.data
}



export const discoverMovies = ({ queryKey }) => {
	const [key, page] = queryKey

	return get(`/discover/movie${APIkey}
		&sort_by=${sorting}
		&include_adult=false
		&include_video=false
		&page=${page}
		&with_genres=${genre}`)
}

export const nowPlayingMovies = ({ queryKey }) => {
	const [key, page] = queryKey
	return get(`/movie/now_playing${APIkey}&page=${page}`)
}

export const popularMovies = ({ queryKey }) => {
	const [key, page] = queryKey
	return get(`/movie/popular${APIkey}&page=${page}`)
}

export const topRatedMovies = ({ queryKey }) => {
	const [key, page] = queryKey
	return get(`/movie/top_rated${APIkey}&page=${page}`)
}




export const getMovie = (id) => {
	return get(`/movie/${id}${APIkey}`)
}

export default {
	get,
	discoverMovies,
	nowPlayingMovies,
	popularMovies,
	topRatedMovies,
	getMovie
}