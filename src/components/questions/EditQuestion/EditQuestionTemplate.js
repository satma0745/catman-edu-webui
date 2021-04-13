import { object } from 'yup'
import { cost, text } from 'validation/question'

import { Formik, Form } from 'formik'
import { Input } from 'components/common/controls/formik'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const EditQuestionTemplate = ({
  initialValues = {},
  validationSchema = {},
  onCancel: cancel,
  onSave: save,
  children,
}) => (
  <Formik
    initialValues={initialValues}
    validationSchema={object().shape({
      cost: cost().required('Укажите стоимость вопроса'),
      text: text().required('Укажите текст вопроса'),
      ...validationSchema,
    })}
    onSubmit={save}
  >
    <Form>
      <Card style={{ overflow: 'hidden' }}>
        <Card.Header>
          <Input label="Стоимость" name="cost" />
          <Input label="Текст" name="text" />
        </Card.Header>

        <Card.Body className="p-0">{children}</Card.Body>

        <Card.Footer className="d-flex justify-content-between">
          <Button variant="outline-primary" onClick={() => cancel()}>
            Отменить
          </Button>
          <Button type="submit" variant="primary">
            Сохранить изменения
          </Button>
        </Card.Footer>
      </Card>
    </Form>
  </Formik>
)

export default EditQuestionTemplate
