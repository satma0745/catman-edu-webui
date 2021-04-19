import { Redirect, useHistory, useParams } from 'react-router-dom'
import { useAuth } from 'auth'

import { DisciplinesList } from 'components/testing'

const StudentDisciplinesPage = () => {
  const history = useHistory()
  const { studentId } = useParams()

  return (
    <>
      <h1>Страница тестирования - Выбор дисциплины</h1>
      <DisciplinesList
        className="my-4"
        studentId={studentId}
        onSelect={(disciplineId) => {
          const params = `studentId=${studentId}&disciplineId=${disciplineId}`
          history.push(`/testing/results/student-discipline?${params}`)
        }}
      />
    </>
  )
}

const AccessCheckWrapper = () => {
  const { studentId } = useParams()
  const [userInfo] = useAuth()

  return userInfo.role === 'Admin' || userInfo.id === studentId ? (
    <StudentDisciplinesPage />
  ) : (
    <Redirect to="/home" />
  )
}

export default AccessCheckWrapper
