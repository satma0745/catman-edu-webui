import { useHistory } from 'react-router-dom'
import {
  useSingleQuery as useTeacherQuery,
  useTaughtDisciplinesQuery,
  useSaveMutation,
} from 'api/teachers'

import EditTeacherForm from './Presentation'

const QueryWrapper = ({ id }) => {
  const history = useHistory()

  const { isLoading: teacherLoading, teacher: existingTeacher } = useTeacherQuery(id, {
    onNotFoundError: () => history.push('/notfound'),
  })

  const { isLoading: disciplinesLoading, disciplines } = useTaughtDisciplinesQuery(id, {
    onNotFoundError: () => history.push('/notfound'),
  })
  const initialValues = () => ({ ...existingTeacher, disciplines })

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
      isLoading={teacherLoading || disciplinesLoading}
      initialValues={initialValues()}
      onCancel={cancel}
      onSubmit={onSubmit}
    />
  )
}

export default QueryWrapper
