import { Formik, Form } from 'formik'
import Button from 'react-bootstrap/Button'
import { Input, PasswordInput } from 'components/common/controls/formik'

import { object } from 'yup'
import { password, username, fullName } from 'validation/user'

const initialValues = { username: '', password: '', fullName: '' }

const schema = object().shape({
  username: username().required('Укажите имя пользователя'),
  fullName: fullName().required('Укажите ФИО преподавателя'),
  password: password().required('Укажите пароль пользователя'),
})

const RegisterTeacherForm = ({ onCancel: cancel, onSubmit, ...props }) => (
  <div {...props}>
    <h2 className="mb-5">Регистрация преподавателя</h2>
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={onSubmit}>
      <Form>
        <Input className="my-4" label="Имя пользователя" name="username" />
        <PasswordInput className="my-4" label="Пароль пользователя" name="password" />
        <Input className="my-4" label="ФИО преподавателя" name="fullName" />

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

export default RegisterTeacherForm
