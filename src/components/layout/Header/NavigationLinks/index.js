import { useAuth } from 'auth'

import AdminVersion from './AdminVersion'
import StudentVersion from './StudentVersion'
import TeacherVersion from './TeacherVersion'

const NavigationLinks = () => {
  const [userInfo] = useAuth()

  if (!userInfo) return <div className="mr-auto" />

  switch (userInfo.role) {
    case 'Admin':
      return <AdminVersion />
    case 'Student':
      return <StudentVersion student={userInfo} />
    case 'Teacher':
      return <TeacherVersion />
    default:
      throw new Error('Unknown role')
  }
}

export default NavigationLinks
