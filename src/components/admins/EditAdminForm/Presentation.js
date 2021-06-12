import { Formik, Form } from 'formik'
import Button from 'react-bootstrap/Button'
import { Input, PasswordInput } from 'components/common/controls/formik'

import { object } from 'yup'
import { password, username } from 'validation/user'

import { Loadable } from 'components/common'

const schema = object().shape({
  username: username().required('Укажите имя пользователя'),
  password: password().required('Укажите пароль пользователя'),
})

const EditAdminForm = ({ isLoading, initialValues, onCancel: cancel, onSubmit, ...props }) => (
  <Loadable loaded={!isLoading}>
    <div {...props}>
      <h2 className="mb-5">Редактирование аккаунта администратора</h2>
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={onSubmit}>
        <Form>
          <Input className="my-4" label="Имя пользователя" name="username" />
          <PasswordInput className="my-4" label="Пароль пользователя" name="password" />

          <div className="d-flex justify-content-between mt-5">
            <Button onClick={() => cancel()} variant="outline-primary">
              Отменить
            </Button>
            <Button type="submit">Сохранить изменения</Button>
          </div>
        </Form>
      </Formik>
    </div>
  </Loadable>
)

export default EditAdminForm
