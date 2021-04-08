import { Formik, Form } from 'formik'
import Button from 'react-bootstrap/Button'
import { Dropdown, Input, PasswordInput } from 'components/common/controls/formik'

import { object, string } from 'yup'
import { password, username } from 'validation/user'
import { fullName } from 'validation/student'

import { Loadable } from 'components/common'

import './index.css'

const schema = object().shape({
  username: username().required('Укажите имя пользователя'),
  password: password().required('Укажите пароль пользователя'),
  fullName: fullName().required('Укажите ФИО студента'),
  groupId: string().required('Укажите класс'),
})

const RegisterStudentForm = ({
  isLoading,
  groups,
  defaultGroupId,
  onCancel: cancel,
  onSubmit,
  ...props
}) => (
  <Loadable loaded={!isLoading}>
    <div {...props}>
      <h2 className="mb-5">Регистрация студента</h2>
      <Formik
        initialValues={{ username: '', password: '', fullName: '', groupId: defaultGroupId ?? '' }}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        <Form>
          <Input className="my-4" label="Имя пользователя" name="username" />
          <PasswordInput className="my-4" label="Пароль пользователя" name="password" />
          <Input className="my-4" label="ФИО студента" name="fullName" />
          <Dropdown className="my-4" items={groups} label="Класс" name="groupId" />

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

export default RegisterStudentForm
