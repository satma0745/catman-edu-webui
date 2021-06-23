import { useHistory } from 'react-router-dom'
import { useAllQuery } from 'api/groups'

import { Loadable } from 'components/common'
import GroupsTable from './Presentation'

const QueryWrapper = (props) => {
  const history = useHistory()
  const { isLoading, groups } = useAllQuery()

  return (
    <Loadable loaded={!isLoading}>
      <GroupsTable
        {...props}
        groups={groups}
        onStudents={(groupId) => history.push(`/students?groupId=${groupId}`)}
      />
    </Loadable>
  )
}

export default QueryWrapper
