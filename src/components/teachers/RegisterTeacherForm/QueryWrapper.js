import { useHistory } from 'react-router-dom'

import { useRegisterMutation } from 'api/teachers'
import { useFilteredQuery as useDisciplinesQuery } from 'api/disciplines'

import RegisterTeacherForm from './Presentation'

const QueryWrapper = () => {
  const history = useHistory()

  const { register } = useRegisterMutation({ onSuccess: () => history.push('/teachers') })

  const { isLoading, disciplines } = useDisciplinesQuery()

  const onSubmit = (teacher, { setErrors }) => {
    register(teacher, { onValidationError: setErrors })
  }

  return (
    <RegisterTeacherForm
      isLoading={isLoading}
      disciplines={disciplines}
      onCancel={() => history.push('/teachers')}
      onSubmit={onSubmit}
    />
  )
}

export default QueryWrapper
