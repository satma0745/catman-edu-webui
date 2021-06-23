import { useAuth } from 'auth'

import AdminVersion from './AdminVersion'
import TeacherVersion from './TeacherVersion'

const StudentsTable = (props) => {
  const [userInfo] = useAuth()

  switch (userInfo.role) {
    case 'Admin':
      return <AdminVersion {...props} />
    case 'Teacher':
      return <TeacherVersion {...props} />
    default:
      throw new Error('Unknown role')
  }
}

export default StudentsTable
