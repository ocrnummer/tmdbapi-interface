import axios from 'axios'

const APIkey = `?api_key=${import.meta.env.VITE_TMDB_API_KEY}`


axios.defaults.baseURL = 'https://api.themoviedb.org/3'

export const get = async (endpoint) => {
	const response = await axios.get(endpoint)
	return response.data
}



export const discoverMovies = ({ queryKey }) => {
	const [_key, page, genre, sort, query] = queryKey

	return get(`/discover/movie${APIkey}
		${sort ? '&sort_by=' + sort : ''}
		&include_adult=false
		&include_video=false
		&page=${page}
		${genre ? '&with_genres=' + genre : ''}`)
}

// &query=${query}

export const getMoviesCategory = ({ queryKey }) => {
	const [_key, page, category] = queryKey

	return get(`/movie${category}${APIkey}&page=${page}`)

}

export const getMovie = (id) => {
	return get(`/movie/${id}${APIkey}`)
}



export default {
	get,
	getMoviesCategory,
	discoverMovies,
	getMovie
}