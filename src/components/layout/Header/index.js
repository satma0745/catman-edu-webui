import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'

import SessionControls from './SessionControls'
import NavigationLinks from './NavigationLinks'

const Header = () => (
  <Navbar sticky="top" className="shadow-sm border-bottom" bg="light">
    <Navbar.Brand as={Link} to="/home">
      Catman.Education
    </Navbar.Brand>

    <NavigationLinks />

    <SessionControls />
  </Navbar>
)

export default Header
