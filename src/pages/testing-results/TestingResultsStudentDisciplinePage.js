import { useHistory } from 'react-router-dom'
import { useSearch } from 'routing/utils'

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
          Успеваемость студента {student?.fullName} ({group?.title} класс)
        </h1>
      </Loadable>
      <Loadable loaded={disciplineLoaded}>
        <h3>
          По дисциплине &quot;{discipline?.title} ({discipline?.grade}й класс)&quot;
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

export default StudentDisciplinePage
