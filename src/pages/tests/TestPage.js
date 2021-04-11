import { useParams } from 'react-router-dom'
import { Test } from 'components/tests'

const TestPage = () => {
  const { id } = useParams()
  return <Test id={id} />
}

export default TestPage
