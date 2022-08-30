// React & Bootstrap
import { Link } from "react-router-dom"
import { Button, Container, Row, Col } from "react-bootstrap"

// Assets
import '../assets/scss/App.scss'

const HomePage = () => {
	return (
		<Container className="my-auto">
			<Row className="py-5">
				<Col>
					<h1 className="d-flex justify-content-center py-4">The Movie Database</h1>
				</Col>
			</Row>

			{/* Knappar */}
			<Row>
				<Col md={6} className="d-flex justify-content-center">
					<Button
						as={Link}
						to="/categories"
						variant="outline-primary"
						className="m-2 px-5 py-3 button"
					>Lists</Button>
				</Col>
				<Col md={6} className="d-flex justify-content-center">
					<Button
						as={Link}
						to="/genre"
						variant="outline-primary"
						className="m-2 px-5 py-3 button"
					>Genre</Button>
				</Col>
			</Row>
		</Container>
	)
}

export default HomePage