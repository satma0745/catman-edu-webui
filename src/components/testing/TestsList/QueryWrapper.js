import { useHistory } from 'react-router-dom'
import { useAuth } from 'auth'

import { useTestsInfoQuery } from 'api/testing'

import TestsList from './Presentation'

const QueryWrapper = ({ disciplineId, ...props }) => {
  const history = useHistory()
  const [userInfo] = useAuth()

  const { isLoading, testsInfo } = useTestsInfoQuery(disciplineId, userInfo.id, {
    onNotFoundError: () => history.push('/notfound'),
  })

  return (
    <TestsList
      {...props}
      isLoading={isLoading}
      testsInfo={testsInfo}
      onSelect={(testId) => history.push(`/testing/${testId}`)}
    />
  )
}

export default QueryWrapper
