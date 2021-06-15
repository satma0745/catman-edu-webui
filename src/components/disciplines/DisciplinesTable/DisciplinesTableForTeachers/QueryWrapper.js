import { useHistory } from 'react-router-dom'
import { useAuth } from 'auth'

import { useDeleteMutation } from 'api/disciplines'
import { useTaughtDisciplinesQuery } from 'api/teachers'

import Presentation from './Presentation'

const QueryWrapper = ({ filter, ...props }) => {
  const history = useHistory()
  const [userInfo] = useAuth()

  const { $delete } = useDeleteMutation()
  const { isLoading, disciplines } = useTaughtDisciplinesQuery(userInfo.id, { filter })

  return (
    <Presentation
      {...props}
      isLoading={isLoading}
      disciplines={disciplines?.filter((discipline) => discipline.isTaught)}
      onTests={(disciplineId) => history.push(`/tests?disciplineId=${disciplineId}`)}
      onEdit={(id) => history.push(`/disciplines/edit/${id}`)}
      onDelete={$delete}
    />
  )
}

export default QueryWrapper
