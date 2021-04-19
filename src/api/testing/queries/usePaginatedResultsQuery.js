import { useQuery } from 'react-query'
import { getPaginatedResultsCall } from '../calls'

const queryWrapper = ({ queryKey }) => {
  const [_, paginationInfo, filter] = queryKey
  return getPaginatedResultsCall(paginationInfo, filter)
}

const usePaginatedResultsQuery = ({ page, pageSize }, filter) => {
  const { isLoading, data: { results, paginationInfo } = {} } = useQuery(
    ['testing', { page, pageSize }, filter],
    queryWrapper,
    { keepPreviousData: true }
  )

  return { isLoading, results, paginationInfo }
}

export default usePaginatedResultsQuery
