import { itemText } from 'validation/question'
import { Input } from 'components/common/controls/formik'
import EditQuestionTemplate from './EditQuestionTemplate'

const EditValueQuestion = ({ oldQuestion, onCancel: cancel, onSave: save }) => (
  <EditQuestionTemplate
    initialValues={oldQuestion}
    validationSchema={{ correctAnswer: itemText().required('Укажите правильный ответ') }}
    onCancel={cancel}
    onSave={save}
  >
    <Input className="m-4" label="Правильный ответ" name="correctAnswer" />
  </EditQuestionTemplate>
)

export default EditValueQuestion
