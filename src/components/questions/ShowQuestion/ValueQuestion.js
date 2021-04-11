import Card from 'react-bootstrap/Card'
import QuestionTitle from './QuestionTitle'

const ValueQuestion = ({ cost, text, correctAnswer }) => (
  <Card style={{ overflow: 'hidden' }}>
    <Card.Header>
      <QuestionTitle text={text} cost={cost} />
    </Card.Header>

    <Card.Body>
      <Card.Text>
        Правильный ответ: <span className="text-primary">{correctAnswer}</span>
      </Card.Text>
    </Card.Body>
  </Card>
)

export default ValueQuestion
