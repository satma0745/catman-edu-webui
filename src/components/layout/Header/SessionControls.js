import { Link, useHistory } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { useAuth } from 'auth'

const SignedControls = ({ username, signOut }) => (
  <Form inline className="justify-content-between">
    <span className="mr-3">{username}</span>
    <Button variant="outline-primary" size="sm" onClick={signOut}>
      Выйти
    </Button>
  </Form>
)

const UnsignedControls = () => (
  <Form inline className="justify-content-between">
    <span className="mr-3">Вы не авторизованы</span>
    <Button as={Link} to="/" variant="outline-primary" size="sm">
      Войти
    </Button>
  </Form>
)

const SessionControls = () => {
  const [userInfo, _, signOut] = useAuth()
  const history = useHistory()

  const onSignOut = () => {
    signOut()
    history.push('/')
  }

  return userInfo ? (
    <SignedControls username={userInfo.fullName} signOut={onSignOut} />
  ) : (
    <UnsignedControls />
  )
}

export default SessionControls
