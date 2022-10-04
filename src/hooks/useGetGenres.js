import React from 'react'
import { useQuery } from 'react-query'
import { getGenres } from '../services/TmdbAPI.js'

const useGetGenres = () => {

	const { data, error, isLoading, isFetching, isError } = useQuery(['get-genres'], getGenres)

	return data
}

export default useGetGenres