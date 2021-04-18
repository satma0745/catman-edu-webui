import { useHistory } from 'react-router-dom'

import { useSingleQuery as useStudentQuery } from 'api/students'
import { useSingleQuery as useGroupQuery } from 'api/groups'
import { useFilteredQuery as useDisciplinesQuery } from 'api/disciplines'

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

  return (
    <DisciplinesList
      {...props}
      isLoading={!disciplinesLoaded}
      disciplines={disciplines}
      onSelect={onSelect}
    />
  )
}

export default QueryWrapper
