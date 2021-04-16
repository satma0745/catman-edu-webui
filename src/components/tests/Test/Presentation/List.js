import ListGroup from 'react-bootstrap/ListGroup'
import { AddQuestion, EditQuestion, ShowQuestion } from 'components/questions'

const Question = ({ status, question, onEdit: edit, ...props }) => {
  switch (status) {
    case 'add':
      return <AddQuestion {...props} question={question} />
    case 'edit':
      return <EditQuestion question={question} {...props} />
    case 'show':
      return <ShowQuestion {...question} onEdit={edit} {...props} />
    default:
      throw new Error(`Unknown question status "${status}"`)
  }
}

const List = ({ questions, getStatus, setStatus, ...props }) => (
  <ListGroup variant="flush" {...props}>
    {questions
      .sort((left, right) => left.cost - right.cost)
      .map((question) => (
        <ListGroup.Item key={question.id}>
          <Question
            status={getStatus(question.id)}
            question={question}
            onEdit={(questionId) => setStatus(questionId, 'edit')}
            onCancel={(questionId) => setStatus(questionId, 'show')}
            onSave={(questionId) => setStatus(questionId, 'show')}
          />
        </ListGroup.Item>
      ))}
  </ListGroup>
)

export default List
