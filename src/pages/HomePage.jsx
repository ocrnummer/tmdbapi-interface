import { Button, Container, Nav, NavLink } from "react-bootstrap"

const HomePage = () => {


	return (
		<Container className="my-auto">

			<h1 className="d-flex justify-content-center py-4">The Movie Database</h1>
			{/* 
			<Nav className="d-flex justify-content-center py-4">
				<Nav.Link as={NavLink} to="/categories">
					<Button
						variant="primary"
						className="m-2"
					>Listor</Button>
				</Nav.Link>

				<Nav.Link as={NavLink} to="/search">
					<Button
						variant="primary"
						className="m-2"
					>Sök film</Button>
				</Nav.Link>
			</Nav> */}
		</Container>
	)
}

export default HomePage