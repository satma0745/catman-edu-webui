import { useAddMutation } from 'api/questions'
import AddQuestion from './Presentation'

const QueryWrapper = ({ question, testId, onCancel, onSave: onAfterSave, ...props }) => {
  const { add } = useAddMutation({ onSuccess: onAfterSave })

  const onSave = (newQuestion, { setErrors }) => {
    add({ ...newQuestion, type: question.type, testId }, { onValidationError: setErrors })
  }

  return <AddQuestion {...props} question={question} onCancel={onCancel} onSave={onSave} />
}

export default QueryWrapper
