import { FieldArray, useFormikContext } from 'formik'
import { array, object } from 'yup'
import { itemText } from 'validation/question'
import EditQuestionTemplate from '../EditQuestionTemplate'

import AnswerOptions from './AnswerOptions'

const AnswerOptionsFormikWrapper = () => {
  const { values } = useFormikContext()

  const newAnswerOption = () => ({
    id: `new-${values.answerOptions.length}th-answer-option`,
    text: '',
    isCorrect: false,
  })

  return (
    <FieldArray
      name="answerOptions"
      render={(helpers) => (
        <AnswerOptions {...helpers} {...values} newAnswerOption={newAnswerOption} />
      )}
    />
  )
}

const EditChoiceQuestion = ({ oldQuestion, onCancel: cancel, onSave: save }) => (
  <EditQuestionTemplate
    initialValues={oldQuestion}
    validationSchema={{
      answerOptions: array().of(
        object().shape({ text: itemText().required('Укажите текст ответа') })
      ),
    }}
    onCancel={cancel}
    onSave={save}
  >
    <AnswerOptionsFormikWrapper />
  </EditQuestionTemplate>
)

export default EditChoiceQuestion
