import { FieldArray, useFormikContext } from 'formik'
import id from 'uniqid'

import { itemText } from 'validation/question'
import { array, object } from 'yup'

import AddQuestionTemplate from '../AddQuestionTemplate'
import AnswerOptions from './AnswerOptions'

const AnswerOptionsFormikWrapper = () => {
  const { values } = useFormikContext()

  const newAnswerOption = () => ({ id: id(), text: '', isCorrect: false })

  return (
    <FieldArray
      name="answerOptions"
      render={(helpers) => (
        <AnswerOptions helpers={helpers} values={values} newAnswerOption={newAnswerOption} />
      )}
    />
  )
}

const ChoiceQuestion = ({ onCancel, onSave, ...props }) => (
  <AddQuestionTemplate
    {...props}
    initialValues={{ answerOptions: [] }}
    validationSchema={{
      answerOptions: array().of(
        object().shape({ text: itemText().required('Укажите текст ответа') })
      ),
    }}
    onCancel={onCancel}
    onSave={onSave}
  >
    <AnswerOptionsFormikWrapper />
  </AddQuestionTemplate>
)

export default ChoiceQuestion
