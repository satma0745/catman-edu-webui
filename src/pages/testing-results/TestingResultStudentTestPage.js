import { Redirect, useParams } from 'react-router-dom'
import { useAuth } from 'auth'
import { StudentTest } from 'components/testing-results'

const StudentTestPage = () => {
  const { studentId, testId } = useParams()

  return (
    <>
      <h1>Результаты прохождения теста</h1>

      <StudentTest className="my-4" studentId={studentId} testId={testId} />
    </>
  )
}

const AccessCheckWrapper = () => {
  const { studentId } = useParams()
  const [userInfo] = useAuth()

  return userInfo.role === 'Admin' || userInfo.role === 'Teacer' || userInfo.id === studentId ? (
    <StudentTestPage />
  ) : (
    <Redirect to="/home" />
  )
}

export default AccessCheckWrapper
