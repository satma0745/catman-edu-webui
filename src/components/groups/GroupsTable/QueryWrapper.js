import { useAllQuery, useDeleteMutation } from 'api/groups'

import { Loadable } from 'components/common'
import Presentation from './Presentation'

const QueryWrapper = (props) => {
  const { isLoading, groups } = useAllQuery()
  const { $delete } = useDeleteMutation()

  return (
    <Loadable loaded={!isLoading}>
      <Presentation {...props} groups={groups} onDelete={$delete} />
    </Loadable>
  )
}

export default QueryWrapper
