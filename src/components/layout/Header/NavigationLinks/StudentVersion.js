import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'

const NavigationLinks = ({ className, student, ...props }) => (
  <Nav {...props} className={`mr-auto ${className}`}>
    <Nav.Link as={Link} to="/testing">
      Тестирование
    </Nav.Link>
    <Nav.Link as={Link} to={`/testing/results/student/${student.id}`}>
      Результаты тестирования
    </Nav.Link>
  </Nav>
)

export default NavigationLinks
