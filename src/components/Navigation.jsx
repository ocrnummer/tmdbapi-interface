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
						<NavDropdown title="Bläddra" id="basic-nav-dropdown">
							<NavDropdown.Item as={NavLink} to="/now-playing">Nu på bio</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} to="/popular">Trendande titlar</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} to="/top-rated">Högst betyg</NavDropdown.Item>
						</NavDropdown>

						<Nav.Link as={NavLink} to="/search">Sök film</Nav.Link>

						{/* <NavDropdown title="Genres" id="basic-nav-dropdown">

							<NavDropdown.Item as={NavLink} to="/action">Action</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} to="/adventure">Äventyr</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} to="/animation">Animerat</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} to="/comedy">Komedi</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} to="/crime">Brott</NavDropdown.Item>

							<NavDropdown.Item as={NavLink} to="/documentary">dokumentär</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} to="/drama">Drama</NavDropdown.Item>

							<NavDropdown.Item as={NavLink} to="/family">Familj</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} to="/history">Historia</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} to="/horror">Skräck</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} to="/music">Musikal</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} to="/mystery">Mystik</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} to="/romance">Romantik</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} to="/sci-fi">Scfience fiction</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} to="/tv-movie">Film adaptioner</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} to="/thriller">Spänning</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} to="/war">Krig</NavDropdown.Item>

							<NavDropdown.Item as={NavLink} to="/western">Vilda västern</NavDropdown.Item>

						</NavDropdown> */}

					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation