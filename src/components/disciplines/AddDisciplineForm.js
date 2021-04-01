import { Formik, Form } from 'formik'
import { object, string, number } from 'yup'

import Button from 'react-bootstrap/Button'
import { Input } from '../common/controls'

const initialValues = { title: '', grade: '' }

const schema = object().shape({
  title: string()
    .required('Введите название дисциплины')
    .max(30, 'Название дисциплины должно быть не длиннее 30 симоволов'),
  grade: number()
    .typeError('Номер класса должен быть числом')
    .required('Укажите номер класса')
    .integer('Номер класса должен быть целым числом')
    .min(1, 'Номер класса не может быть меньше 1')
    .max(11, 'Номер класса не может быть больше 11'),
})

const AddDisciplineForm = ({ className, onCancel, onSubmit }) => (
  <div className={className}>
    <h2 className="mb-5">Добавление дисциплины</h2>
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={onSubmit}>
      <Form>
        <Input className="my-4" label="Название дисциплины" name="title" />
        <Input className="my-4" label="Номер класса" name="grade" />

        <div className="d-flex justify-content-between mt-5">
          <Button onClick={() => onCancel()} variant="outline-primary">
            Отменить
          </Button>
          <Button type="submit">Добавить</Button>
        </div>
      </Form>
    </Formik>
  </div>
)

export default AddDisciplineForm
