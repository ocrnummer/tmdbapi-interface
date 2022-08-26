// React & Bootstrap
import { useState } from 'react'
import { useQuery } from 'react-query'
import { useSearchParams } from 'react-router-dom'
import { Row, Col, Button, Alert, Container } from 'react-bootstrap'
import BarLoader from "react-spinners/BarLoader";

// Components
import MovieCard from '../components/MovieCard'

// Services & utilities
import { getMoviesCategory } from '../services/TmdbAPI.js'
import { categories } from '../utils/categories.js'

// Assets
import '../assets/scss/App.scss'


const CategoriesPage = () => {
	const [pageTitle, setPageTitle] = useState('Popular titles')
	const [searchParams, setSearchParams] = useSearchParams({
		category: '/popular',
		page: 1
	})

	const category = searchParams.get('category')
	const page = searchParams.get('page')

	const { data, error, isLoading, isError } = useQuery(['get-movies', page, category], getMoviesCategory)

	return (
		<Container>
			<Row>
				<Col className="d-flex justify-content-center py-3">
					<h1>{pageTitle}</h1>
				</Col>
			</Row>

			<Row>
				{/* Kategoriknappar */}
				<Col className="d-flex justify-content-center py-1">
					{categories.map(cat => (
						<Button
							className="m-3 button"
							key={cat.id}
							onClick={() => {
								setSearchParams({ category: cat.path, page: 1 })
								setPageTitle(cat.name)
							}}
							variant="outline-primary"
						>{cat.name}</Button>
					))}
				</Col>
			</Row>

			<Row>
				<Col className="d-flex justify-content-center py-3">
					{isLoading && (<BarLoader size={20} />)}
					{isError && (<Alert variant="danger">An error occured: {error.message}</Alert>)}
				</Col>
			</Row>

			{data && (
				<Container>
					<Row xs={2} md={2} className="g-4">
						{data.results.map(data => (
							<Col lg={3} md={3} sm={6} key={data.id}>
								<MovieCard data={data} />
							</Col>
						))}
					</Row>

					{/* <Row>
						<Col>
							<Pagination
								page={page}
								category={category}
								turnPage={setSearchParams}
							/>
						</Col>
					</Row> */}
				</Container>
			)}
		</Container>
	)
}

export default CategoriesPage