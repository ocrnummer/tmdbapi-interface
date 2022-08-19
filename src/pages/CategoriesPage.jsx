// React & Bootstrap
import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { useSearchParams } from 'react-router-dom'
import { Row, Col, Button } from 'react-bootstrap'

// Components
import MovieCard from '../components/MovieCard'
import Pagination from '../components/Pagination'

// Services
import { getMoviesCategory } from '../services/TmdbAPI.js'
import CategoryButton from '../components/CategoryButton'


const NowPlayingPage = () => {
	const [searchParams, setSearchParams] = useSearchParams({
		category: '/popular',
		page: 1
	})

	const category = searchParams.get('category')
	const page = searchParams.get('page')


	const { data, error, isLoading, isFetching, isError } = useQuery(['get-movies', page, category], getMoviesCategory)

	return (
		<div>
			<h2>Nu på bio</h2>

			{/* Kategoriknappar */}
			<Button
				onClick={() => { setSearchParams({ category: "/popular", page: 1 }) }}
				variant="outline-primary"
			>Trendande titlar</Button>
			<Button
				onClick={() => { setSearchParams({ category: "/now_playing", page: 1 }) }}
				variant="outline-primary"
			>Bioaktuellt</Button>
			<Button
				onClick={() => { setSearchParams({ category: "/top_rated", page: 1 }) }}
				variant="outline-primary"
			>ToppListan</Button>

			{/* <CategoryButton category="/popular" text="Trendande titlar" onSetSearchParams={setSearchParams} />
			<CategoryButton category="/now_playing" text="Nu på bio" onSetSearchParams={setSearchParams} />
			<CategoryButton category="/top_rated" text="Topplistan" onSetSearchParams={setSearchParams} /> */}


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
						turnPage={setSearchParams}
					/>
				</>
			)}
		</div>
	)
}

export default NowPlayingPage