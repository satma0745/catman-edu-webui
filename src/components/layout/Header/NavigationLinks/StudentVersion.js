import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'

const NavigationLinks = ({ className, ...props }) => (
  <Nav {...props} className={`mr-auto ${className}`}>
    <Nav.Link as={Link} to="/testing">
      Тестирование
    </Nav.Link>
  </Nav>
)

export default NavigationLinks
