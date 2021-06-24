import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'

const NavigationLinks = ({ className, ...props }) => (
  <Nav {...props} className={`mr-auto ${className}`}>
    <Nav.Link as={Link} to="/students">
      Учащиеся
    </Nav.Link>
    <Nav.Link as={Link} to="/groups">
      Группы
    </Nav.Link>
    <Nav.Link as={Link} to="/disciplines">
      Тесты
    </Nav.Link>
  </Nav>
)

export default NavigationLinks
