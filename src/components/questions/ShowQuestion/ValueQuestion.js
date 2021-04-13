import Card from 'react-bootstrap/Card'
import QuestionTemplate from './QuestionTemplate'

const ValueQuestion = ({ cost, text, correctAnswer, onEdit: edit, onDelete: $delete }) => (
  <QuestionTemplate cost={cost} text={text} onEdit={edit} onDelete={$delete}>
    <Card.Text className="m-4">
      Правильный ответ: <span className="text-primary">{correctAnswer}</span>
    </Card.Text>
  </QuestionTemplate>
)

export default ValueQuestion
