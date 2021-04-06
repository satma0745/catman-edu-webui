import { Formik, Form } from 'formik'
import { object } from 'yup'

import Button from 'react-bootstrap/Button'
import { Input } from 'components/common/controls/formik'

import { grade, title } from 'validation/group'

const schema = object().shape({
  title: title().required('Введите название класса'),
  grade: grade().required('Укажите год обучения'),
})

const EditDisciplineForm = ({ initialValues, onCancel: cancel, onSubmit, ...props }) => (
  <div {...props}>
    <h2 className="mb-5">Редактирование класса</h2>
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={onSubmit}>
      <Form>
        <Input className="my-4" label="Название класса" name="title" />
        <Input className="my-4" label="Год обучения" name="grade" />

        <div className="d-flex justify-content-between mt-5">
          <Button onClick={() => cancel()} variant="outline-primary">
            Отменить
          </Button>
          <Button type="submit">Сохранить изменения</Button>
        </div>
      </Form>
    </Formik>
  </div>
)

export default EditDisciplineForm
