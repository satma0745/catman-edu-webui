import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import QuestionTitle from './QuestionTitle'

const OrderQuestion = ({ cost, text, items = [] }) => (
  <Card style={{ overflow: 'hidden' }}>
    <Card.Header>
      <QuestionTitle text={text} cost={cost} />
    </Card.Header>

    <Card.Body className="p-0">
      <ListGroup variant="flush">
        {items
          .sort(({ index }) => index)
          .map(({ id, text: optionText }, index) => (
            <ListGroup.Item key={id}>
              <span className="text-primary">{index + 1}.</span>
              <span className="ml-1">{optionText}</span>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </Card.Body>
  </Card>
)

export default OrderQuestion
