import { Formik, Form } from 'formik'
import { Input } from 'components/common/controls/formik'

import { object } from 'yup'
import { text, cost, itemText } from 'validation/question'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ValueQuestion = ({ onCancel: cancel, onSave: save, ...props }) => (
  <Formik
    initialValues={{ text: '', cost: 0, correctAnswer: '' }}
    validationSchema={object().shape({
      text: text().required('Укажите текст вопроса'),
      cost: cost().required('Укажите стоимость вопроса'),
      correctAnswer: itemText().required('Укажите правильный ответ'),
    })}
    onSubmit={save}
  >
    <Form {...props}>
      <Card>
        <Card.Header>
          <Input label="Стоимость" name="cost" />
          <Input label="Текст" name="text" />
        </Card.Header>

        <Card.Body>
          <Input label="Правильный ответ" name="correctAnswer" />
        </Card.Body>

        <Card.Footer>
          <div className="d-flex justify-content-between">
            <Button variant="outline-danger" onClick={() => cancel()}>
              Удалить
            </Button>

            <Button variant="primary" type="submit">
              Сохранить
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </Form>
  </Formik>
)

export default ValueQuestion
