import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import QuestionTitle from './QuestionTitle'

const ValueQuestion = ({ cost, text, correctAnswer, onDelete: $delete }) => (
  <Card style={{ overflow: 'hidden' }}>
    <Card.Header>
      <QuestionTitle text={text} cost={cost} />
    </Card.Header>

    <Card.Body>
      <Card.Text>
        Правильный ответ: <span className="text-primary">{correctAnswer}</span>
      </Card.Text>
    </Card.Body>

    <Card.Footer className="d-flex justify-content-end">
      <Button variant="outline-danger" onClick={() => $delete()}>
        Удалить
      </Button>
    </Card.Footer>
  </Card>
)

export default ValueQuestion
