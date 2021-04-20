import { useHistory } from 'react-router-dom'

import { useSingleQuery as useStudentQuery } from 'api/students'
import { useSingleQuery as useGroupQuery } from 'api/groups'
import { useFilteredQuery as useDisciplinesQuery } from 'api/disciplines'
import { useStudentPerformanceQuery } from 'api/testing'

import DisciplinesList from './Presentation'

const QueryWrapper = ({ studentId, onSelect, ...props }) => {
  const history = useHistory()

  const { isSuccess: studentLoaded, student } = useStudentQuery(studentId, {
    onNotFoundError: () => history.push('/notfound'),
  })

  const { isSuccess: groupLoaded, group } = useGroupQuery(student?.groupId, {
    onNotFoundError: () => history.push('/notfound'),
    enabled: studentLoaded,
  })

  const { isSuccess: disciplinesLoaded, disciplines } = useDisciplinesQuery(
    { grade: group?.grade },
    { enabled: groupLoaded }
  )

  const { isSuccess: performanceLoaded, performance } = useStudentPerformanceQuery(studentId, {
    onNotFoundError: () => history.push('/notfound'),
  })

  return (
    <DisciplinesList
      {...props}
      isLoading={!disciplinesLoaded && !performanceLoaded}
      disciplines={disciplines}
      performance={performance}
      onSelect={onSelect}
    />
  )
}

export default QueryWrapper
