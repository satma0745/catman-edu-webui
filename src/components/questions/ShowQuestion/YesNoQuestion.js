import Card from 'react-bootstrap/Card'
import QuestionTitle from './QuestionTitle'

const YesNoQuestion = ({ cost, text, correctAnswer }) => (
  <Card style={{ overflow: 'hidden' }}>
    <Card.Header>
      <QuestionTitle text={text} cost={cost} />
    </Card.Header>

    <Card.Body style={{ backgroundColor: correctAnswer ? '#e0ffe8' : '#ffedf8' }}>
      <Card.Text>Правильный ответ: {correctAnswer ? 'Да' : 'Нет'}</Card.Text>
    </Card.Body>
  </Card>
)

export default YesNoQuestion
