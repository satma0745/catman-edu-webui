import { Redirect, useHistory } from 'react-router-dom'
import { useSearch } from 'routing/utils'
import { useAuth } from 'auth'

import { useSingleQuery as useStudentQuery } from 'api/students'
import { useSingleQuery as useGroupQuery } from 'api/groups'
import { useSingleQuery as useDisciplineQuery } from 'api/disciplines'

import Button from 'react-bootstrap/Button'
import { Loadable } from 'components/common'
import { StudentDiscipline } from 'components/testing-results'

const StudentDisciplinePage = () => {
  const history = useHistory()
  const [{ studentId, disciplineId }] = useSearch()

  const { isSuccess: studentLoaded, student } = useStudentQuery(studentId, {
    onNotFoundError: () => history.push('/notfound'),
  })

  const { isSuccess: groupLoaded, group } = useGroupQuery(student?.groupId, {
    onNotFoundError: () => history.push('/notfound'),
    enabled: studentLoaded,
  })

  const { isSuccess: disciplineLoaded, discipline } = useDisciplineQuery(disciplineId, {
    onNotFoundError: () => history.push('/notfound'),
  })

  return (
    <>
      <Loadable loaded={studentLoaded && groupLoaded}>
        <h1>
          Успеваемость учащегося {student?.fullName} ({group?.title})
        </h1>
      </Loadable>
      <Loadable loaded={disciplineLoaded}>
        <h3>
          По дисциплине &quot;{discipline?.title} ({discipline?.grade}й год обучения)&quot;
        </h3>
      </Loadable>

      <StudentDiscipline className="my-4" studentId={studentId} disciplineId={disciplineId} />

      <Button
        variant="outline-primary"
        onClick={() => history.push(`/testing/results/student/${studentId}`)}
      >
        Назад
      </Button>
    </>
  )
}

const AccessCheckWrapper = () => {
  const [{ studentId }] = useSearch()
  const [userInfo] = useAuth()

  return userInfo.role === 'Admin' || userInfo.id === studentId ? (
    <StudentDisciplinePage />
  ) : (
    <Redirect to="/home" />
  )
}

export default AccessCheckWrapper
