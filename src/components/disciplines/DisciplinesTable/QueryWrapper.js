import { useHistory } from 'react-router-dom'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { getFilteredDisciplines, deleteDiscipline } from '../../../api'

import Presentation from './Presentation'

const QueryWrapper = ({ filter, ...props }) => {
  const history = useHistory()
  const queryClient = useQueryClient()

  const { mutate: $delete } = useMutation(deleteDiscipline, {
    onSuccess: async () => {
      await queryClient.invalidateQueries('disciplines')
    },
  })

  const { isFetching, data: disciplines } = useQuery(
    ['disciplines', filter],
    getFilteredDisciplines
  )

  return (
    <Presentation
      {...props}
      isLoading={isFetching}
      disciplines={disciplines}
      onEdit={(id) => history.push(`/disciplines/edit/${id}`)}
      onDelete={$delete}
    />
  )
}

export default QueryWrapper
