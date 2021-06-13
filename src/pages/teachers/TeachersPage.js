import { useHistory } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import { TeachersTable } from 'components/teachers'

const TeachersPage = () => {
  const history = useHistory()

  return (
    <>
      <h1>Преподаватели</h1>

      <TeachersTable className="my-4" />

      <div className="d-flex justify-content-center">
        <Button onClick={() => history.push('teachers/register')}>
          Зарегистрировать нового преподавателя
        </Button>
      </div>
    </>
  )
}

export default TeachersPage
