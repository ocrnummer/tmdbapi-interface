import { useQuery } from 'react-query'

import { getNowPlayingMovies } from '../services/TmdbAPI.js'

const HomePage = () => {
	const { data, error, isLoading, isFetching, isError } = useQuery(['now-playing-movies'], getNowPlayingMovies)

	return (
		<>
			<h1>Hemsida hehe</h1>

			{data && (
				<ol>
					{data.results.map(data => (
						<li key={data.id}>
							{data.title}
						</li>
					))}
				</ol>
			)}


			<p>Lista här ovan</p>
		</>
	)
}

export default HomePage