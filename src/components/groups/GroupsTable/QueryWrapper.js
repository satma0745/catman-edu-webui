import { useHistory } from 'react-router-dom'
import { useAllQuery, useDeleteMutation } from 'api/groups'

import { Loadable } from 'components/common'
import Presentation from './Presentation'

const QueryWrapper = (props) => {
  const { isLoading, groups } = useAllQuery()
  const { $delete } = useDeleteMutation()

  const history = useHistory()
  const onEdit = (id) => {
    history.push(`/groups/edit/${id}`)
  }

  return (
    <Loadable loaded={!isLoading}>
      <Presentation {...props} groups={groups} onEdit={onEdit} onDelete={$delete} />
    </Loadable>
  )
}

export default QueryWrapper
