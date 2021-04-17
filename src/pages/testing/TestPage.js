import { useParams } from 'react-router-dom'
import { Test } from 'components/testing'

const TestPage = () => {
  const { testId } = useParams()

  return <Test testId={testId} />
}

export default TestPage
