import { Input } from 'components/common/controls/formik'
import QuestionTemplate from './QuestionTemplate'

const ValueQuestion = ({ name, question, ...props }) => (
  <QuestionTemplate {...props} question={question}>
    <Input className="px-4 py-3 mb-0" label="Ответ" name={`${name}.givenAnswer`} validate={false} />
  </QuestionTemplate>
)

export default ValueQuestion
