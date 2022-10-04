import axios from 'axios'

const APIkey = `?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
const adultAndVideo = '&include_adult=false&include_video=false'

axios.defaults.baseURL = 'https://api.themoviedb.org/3'

// Axios fetch
export const get = async (endpoint) => {
	const response = await axios.get(endpoint)
	return response.data
}

// Discover by genres endpoint
export const discoverMovies = ({ queryKey }) => {
	const [_key, page, genre, sort] = queryKey
	return get(`/discover/movie${APIkey}
		${sort ? '&sort_by=' + sort : ''}
		${adultAndVideo}
		&page=${page}
		${genre ? '&with_genres=' + genre : ''}`)
}

// Categories (now_playing, popular, top_rated) endpoint
export const getMoviesCategory = ({ queryKey }) => {
	const [_key, page, category] = queryKey
	return get(`/movie${category}${APIkey}&page=${page}`)
}

// Get movie by id
export const getMovie = ({ queryKey }) => {
	const [_key, id] = queryKey
	return get(`/movie/${id}${APIkey}${adultAndVideo}&append_to_response=credits,similar`)
}

// Get actor by id
export const getActor = ({ queryKey }) => {
	const [_key, id] = queryKey
	return get(`/person/${id}${APIkey}${adultAndVideo}&append_to_response=movie_credits`)
}

export const getGenres = () => {
	return get(`genre/movie/list${APIkey}`)
}

export default {
	get,
	getMoviesCategory,
	discoverMovies,
	getMovie,
	getActor,
	getGenres
}