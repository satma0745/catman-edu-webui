import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import QuestionTitle from './QuestionTitle'

const OrderQuestion = ({ cost, text, items = [], onDelete: $delete }) => (
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

    <Card.Footer className="d-flex justify-content-end">
      <Button variant="outline-danger" onClick={() => $delete()}>
        Удалить
      </Button>
    </Card.Footer>
  </Card>
)

export default OrderQuestion
