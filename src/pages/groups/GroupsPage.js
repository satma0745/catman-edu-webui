import { useHistory } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import { GroupsTable } from 'components/groups'

const GroupsPage = () => {
  const history = useHistory()

  return (
    <>
      <h1>Страница управления классами</h1>
      <GroupsTable className="my-4" />

      <div className="d-flex justify-content-center">
        <Button onClick={() => history.push('/groups/add')}>Добавить группу</Button>
      </div>
    </>
  )
}

export default GroupsPage
