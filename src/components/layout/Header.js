import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Header = () => (
  <Navbar sticky="top" className="shadow-sm border-bottom" bg="light">
    <Navbar.Brand as={Link} to="/home">
      Catman.Education
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/home">
        Главная
      </Nav.Link>
      <Nav.Link as={Link} to="/">
        Войти
      </Nav.Link>
    </Nav>
  </Navbar>
)

export default Header
