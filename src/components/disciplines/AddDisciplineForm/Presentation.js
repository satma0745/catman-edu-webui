import { Formik, Form } from 'formik'
import { object } from 'yup'

import Button from 'react-bootstrap/Button'
import { Input } from 'components/common/controls/formik'

import { grade, title } from 'validation/discipline'

const schema = object().shape({
  title: title().required('Введите название дисциплины'),
  grade: grade().required('Укажите год обучения'),
})

const AddDisciplineForm = ({ defaultGrade, onCancel: cancel, onSubmit, ...props }) => (
  <div {...props}>
    <h2 className="mb-5">Добавление дисциплины</h2>
    <Formik
      initialValues={{ title: '', grade: defaultGrade ?? '' }}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      <Form>
        <Input className="my-4" label="Название дисциплины" name="title" />
        <Input className="my-4" label="Год обучения" name="grade" />

        <div className="d-flex justify-content-between mt-5">
          <Button onClick={() => cancel()} variant="outline-primary">
            Вернуться к списку дисциплин
          </Button>
          <Button type="submit">Добавить</Button>
        </div>
      </Form>
    </Formik>
  </div>
)

export default AddDisciplineForm
