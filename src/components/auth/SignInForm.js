import { Formik, Form } from 'formik'
import { object, string } from 'yup'

import Button from 'react-bootstrap/Button'
import { Input, PasswordInput } from '../common/controls'

const initial = { username: '', password: '' }

const schema = object().shape({
  username: string().required('Username required'),
  password: string().required('Password required'),
})

const SignInForm = ({ onSignIn }) => (
  <Formik initialValues={initial} validationSchema={schema} onSubmit={onSignIn}>
    <Form>
      <Input label="Username" name="username" />
      <PasswordInput label="Password" name="password" />

      <Button type="submit">Sign in</Button>
    </Form>
  </Formik>
)

export default SignInForm
