import { useQuery } from 'react-query'

import { getNowPlayingMovies } from '../services/TmdbAPI.js'


const NowPlayingPage = () => {
	const { data, error, isLoading, isFetching, isError } = useQuery(['now-playing'], getNowPlayingMovies)

	return (
		<div>

			<h2>Nu på bio</h2>

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