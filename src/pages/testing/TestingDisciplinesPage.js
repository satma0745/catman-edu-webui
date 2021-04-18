import { useHistory } from 'react-router-dom'
import { useAuth } from 'auth'

import { DisciplinesList } from 'components/testing'

const TestingDisciplinesPage = () => {
  const history = useHistory()
  const [userInfo] = useAuth()

  return (
    <>
      <h1>Страница тестирования - Выбор дисциплины</h1>
      <DisciplinesList
        className="my-4"
        studentId={userInfo.id}
        onSelect={(disciplineId) => history.push(`/testing/discipline/${disciplineId}`)}
      />
    </>
  )
}

export default TestingDisciplinesPage
