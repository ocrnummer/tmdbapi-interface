import axios from 'axios'

const APIkey = `?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
const sorting = 'popularity.desc'
const genre = 'action'

axios.defaults.baseURL = 'https://api.themoviedb.org/3'

export const get = async (endpoint) => {
	const response = await axios.get(endpoint)

	return response.data
}



export const discoverMovies = ({ queryKey }) => {
	const [_key, page] = queryKey

	return get(`/discover/movie${APIkey}
		&sort_by=${sorting}
		&include_adult=false
		&include_video=false
		&page=${page}
		&with_genres=${genre}`)
}




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