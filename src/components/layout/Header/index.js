import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'

import SessionControls from './SessionControls'
import NavigationLinks from './NavigationLinks'

const Header = () => (
  <Navbar className="shadow-sm border-bottom" bg="light" sticky="top" expand="lg">
    <Navbar.Brand as={Link} to="/home">
      Catman.Education
    </Navbar.Brand>

    <Navbar.Toggle />

    <Navbar.Collapse>
      <NavigationLinks className="my-3 my-lg-0" />
      <SessionControls />
    </Navbar.Collapse>
  </Navbar>
)

export default Header
