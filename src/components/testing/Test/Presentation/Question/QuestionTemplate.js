import Card from 'react-bootstrap/Card'

const QuestionTemplate = ({ question: { cost, text }, children, style = {}, ...props }) => (
  <Card style={{ overflow: 'hidden', ...style }} {...props}>
    <Card.Header>
      <div className="d-flex align-items-center">
        <div className="bg-primary py-1 px-2 text-light rounded">{cost}</div>
        <div className="ml-2">{text}</div>
      </div>
    </Card.Header>

    <Card.Body className="p-0">{children}</Card.Body>
  </Card>
)

export default QuestionTemplate
