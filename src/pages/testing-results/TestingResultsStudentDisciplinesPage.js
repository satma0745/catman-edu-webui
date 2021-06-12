import { Redirect, useHistory, useParams } from 'react-router-dom'
import { useAuth } from 'auth'

import { useSingleQuery as useStudentQuery } from 'api/students'
import { useSingleQuery as useGroupQuery } from 'api/groups'

import { Loadable } from 'components/common'
import { DisciplinesList } from 'components/testing-results'

const StudentDisciplinesPage = () => {
  const history = useHistory()
  const { studentId } = useParams()

  const { isSuccess: studentLoaded, student } = useStudentQuery(studentId, {
    onNotFoundError: () => history.push('/notfound'),
  })
  const { isSuccess: groupLoaded, group } = useGroupQuery(student?.groupId, {
    enabled: studentLoaded,
  })

  return (
    <>
      <h1>Успеваемость</h1>

      <h3>
        <Loadable loaded={studentLoaded && groupLoaded}>
          {student?.fullName} ({group?.title})
        </Loadable>
      </h3>

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
