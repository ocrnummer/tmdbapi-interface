// React & Bootstrap
import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { useSearchParams } from 'react-router-dom'
import { Row, Col, Button } from 'react-bootstrap'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";


// Components
import MovieCard from '../components/MovieCard'
import Pagination from '../components/Pagination'

// Services
import { getMoviesCategory } from '../services/TmdbAPI.js'
import { categories } from '../utils/categories.js'


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
			{categories && categories.map(cat => {
				<Button
					key={cat.id}
					onClick={() => { setSearchParams({ category: cat.path, page: 1 }) }}
					variant="outline-primary"
				>{cat.name}</Button>
			})}

			{isLoading && (<ClimbingBoxLoader size={10} />)}

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