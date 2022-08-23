import axios from 'axios'

const APIkey = `?api_key=${import.meta.env.VITE_TMDB_API_KEY}`


axios.defaults.baseURL = 'https://api.themoviedb.org/3'

export const get = async (endpoint) => {
	console.log(endpoint)
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


export const getMovie = ({ queryKey }) => {
	const [_key, id] = queryKey

	return get(`/movie/${id}${APIkey}&append_to_response=credits`)
}


export const getActor = ({ queryKey }) => {
	const [_key, id] = queryKey

	return get(`/person/${id}${APIkey}&append_to_response=movie_credits`
		// &append_to_response=credits
	)
}




export default {
	get,
	getMoviesCategory,
	discoverMovies,
	getMovie,
	getActor
}