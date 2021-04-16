import { Checkbox } from 'components/common/controls/formik'
import AddQuestionTemplate from './AddQuestionTemplate'

const ValueQuestion = ({ onCancel, onSave, ...props }) => (
  <AddQuestionTemplate
    {...props}
    initialValues={{ correctAnswer: false }}
    onCancel={onCancel}
    onSave={onSave}
  >
    <Checkbox label="Правильный ответ" name="correctAnswer" />
  </AddQuestionTemplate>
)

export default ValueQuestion
