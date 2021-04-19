import { useHistory } from 'react-router-dom'

import { useSingleQuery as useStudentQuery } from 'api/students'
import { useSingleQuery as useGroupQuery } from 'api/groups'
import { useSingleResultQuery as useTestingResultQuery } from 'api/testing'
import { useSingleQuery as useTestQuery } from 'api/tests'

import StudentTest from './Presentation'

const QueryWrapper = ({ studentId, testId, ...props }) => {
  const history = useHistory()

  const { isSuccess: studentLoaded, student } = useStudentQuery(studentId, {
    onNotFoundError: () => history.push('/notfound'),
  })

  const { isSuccess: groupLoaded, group } = useGroupQuery(student?.groupId, {
    onNotFoundError: () => history.push('/notfound'),
    enabled: studentLoaded,
  })

  const { isSuccess: resultLoaded, result } = useTestingResultQuery(
    { studentId, testId },
    { onNotFoundError: () => history.push('/notfound') }
  )

  const { isSuccess: testLoaded, test } = useTestQuery(testId, {
    onNotFoundError: () => history.push('/notfound'),
  })

  return (
    <StudentTest
      {...props}
      studentLoaded={studentLoaded}
      student={student}
      groupLoaded={groupLoaded}
      group={group}
      disciplineLoaded={testLoaded}
      discipline={test?.discipline}
      resultLoaded={resultLoaded}
      result={result}
    />
  )
}

export default QueryWrapper
