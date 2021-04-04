import { useHistory } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import { AdminsTable } from 'components/admins'

const AdminsPage = () => {
  const history = useHistory()

  return (
    <>
      <h1>Страница управления админами</h1>
      <AdminsTable className="my-4" />
      <div className="d-flex justify-content-center">
        <Button onClick={() => history.push('admins/register')}>
          Зарегистрировать нового админа
        </Button>
      </div>
    </>
  )
}

export default AdminsPage
