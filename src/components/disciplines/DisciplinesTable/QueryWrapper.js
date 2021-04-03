import { useHistory } from 'react-router-dom'
import { useDeleteMutation, useFilteredQuery } from '../../../api/disciplines'

import Presentation from './Presentation'

const QueryWrapper = ({ filter, ...props }) => {
  const history = useHistory()

  const { $delete } = useDeleteMutation()
  const { isLoading, disciplines } = useFilteredQuery(filter)

  return (
    <Presentation
      {...props}
      isLoading={isLoading}
      disciplines={disciplines}
      onEdit={(id) => history.push(`/disciplines/edit/${id}`)}
      onDelete={$delete}
    />
  )
}

export default QueryWrapper
