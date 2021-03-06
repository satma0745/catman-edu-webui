import { useAuth } from 'auth'
import { GroupsPage, TestingDisciplinesPage } from 'pages'

const HomeSwitch = () => {
  const [{ role }] = useAuth()

  switch (role) {
    case 'Admin':
    case 'Teacher':
      return <GroupsPage />
    case 'Student':
      return <TestingDisciplinesPage />
    default:
      throw new Error(`"${role}" users should not have access to this component`)
  }
}

export default HomeSwitch
