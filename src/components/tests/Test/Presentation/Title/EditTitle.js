import { Formik, Form } from 'formik'

import { title } from 'validation/test'
import { object } from 'yup'

import { Input } from 'components/common/controls/formik'
import Button from 'react-bootstrap/Button'

const EditTitle = ({ title: initialTitle, discipline, onSave, ...props }) => (
  <Formik
    initialValues={{ title: initialTitle }}
    validationSchema={object().shape({ title: title().required('Укажите название теста') })}
    onSubmit={onSave}
  >
    <Form {...props}>
      <Input label="Название теста" name="title" />

      <h4>
        По дисциплине &quot;{discipline.title}&quot; ({discipline.grade}й класс)
      </h4>

      <div className="d-flex justify-content-end">
        <Button type="submit" variant="primary">
          Сохранить
        </Button>
      </div>
    </Form>
  </Formik>
)

export default EditTitle
