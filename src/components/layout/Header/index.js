import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'

import SessionControls from './SessionControls'
import NavigationLinks from './NavigationLinks'

const getTitle = () =>
  process.env.REACT_APP_IS_DEMO ? 'Catman.Education.Demo' : 'Catman.Education'

const Header = () => (
  <Navbar className="shadow-sm border-bottom" bg="light" sticky="top" expand="lg">
    <Navbar.Brand as={Link} to="/home">
      {getTitle()}
    </Navbar.Brand>

    <Navbar.Toggle />

    <Navbar.Collapse>
      <NavigationLinks className="my-3 my-lg-0" />
      <SessionControls />
    </Navbar.Collapse>
  </Navbar>
)

export default Header
