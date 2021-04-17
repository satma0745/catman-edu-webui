import { useFormikContext } from 'formik'
import ListGroup from 'react-bootstrap/ListGroup'
import Question from './Question'

const QuestionsList = (props) => {
  const { values } = useFormikContext()

  return (
    <ListGroup variant="flush" {...props}>
      {values.questions
        .sort((left, right) => left.cost - right.cost)
        .map((question, index) => (
          <ListGroup.Item key={question.id}>
            <Question name={`questions[${index}]`} question={question} />
          </ListGroup.Item>
        ))}
    </ListGroup>
  )
}

export default QuestionsList
