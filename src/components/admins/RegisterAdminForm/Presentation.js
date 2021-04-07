import { Formik, Form } from 'formik'
import Button from 'react-bootstrap/Button'
import { Input, PasswordInput } from 'components/common/controls/formik'

import { object } from 'yup'
import { password, username } from 'validation/user'

const initialValues = { username: '', password: '' }

const schema = object().shape({
  username: username().required('Укажите имя пользователя'),
  password: password().required('Укажите пароль пользователя'),
})

const RegisterAdminForm = ({ onCancel: cancel, onSubmit, ...props }) => (
  <div {...props}>
    <h2 className="mb-5">Регистрация студента</h2>
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={onSubmit}>
      <Form>
        <Input className="my-4" label="Имя пользователя" name="username" />
        <PasswordInput className="my-4" label="Пароль пользователя" name="password" />

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

export default RegisterAdminForm
