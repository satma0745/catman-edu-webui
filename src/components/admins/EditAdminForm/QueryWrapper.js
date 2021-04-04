import { useHistory } from 'react-router-dom'
import { useSingleQuery, useSaveMutation } from 'api/admins'

import EditAdminForm from './Presentation'

const QueryWrapper = ({ id }) => {
  const history = useHistory()

  const { isLoading, admin: existingAdmin } = useSingleQuery(id, {
    onNotFoundError: () => history.push('/notfound'),
  })
  const initialValues = () => ({ ...existingAdmin, password: '' })

  const { save } = useSaveMutation(id, { onSuccess: () => history.push('/admins') })
  const onSubmit = (admin, { setErrors }) => {
    const patchedAdmin = { ...existingAdmin, ...admin }
    save(patchedAdmin, { onValidationError: setErrors })
  }

  const cancel = () => {
    history.push('/admins')
  }

  return (
    <EditAdminForm
      isLoading={isLoading}
      initialValues={initialValues()}
      onCancel={cancel}
      onSubmit={onSubmit}
    />
  )
}

export default QueryWrapper
