import Card from 'react-bootstrap/Card'

const QuestionTemplate = ({ question: { cost, text }, children, ...props }) => (
  <Card {...props}>
    <Card.Header>
      <div className="d-flex align-items-center">
        <div className="bg-primary py-1 px-2 text-light rounded">{cost}</div>
        <div className="ml-2">{text}</div>
      </div>
    </Card.Header>

    <Card.Body>{children}</Card.Body>
  </Card>
)

export default QuestionTemplate
