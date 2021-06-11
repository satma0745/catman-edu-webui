import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'

import { useAuth } from 'auth'

const UnsignedLinks = () => <Nav className="mr-auto" />

const StudentLinks = ({ student }) => (
  <Nav className="mr-auto">
    <Nav.Link as={Link} to="/testing">
      Тестирование
    </Nav.Link>
    <Nav.Link as={Link} to={`/testing/results/student/${student.id}`}>
      Результаты тестирования
    </Nav.Link>
  </Nav>
)

const AdminLinks = () => (
  <Nav className="mr-auto">
    <Nav.Link as={Link} to="/students">
      Учащиеся
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
      Администраторы
    </Nav.Link>
  </Nav>
)

const NavigationLinks = () => {
  const [userInfo] = useAuth()

  if (!userInfo) return <UnsignedLinks />

  if (userInfo.role === 'Student') return <StudentLinks student={userInfo} />

  if (userInfo.role === 'Admin') return <AdminLinks />

  throw Error('Unknown role')
}

export default NavigationLinks
