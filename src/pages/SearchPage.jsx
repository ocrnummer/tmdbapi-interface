import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'

import { discoverMovies } from '../services/TmdbAPI.js'

const SearchPage = () => {
    const [page, setPage] = useState(1)

    const { data, error, isLoading, isFetching, isError } = useQuery(['now-playing', page], discoverMovies)

    return (
        <div>
            {/* form med input för text och knappar/dropdown för genre */}


            {/* visa 10-20 filmer med den input som ges  */}


            {/* Pagination */}
        </div>
    )
}

export default SearchPage