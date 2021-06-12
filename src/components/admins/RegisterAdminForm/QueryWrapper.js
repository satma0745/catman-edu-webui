import { useHistory } from 'react-router-dom'
import { useRegisterMutation } from 'api/admins'

import RegisterAdminForm from './Presentation'

const QueryWrapper = () => {
  const history = useHistory()

  const { register } = useRegisterMutation({ onSuccess: () => history.push('/admins') })

  const onSubmit = (admin, { setErrors }) => {
    register(admin, { onValidationError: setErrors })
  }

  return <RegisterAdminForm onCancel={() => history.push('/admins')} onSubmit={onSubmit} />
}

export default QueryWrapper
