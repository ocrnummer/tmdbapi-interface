import { Button, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const HomePage = () => {


	return (
		<Container className="my-auto">

			<h1 className="d-flex justify-content-center py-4">The Movie Database</h1>

			<Button
				as={Link}
				to="/categories"
				variant="primary"
				className="m-2"
			>Lists</Button>

			<Button
				as={Link}
				to="/genre"
				variant="primary"
				className="m-2"
			>Genre</Button>

			<Button
				as={Link}
				to="/search"
				variant="primary"
				className="m-2"
			>Search</Button>

		</Container>
	)
}

export default HomePage