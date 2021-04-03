import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'

import { useAuth } from 'auth'

const UnsignedLinks = () => <Nav className="mr-auto" />

const StudentLinks = () => (
  <Nav className="mr-auto">
    <Nav.Link as={Link} to="/home">
      Главная
    </Nav.Link>
    <Nav.Link as={Link} to="/testing">
      Тестирование
    </Nav.Link>
    <Nav.Link as={Link} to="/testingResults">
      Результаты тестирования
    </Nav.Link>
  </Nav>
)

const AdminLinks = () => (
  <Nav className="mr-auto">
    <Nav.Link as={Link} to="/home">
      Главная
    </Nav.Link>
    <Nav.Link as={Link} to="/students">
      Студенты
    </Nav.Link>
    <Nav.Link as={Link} to="/disciplines">
      Дисциплины
    </Nav.Link>
    <Nav.Link as={Link} to="/groups">
      Группы
    </Nav.Link>
    <Nav.Link as={Link} to="/tests">
      Тесты
    </Nav.Link>
    <Nav.Link as={Link} to="/testingResults">
      Результаты тестирования
    </Nav.Link>
    <Nav.Link as={Link} to="/admins">
      Админы
    </Nav.Link>
  </Nav>
)

const NavigationLinks = () => {
  const [userInfo] = useAuth()

  if (!userInfo) return <UnsignedLinks />

  if (userInfo.role === 'Student') return <StudentLinks />

  if (userInfo.role === 'Admin') return <AdminLinks />

  throw Error('Unknown role')
}

export default NavigationLinks
