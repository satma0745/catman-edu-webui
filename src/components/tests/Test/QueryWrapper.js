import { useHistory, Redirect } from 'react-router-dom'
import { useAuth } from 'auth'

import { useSingleQuery as useTestQuery } from 'api/tests'
import { useTaughtDisciplinesQuery } from 'api/teachers'

import Test from './Presentation'

const QueryWrapper = ({ id, ...props }) => {
  const history = useHistory()
  const [userInfo] = useAuth()

  const { isLoading: testLoading, test } = useTestQuery(id, {
    onNotFoundError: () => {
      history.push('/notfound')
    },
  })

  const { isLoading: disciplinesLoading, disciplines } = useTaughtDisciplinesQuery(userInfo.id)

  const isLoading = testLoading || disciplinesLoading
  if (
    !isLoading &&
    !disciplines
      .filter((discipline) => discipline.isTaught)
      .some((discipline) => discipline.id === test.disciplineId)
  ) {
    return <Redirect to="/tests" />
  }

  return (
    <Test {...props} isLoading={isLoading} test={test} onCancel={() => history.push('/tests')} />
  )
}

export default QueryWrapper
