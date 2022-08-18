// React & Bootstrap
import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { Row, Col } from 'react-bootstrap'

// Components
import MovieCard from '../components/MovieCard'
import Pagination from '../components/Pagination'

// Services
import { nowPlayingMovies } from '../services/TmdbAPI.js'


const NowPlayingPage = () => {
	const [page, setPage] = useState(1)

	const { data, error, isLoading, isFetching, isError } = useQuery(['now-playing', page], nowPlayingMovies)

	return (
		<div>
			<h2>Nu på bio</h2>

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