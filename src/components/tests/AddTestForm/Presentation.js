import { Formik, Form } from 'formik'
import { object, string } from 'yup'

import Button from 'react-bootstrap/Button'
import { Input, Dropdown } from 'components/common/controls/formik'
import { Loadable } from 'components/common'

import { title } from 'validation/test'

const schema = object().shape({
  title: title().required('Укажите название теста'),
  disciplineId: string().required('Укажите дисциплину'),
})

const AddTestForm = ({
  isLoading,
  defaults: { disciplineId: defaultDisciplineId } = {},
  disciplines = {},
  onCancel: cancel,
  onSubmit,
  ...props
}) => (
  <Loadable loaded={!isLoading}>
    <div {...props}>
      <h2 className="mb-5">Добавление теста</h2>
      <Formik
        initialValues={{ title: '', disciplineId: defaultDisciplineId ?? '' }}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        <Form>
          <Input className="my-4" label="Название теста" name="title" />
          <Dropdown className="my-4" label="Дисциплина" name="disciplineId" items={disciplines} />

          <div className="d-flex justify-content-between mt-5">
            <Button onClick={() => cancel()} variant="outline-primary">
              Отменить
            </Button>
            <Button type="submit">Добавить</Button>
          </div>
        </Form>
      </Formik>
    </div>
  </Loadable>
)

export default AddTestForm
