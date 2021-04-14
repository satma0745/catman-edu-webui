import { FieldArray, useFormikContext } from 'formik'
import { array, object } from 'yup'
import { itemText } from 'validation/question'
import { Checkbox, Input } from 'components/common/controls/formik'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import EditQuestionTemplate from './EditQuestionTemplate'

const AnswerOptions = () => {
  const { values } = useFormikContext()

  return (
    <FieldArray
      name="answerOptions"
      render={({ remove, push }) => (
        <div className="px-4">
          <ListGroup variant="flush">
            {values.answerOptions.map(({ id }, index) => (
              <ListGroup.Item key={id} className="px-0 py-4">
                <Input label="Текст ответа" name={`answerOptions[${index}].text`} />
                <Checkbox
                  className="mb-0"
                  label="Правильный ответ"
                  name={`answerOptions[${index}].isCorrect`}
                />

                <div className="d-flex justify-content-center">
                  <Button variant="outline-danger" size="sm" onClick={() => remove(index)}>
                    Удалить вариант ответа
                  </Button>
                </div>
              </ListGroup.Item>
            ))}

            <ListGroup.Item className="px-0 py-4">
              <div className="d-flex justify-content-center">
                <Button
                  onClick={() =>
                    push({
                      id: `new-${values.answerOptions.length}th-answer-option`,
                      text: '',
                      isCorrect: false,
                    })
                  }
                >
                  Добавить вариант ответа
                </Button>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </div>
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
    <AnswerOptions />
  </EditQuestionTemplate>
)

export default EditChoiceQuestion
