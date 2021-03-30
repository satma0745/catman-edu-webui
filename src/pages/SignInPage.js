import Jumbotron from 'react-bootstrap/Jumbotron'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { SignInForm } from '../components/auth'

const SignInPage = () => (
  <Row className="h-100 align-items-center">
    <Col>
      <Row className="justify-content-center">
        <Col md="6">
          <Jumbotron className="py-4">
            <SignInForm />
          </Jumbotron>
        </Col>
      </Row>
    </Col>
  </Row>
)

export default SignInPage
