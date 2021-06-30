import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { PageSwitch } from 'routing'
import { Header } from './layout'

const App = () => (
  <div className="app bg-light h-100 d-flex flex-column">
    <Header />

    <Container className="flex-grow-1 bg-white shadow-sm border-left border-right">
      <Row className="py-5 px-3 h-100">
        <Col>
          <PageSwitch />
        </Col>
      </Row>
    </Container>
  </div>
)

export default App
