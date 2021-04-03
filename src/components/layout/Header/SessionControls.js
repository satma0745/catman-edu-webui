import { Link, useHistory } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { useAuth } from 'auth'

const SignedControls = ({ username, signOut }) => (
  <Form inline>
    <span className="mr-3">{username}</span>
    <Button variant="outline-primary" onClick={signOut}>
      Выйти
    </Button>
  </Form>
)

const UnsignedControls = () => (
  <Form inline>
    <Button as={Link} to="/" variant="outline-primary">
      Войти
    </Button>
  </Form>
)

const SessionControls = () => {
  const [userInfo, setUserInfo] = useAuth()
  const history = useHistory()

  const signOut = () => {
    setUserInfo(undefined)
    history.push('/')
  }

  return userInfo ? (
    <SignedControls username={userInfo.username} signOut={signOut} />
  ) : (
    <UnsignedControls />
  )
}

export default SessionControls
