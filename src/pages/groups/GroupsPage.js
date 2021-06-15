import { useHistory } from 'react-router-dom'
import { useAuth } from 'auth'

import Button from 'react-bootstrap/Button'
import { GroupsTable } from 'components/groups'

const GroupsPage = () => {
  const history = useHistory()
  const [userInfo] = useAuth()

  return (
    <>
      <h1>Группы</h1>
      <GroupsTable className="my-4" />

      {userInfo.role === 'Admin' && (
        <div className="d-flex justify-content-center">
          <Button onClick={() => history.push('/groups/add')}>Добавить группу</Button>
        </div>
      )}
    </>
  )
}

export default GroupsPage
