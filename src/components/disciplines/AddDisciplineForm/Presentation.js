import { Formik, Form } from 'formik'
import { object } from 'yup'

import Button from 'react-bootstrap/Button'
import { Input } from 'components/common/controls'

import { grade, title } from 'validation/discipline'

const initialValues = { title: '', grade: '' }

const schema = object().shape({
  title: title().required('Введите название дисциплины'),
  grade: grade().required('Укажите номер класса'),
})

const AddDisciplineForm = ({ onCancel: cancel, onSubmit, ...props }) => (
  <div {...props}>
    <h2 className="mb-5">Добавление дисциплины</h2>
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={onSubmit}>
      <Form>
        <Input className="my-4" label="Название дисциплины" name="title" />
        <Input className="my-4" label="Номер класса" name="grade" />

        <div className="d-flex justify-content-between mt-5">
          <Button onClick={() => cancel()} variant="outline-primary">
            Отменить
          </Button>
          <Button type="submit">Добавить</Button>
        </div>
      </Form>
    </Formik>
  </div>
)

export default AddDisciplineForm
