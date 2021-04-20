import { useQuery } from 'react-query'
import { getStudentPerformanceCall } from '../calls'

const queryWrapper = ({ queryKey }) => {
  const [_, studentId] = queryKey
  return getStudentPerformanceCall(studentId)
}

const useStudentPerformanceQuery = (studentId, { onNotFoundError }) => {
  const { isSuccess, isLoading, data: performance } = useQuery(
    ['testing-results/performance', studentId],
    queryWrapper,
    {
      onError: ({ notFound }) => {
        if (notFound) {
          onNotFoundError()
        }
      },
    }
  )

  return { isSuccess, isLoading, performance }
}

export default useStudentPerformanceQuery
