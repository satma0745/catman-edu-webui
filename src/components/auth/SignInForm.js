import { Formik, Form } from 'formik'
import { object, string } from 'yup'

import Button from 'react-bootstrap/Button'
import Input from '../common/controls/Input'

const initial = { username: '', password: '' }

const schema = object().shape({
  username: string().required('Username required'),
  password: string().required('Password required'),
})

const SignInForm = ({ onSignIn }) => (
  <Formik initialValues={initial} validationSchema={schema} onSubmit={onSignIn}>
    <Form>
      <Input label="Username" name="username" />
      <Input label="Password" name="password" type="password" />

      <Button type="submit">Sign in</Button>
    </Form>
  </Formik>
)

export default SignInForm
