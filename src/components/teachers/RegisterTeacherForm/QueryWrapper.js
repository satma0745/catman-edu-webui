import { useHistory } from 'react-router-dom'
import { useRegisterMutation } from 'api/teachers'

import RegisterTeacherForm from './Presentation'

const QueryWrapper = () => {
  const history = useHistory()

  const { register } = useRegisterMutation({ onSuccess: () => history.push('/teachers') })

  const onSubmit = (teacher, { setErrors }) => {
    register(teacher, { onValidationError: setErrors })
  }

  return <RegisterTeacherForm onCancel={() => history.push('/teachers')} onSubmit={onSubmit} />
}

export default QueryWrapper
