import { useLocation } from 'react-router-dom'
import { RegisterStudentForm } from 'components/students'

const RegisterStudentPage = () => {
  const { search } = useLocation()

  const params = new URLSearchParams(search)
  const groupId = params.get('groupId')

  return <RegisterStudentForm defaultGroupId={groupId} />
}

export default RegisterStudentPage
