import { useHistory } from 'react-router-dom'
import { useAuth } from 'auth'

import { useTaughtDisciplinesQuery } from 'api/teachers'

import Presentation from './Presentation'

const QueryWrapper = ({ filter, ...props }) => {
  const history = useHistory()
  const [userInfo] = useAuth()

  const { isLoading, disciplines } = useTaughtDisciplinesQuery(userInfo.id, { filter })

  return (
    <Presentation
      {...props}
      isLoading={isLoading}
      disciplines={disciplines?.filter((discipline) => discipline.isTaught)}
      onTests={(disciplineId) => history.push(`/disciplines/${disciplineId}/tests`)}
    />
  )
}

export default QueryWrapper
