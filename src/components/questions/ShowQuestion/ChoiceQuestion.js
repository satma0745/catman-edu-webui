import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import QuestionTitle from './QuestionTitle'

const ChoiceQuestion = ({ cost, text, answerOptions = [] }) => (
  <Card style={{ overflow: 'hidden' }}>
    <Card.Header>
      <QuestionTitle text={text} cost={cost} />
    </Card.Header>

    <Card.Body className="p-0">
      <ListGroup variant="flush">
        {answerOptions.map(({ id, text: optionText, isCorrect }) => (
          <ListGroup.Item key={id} style={{ backgroundColor: isCorrect ? '#e0ffe8' : '#ffedf8' }}>
            {optionText}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card.Body>
  </Card>
)

export default ChoiceQuestion
