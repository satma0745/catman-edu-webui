import Card from 'react-bootstrap/Card'
import QuestionTemplate from './QuestionTemplate'

const YesNoQuestion = ({ cost, text, correctAnswer, onEdit: edit, onDelete: $delete }) => (
  <QuestionTemplate
    cost={cost}
    text={text}
    onEdit={edit}
    onDelete={$delete}
    contentBackground={correctAnswer ? '#e0ffe8' : '#ffedf8'}
  >
    <Card.Text className="m-4">Правильный ответ: {correctAnswer ? 'Да' : 'Нет'}</Card.Text>
  </QuestionTemplate>
)

export default YesNoQuestion
