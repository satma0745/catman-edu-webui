import { useQuery } from 'react-query'
import { getPaginatedCall } from '../calls'

const queryWrapper = ({ queryKey }) => {
  const [_, paginationInfo] = queryKey
  return getPaginatedCall(paginationInfo)
}

const usePaginatedQuery = ({ page, pageSize }) => {
  const { isLoading, data: { teachers, paginationInfo } = {} } = useQuery(
    ['teachers', { page, pageSize }],
    queryWrapper,
    { keepPreviousData: true }
  )

  return { isLoading, teachers, paginationInfo }
}

export default usePaginatedQuery
