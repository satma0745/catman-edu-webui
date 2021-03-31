import { useHistory } from 'react-router-dom'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { SignInForm } from '../components/auth'

import { signIn } from '../api'
import { useAuth } from '../auth'

const SignInPage = () => {
  const [_, setUserInfo] = useAuth()
  const history = useHistory()

  const onSubmit = async (credentials, { setErrors }) => {
    const { success, userInfo, validation } = await signIn(credentials)

    if (success) {
      setUserInfo(userInfo)
      history.push('/home')
      return
    }

    if (validation) {
      setErrors(validation)
    }
  }

  return (
    <Row className="h-100 align-items-center">
      <Col>
        <Row className="justify-content-center">
          <Col md="6">
            <Jumbotron className="py-4">
              <SignInForm onSubmit={onSubmit} />
            </Jumbotron>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default SignInPage
