import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { useAuth } from '../../auth'

const Auth = () => {
  const [user] = useAuth()

  if (user) {
    return <Navbar.Text>{user.username}</Navbar.Text>
  }

  return (
    <Form inline>
      <Button as={Link} to="/" variant="outline-primary">
        Войти
      </Button>
    </Form>
  )
}

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
    <Auth />
  </Navbar>
)

export default Header
