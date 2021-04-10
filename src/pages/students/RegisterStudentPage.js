import { useSearch } from 'routing/utils'
import { RegisterStudentForm } from 'components/students'

const RegisterStudentPage = () => {
  const [params] = useSearch()
  const { groupId } = params

  return <RegisterStudentForm defaultGroupId={groupId} />
}

export default RegisterStudentPage
