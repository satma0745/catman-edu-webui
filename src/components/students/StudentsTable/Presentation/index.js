import { useAuth } from 'auth'

import AdminPresentation from './AdminPresentation'
import TeacherPresentation from './TeacherPresentation'

const PresentationSwitch = (props) => {
  const [userInfo] = useAuth()

  switch (userInfo.role) {
    case 'Admin':
      return <AdminPresentation {...props} />
    case 'Teacher':
      return <TeacherPresentation {...props} />
    default:
      throw new Error('Unknown role')
  }
}

export default PresentationSwitch
