import { useHistory } from 'react-router-dom'
import { useSubmitMutation, useTestQuery } from 'api/testing'

import Test from './Presentation'
import { prepareTestForSubmition } from './utils'

const QueryWrapper = ({ testId, ...props }) => {
  const history = useHistory()

  const { isLoading, test } = useTestQuery(testId, {
    onNotFoundError: () => history.push('/notfound'),
  })

  const { submit } = useSubmitMutation({
    onSuccess: (result) => console.log({ result }),
    onNotFoundError: () => history.push('/notfound'),
  })

  return (
    <Test
      isLoading={isLoading}
      test={test}
      onCancel={() => history.push('/testing')}
      onSubmit={(answeredTest) => {
        const preparedTest = prepareTestForSubmition(answeredTest)
        console.log({ answeredTest, preparedTest })

        submit({ testId: answeredTest.testId, test: preparedTest })
      }}
      {...props}
    />
  )
}

export default QueryWrapper
