import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'

const NavigationLinks = () => (
  <Nav className="mr-auto">
    <Nav.Link as={Link} to="/home">
      Главная
    </Nav.Link>
    <Nav.Link as={Link} to="/">
      Войти
    </Nav.Link>
  </Nav>
)

export default NavigationLinks
