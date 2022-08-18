import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { Button, Row, Col } from 'react-bootstrap'

import MovieCard from '../components/MovieCard'
import Pagination from '../components/Pagination'

import { topRatedMovies } from '../services/TmdbAPI.js'


const NowPlayingPage = () => {
	const [page, setPage] = useState(1)
	const { data, error, isLoading, isFetching, isError } = useQuery(['top-rated', page], topRatedMovies)

	return (
		<div>
			<h2>Högst betyg</h2>

			{data && (
				<>
					<Row>
						{data.results.map(data => (
							<Col lg={3} md={4} sm={6} key={data.id}>
								<MovieCard data={data} />
							</Col>
						))}
					</Row>

					<Pagination
						page={page}
						previousPage={() => setPage(currentPage => currentPage - 1)}
						nextPage={() => setPage(currentPage => currentPage + 1)}
					/>
				</>
			)}

		</div>
	)
}

export default NowPlayingPage