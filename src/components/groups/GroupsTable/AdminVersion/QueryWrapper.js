import { useHistory } from 'react-router-dom'
import { useAllQuery, useDeleteMutation } from 'api/groups'

import { Loadable } from 'components/common'
import GroupsTable from './Presentation'

const QueryWrapper = (props) => {
  const history = useHistory()

  const { isLoading, groups } = useAllQuery()
  const { $delete } = useDeleteMutation()

  return (
    <Loadable loaded={!isLoading}>
      <GroupsTable
        {...props}
        groups={groups}
        onStudents={(groupId) => history.push(`/students?groupId=${groupId}`)}
        onEdit={(id) => history.push(`/groups/edit/${id}`)}
        onDelete={$delete}
      />
    </Loadable>
  )
}

export default QueryWrapper
