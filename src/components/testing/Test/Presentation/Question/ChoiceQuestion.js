import { FieldArray } from 'formik'
import ListGroup from 'react-bootstrap/ListGroup'
import { Checkbox } from 'components/common/controls/formik'
import QuestionTemplate from './QuestionTemplate'

const AnswerOptions = ({ questionName, answerOptions, ...props }) => (
  <ListGroup variant="flush" {...props}>
    {answerOptions.map(({ id, text }, index) => (
      <ListGroup.Item key={id} className="px-4 py-3">
        <Checkbox
          className="mb-0"
          label={text}
          name={`${questionName}.answerOptions[${index}].selected`}
        />
      </ListGroup.Item>
    ))}
  </ListGroup>
)

const ChoiceQuestion = ({ name, question, ...props }) => (
  <QuestionTemplate {...props} question={question}>
    <FieldArray
      name={`${name}.answerOptions`}
      render={() => <AnswerOptions questionName={name} answerOptions={question.answerOptions} />}
    />
  </QuestionTemplate>
)

export default ChoiceQuestion
