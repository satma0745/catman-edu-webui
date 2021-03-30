import { Formik, Form } from 'formik'
import { object, string } from 'yup'

import Button from 'react-bootstrap/Button'
import { Input, PasswordInput } from '../common/controls'

const initial = { username: '', password: '' }

const schema = object().shape({
  username: string().required('Введите логин'),
  password: string().required('Введите пароль'),
})

const SignInForm = ({ onSignIn }) => (
  <Formik initialValues={initial} validationSchema={schema} onSubmit={onSignIn}>
    <Form>
      <Input label="Логин" name="username" />
      <PasswordInput label="Пароль" name="password" />

      <Button type="submit">Войти</Button>
    </Form>
  </Formik>
)

export default SignInForm
