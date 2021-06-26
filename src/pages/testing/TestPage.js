import { useParams, useHistory } from 'react-router-dom'
import { useAuth } from 'auth'

import { useSingleResultQuery } from 'api/testing'

import { Test } from 'components/testing'
import { Loadable } from 'components/common'

const TestPage = () => {
  const history = useHistory()
  const { testId } = useParams()
  const [userInfo] = useAuth()

  const { isLoading } = useSingleResultQuery(
    { testId, studentId: userInfo.id },
    {
      onNotFoundError: () => {},
      onSuccess: () => history.push('/testing'),
      retry: false,
    }
  )

  return (
    <Loadable loaded={!isLoading}>
      <Test testId={testId} />
    </Loadable>
  )
}

export default TestPage
