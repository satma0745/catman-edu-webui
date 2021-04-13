import { Checkbox } from 'components/common/controls/formik'
import EditQuestionTemplate from './EditQuestionTemplate'

const EditYesNoQuestion = ({ oldQuestion, onCancel: cancel, onSave: save }) => (
  <EditQuestionTemplate initialValues={oldQuestion} onCancel={cancel} onSave={save}>
    <div className="m-4">
      <Checkbox label="Правильный ответ" name="correctAnswer" />
    </div>
  </EditQuestionTemplate>
)

export default EditYesNoQuestion
