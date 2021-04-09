import { useHistory } from 'react-router-dom'
import { useSingleQuery } from 'api/tests'

import Test from './Presentation'

const QueryWrapper = ({ id, ...props }) => {
  const history = useHistory()

  const { isLoading, test } = useSingleQuery(id, {
    onNotFoundError: () => {
      history.push('/notfound')
    },
  })

  return (
    <Test {...props} isLoading={isLoading} test={test} onCancel={() => history.push('/tests')} />
  )
}

export default QueryWrapper
