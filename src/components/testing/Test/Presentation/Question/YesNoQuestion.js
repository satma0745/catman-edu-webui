import { Checkbox } from 'components/common/controls/formik'
import QuestionTemplate from './QuestionTemplate'

const YesNoQuestion = ({ name, question, ...props }) => (
  <QuestionTemplate {...props} question={question}>
    <Checkbox className="px-4 py-3 mb-0" label="Правильно" name={`${name}.givenAnswer`} />
  </QuestionTemplate>
)

export default YesNoQuestion
