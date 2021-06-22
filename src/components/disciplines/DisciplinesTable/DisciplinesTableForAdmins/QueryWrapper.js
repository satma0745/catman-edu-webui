import { useHistory } from 'react-router-dom'
import { useDeleteMutation, useFilteredQuery } from 'api/disciplines'

import Presentation from './Presentation'

const QueryWrapper = ({ filter, ...props }) => {
  const history = useHistory()

  const { $delete } = useDeleteMutation()
  const { isLoading, disciplines } = useFilteredQuery(filter)

  const onEdit = (id) => {
    if (filter?.grade) {
      history.push(`/disciplines/${id}/edit?filterGrade=${filter?.grade}`)
    } else {
      history.push(`/disciplines/${id}/edit`)
    }
  }

  return (
    <Presentation
      {...props}
      isLoading={isLoading}
      disciplines={disciplines}
      onEdit={onEdit}
      onDelete={$delete}
    />
  )
}

export default QueryWrapper
