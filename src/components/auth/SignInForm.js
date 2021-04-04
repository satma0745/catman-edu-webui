import { Formik, Form } from 'formik'
import { object, string } from 'yup'

import Button from 'react-bootstrap/Button'
import { Input, PasswordInput } from 'components/common/controls/formik'

const initial = { username: '', password: '' }

const schema = object().shape({
  username: string().required('Введите логин'),
  password: string().required('Введите пароль'),
})

const SignInForm = ({ className, onSubmit }) => (
  <div className={className}>
    <h1 className="mb-5">Войти</h1>
    <Formik initialValues={initial} validationSchema={schema} onSubmit={onSubmit}>
      <Form>
        <Input className="my-4" label="Логин" name="username" />
        <PasswordInput className="my-4" label="Пароль" name="password" />

        <div className="mt-5">
          <Button type="submit">Войти</Button>
        </div>
      </Form>
    </Formik>
  </div>
)

export default SignInForm
