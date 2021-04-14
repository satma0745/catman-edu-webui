import ListGroup from 'react-bootstrap/ListGroup'
import QuestionTemplate from './QuestionTemplate'

const ChoiceQuestion = ({ cost, text, answerOptions = [], onEdit: edit, onDelete: $delete }) => (
  <QuestionTemplate cost={cost} text={text} onEdit={edit} onDelete={$delete}>
    <ListGroup variant="flush">
      {answerOptions.map(({ id, text: optionText, isCorrect }) => (
        <ListGroup.Item key={id} style={{ backgroundColor: isCorrect ? '#e0ffe8' : '#ffedf8' }}>
          {optionText}
        </ListGroup.Item>
      ))}
    </ListGroup>
  </QuestionTemplate>
)

export default ChoiceQuestion
