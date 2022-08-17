import { useQuery } from 'react-query'

import { getPopularMovies } from '../services/TmdbAPI.js'


const NowPlayingPage = () => {
	const { data, error, isLoading, isFetching, isError } = useQuery(['popular'], getPopularMovies)

	return (
		<div>

			<h2>Trendande titlar</h2>

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