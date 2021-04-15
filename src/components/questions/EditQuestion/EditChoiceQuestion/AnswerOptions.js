import { Checkbox, Input } from 'components/common/controls/formik'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'

const AnswerOptions = ({ remove, push, answerOptions, newAnswerOption }) => (
  <div className="px-4">
    <ListGroup variant="flush">
      {answerOptions.map(({ id }, index) => (
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
          <Button onClick={() => push(newAnswerOption())}>Добавить вариант ответа</Button>
        </div>
      </ListGroup.Item>
    </ListGroup>
  </div>
)

export default AnswerOptions
