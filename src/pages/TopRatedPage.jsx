import { useQuery } from 'react-query'

import { getTopRatedMovies } from '../services/TmdbAPI.js'


const NowPlayingPage = () => {
	const { data, error, isLoading, isFetching, isError } = useQuery(['top-rated'], getTopRatedMovies)

	return (
		<div>

			<h2>Högst betyg</h2>

			{data && (
				<ol>
					{data.results.map(data => (
						<li key={data.id}>
							{data.title}
						</li>
					))}
				</ol>
			)}

		</div>
	)
}

export default NowPlayingPage