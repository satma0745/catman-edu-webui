import { itemText } from 'validation/question'

import { Input } from 'components/common/controls/formik'
import AddQuestionTemplate from './AddQuestionTemplate'

const ValueQuestion = ({ onCancel, onSave, ...props }) => (
  <AddQuestionTemplate
    {...props}
    initialValues={{ correctAnswer: '' }}
    validationSchema={{ correctAnswer: itemText().required('Укажите правильный ответ') }}
    onCancel={onCancel}
    onSave={onSave}
  >
    <Input label="Правильный ответ" name="correctAnswer" />
  </AddQuestionTemplate>
)

export default ValueQuestion
