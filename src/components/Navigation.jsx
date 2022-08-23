import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

const Navigation = () => {

	return (
		<Navbar bg="primary" variant="dark" expand="md">
			<Container>
				<Navbar.Brand as={Link} to="/">TMDB</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">


						<Nav.Link as={NavLink} to="/categories">Lists</Nav.Link>
						<Nav.Link as={NavLink} to="/genre">Genre</Nav.Link>

						<Nav.Link as={NavLink} to="/search">Search</Nav.Link>

					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation