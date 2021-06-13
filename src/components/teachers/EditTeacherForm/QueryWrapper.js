import { useHistory } from 'react-router-dom'
import { useSingleQuery, useSaveMutation } from 'api/teachers'

import EditTeacherForm from './Presentation'

const QueryWrapper = ({ id }) => {
  const history = useHistory()

  const { isLoading, teacher: existingTeacher } = useSingleQuery(id, {
    onNotFoundError: () => history.push('/notfound'),
  })
  const initialValues = () => ({ ...existingTeacher, password: '' })

  const { save } = useSaveMutation(id, { onSuccess: () => history.push('/teachers') })
  const onSubmit = (teacher, { setErrors }) => {
    const patchedTeacher = { ...existingTeacher, ...teacher }
    save(patchedTeacher, { onValidationError: setErrors })
  }

  const cancel = () => {
    history.push('/teachers')
  }

  return (
    <EditTeacherForm
      isLoading={isLoading}
      initialValues={initialValues()}
      onCancel={cancel}
      onSubmit={onSubmit}
    />
  )
}

export default QueryWrapper
