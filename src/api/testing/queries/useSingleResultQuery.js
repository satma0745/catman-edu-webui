import { useQuery } from 'react-query'
import { getSingleResultCall } from '../calls'

const queryWrapper = ({ queryKey }) => {
  const [_, { testId, studentId }] = queryKey
  return getSingleResultCall(testId, studentId)
}

const useSingleResultQuery = ({ testId, studentId }, { onNotFoundError, ...options }) => {
  const { isSuccess, isLoading, data: result } = useQuery(
    ['testing-results', { testId, studentId }],
    queryWrapper,
    {
      onError: ({ notFound }) => {
        if (notFound) {
          onNotFoundError()
        }
      },
      ...options,
    }
  )

  return { isSuccess, isLoading, result }
}

export default useSingleResultQuery
