import { Formik, Form } from 'formik'
import { Input } from 'components/common/controls/formik'

import { object } from 'yup'
import { text, cost } from 'validation/question'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ValueQuestion = ({
  initialValues,
  validationSchema = {},
  onCancel: cancel,
  onSave: save,
  children,
  ...props
}) => (
  <Formik
    initialValues={{ text: '', cost: 0, ...initialValues }}
    validationSchema={object().shape({
      text: text().required('Укажите текст вопроса'),
      cost: cost().required('Укажите стоимость вопроса'),
      ...validationSchema,
    })}
    onSubmit={save}
  >
    <Form {...props}>
      <Card>
        <Card.Header>
          <Input label="Стоимость" name="cost" />
          <Input label="Текст" name="text" />
        </Card.Header>

        <Card.Body>{children}</Card.Body>

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
