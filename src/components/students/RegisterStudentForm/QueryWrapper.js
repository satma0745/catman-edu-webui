import { useHistory } from 'react-router-dom'

import { useAllQuery as useGroupsQuery } from 'api/groups'
import { useRegisterMutation } from 'api/students'

import RegisterStudentForm from './Presentation'

const QueryWrapper = ({ defaultGroupId }) => {
  const history = useHistory()

  const { isLoading, groups } = useGroupsQuery()
  const { register } = useRegisterMutation({ onSuccess: () => history.push('/students') })

  const groupsList = () => groups?.reduce((list, { id, title }) => ({ ...list, [id]: title }), {})

  const onSubmit = (student, { setErrors }) => {
    register(student, { onValidationError: setErrors })
  }

  return (
    <RegisterStudentForm
      isLoading={isLoading}
      groups={groupsList()}
      defaultGroupId={defaultGroupId}
      onCancel={() => history.push('/students')}
      onSubmit={onSubmit}
    />
  )
}

export default QueryWrapper
