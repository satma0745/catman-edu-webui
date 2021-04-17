import { useHistory } from 'react-router-dom'
import { useTestQuery } from 'api/testing'

import Test from './Presentation'

const QueryWrapper = ({ testId, ...props }) => {
  const history = useHistory()

  const { isLoading, test } = useTestQuery(testId, {
    onNotFoundError: () => history.push('/notfound'),
  })

  return (
    <Test isLoading={isLoading} test={test} onCancel={() => history.push('/testing')} {...props} />
  )
}

export default QueryWrapper
