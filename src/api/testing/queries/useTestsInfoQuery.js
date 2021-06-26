import { useQuery } from 'react-query'
import { getTestsInfoCall } from '../calls'

const queryWrapper = ({ queryKey }) => {
  const [_, disciplineId, studentId] = queryKey
  return getTestsInfoCall(disciplineId, studentId)
}

const useTestsInfoQuery = (disciplineId, studentId, { onNotFoundError }) => {
  const { isLoading, data: testsInfo } = useQuery(
    ['testing', disciplineId, studentId],
    queryWrapper,
    {
      onError: ({ notFound }) => {
        if (notFound) {
          onNotFoundError()
        }
      },
    }
  )

  return { isLoading, testsInfo }
}

export default useTestsInfoQuery
