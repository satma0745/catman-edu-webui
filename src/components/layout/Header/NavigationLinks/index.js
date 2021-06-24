import { useAuth } from 'auth'

import AdminVersion from './AdminVersion'
import StudentVersion from './StudentVersion'
import TeacherVersion from './TeacherVersion'

const NavigationLinks = ({ className, ...props }) => {
  const [userInfo] = useAuth()

  if (!userInfo) return <div {...props} className={`mr-auto ${className}`} />

  switch (userInfo.role) {
    case 'Admin':
      return <AdminVersion {...props} className={className} />
    case 'Student':
      return <StudentVersion {...props} className={className} student={userInfo} />
    case 'Teacher':
      return <TeacherVersion {...props} className={className} />
    default:
      throw new Error(`"${userInfo.role}" users should not have access to this component`)
  }
}

export default NavigationLinks
