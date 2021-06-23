import { useAuth } from 'auth'

import DisciplinesTableForAdmins from './DisciplinesTableForAdmins'
import DisciplinesTableForTeachers from './DisciplinesTableForTeachers'

const RoleBasedSwitch = (props) => {
  const [userInfo] = useAuth()

  switch (userInfo.role) {
    case 'Admin':
      return <DisciplinesTableForAdmins {...props} />
    case 'Teacher':
      return <DisciplinesTableForTeachers {...props} />
    default:
      throw new Error(`"${userInfo.role}" users should not have access to this component`)
  }
}

export default RoleBasedSwitch
