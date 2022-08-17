import { useState } from 'react'
import { useQuery } from 'react-query'
import { Button } from 'react-bootstrap'

import { getNowPlayingMovies } from '../services/TmdbAPI.js'


const NowPlayingPage = () => {
	const [page, setPage] = useState(1)
	const { data, error, isLoading, isFetching, isError } = useQuery(['now-playing', page], getNowPlayingMovies)


	return (
		<div>

			<h2>Nu på bio</h2>

			{data && (
				<ul>
					{data.results.map(data => (
						<li key={data.id}>
							{data.title}
						</li>
					))}
				</ul>
			)}

			<div className="d-flex justify-content-between align-item-center m-2">
				<Button
					disabled={page <= 1 ? true : false}
					onClick={() => setPage(currentPage => currentPage - 1)}
					variant="primary"
				>Föregående sida</Button>

				<Button
					onClick={() => setPage(currentPage => currentPage + 1)}
					variant="primary"
				>Nästa sida</Button>
			</div>

		</div>
	)
}

export default NowPlayingPage