import { useHistory } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import { StudentsTable } from 'components/students'

const DisciplinesPage = () => {
  const history = useHistory()

  return (
    <>
      <h1>Страница управления студентами</h1>

      <StudentsTable className="my-4" />

      <div className="d-flex justify-content-center">
        <Button onClick={() => history.push('students/register')}>
          Зарегистрировать нового студента
        </Button>
      </div>
    </>
  )
}

export default DisciplinesPage
