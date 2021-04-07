import { useHistory } from 'react-router-dom'
import { useSingleQuery, useSaveMutation } from 'api/students'

import EditStudentForm from './Presentation'

const QueryWrapper = ({ id }) => {
  const history = useHistory()

  const { isLoading, student: existingStudent } = useSingleQuery(id, {
    onNotFoundError: () => history.push('/notfound'),
  })
  const initialValues = () => ({ ...existingStudent, password: '' })

  const { save } = useSaveMutation(id, { onSuccess: () => history.push('/students') })
  const onSubmit = (student, { setErrors }) => {
    const patchedStudent = { ...existingStudent, ...student }
    save(patchedStudent, { onValidationError: setErrors })
  }

  const cancel = () => {
    history.push('/students')
  }

  return (
    <EditStudentForm
      isLoading={isLoading}
      initialValues={initialValues()}
      onCancel={cancel}
      onSubmit={onSubmit}
    />
  )
}

export default QueryWrapper
