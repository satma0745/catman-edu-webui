import { useQuery } from 'react-query'
import { getPaginatedCall } from '../calls'

const queryWrapper = ({ queryKey }) => {
  const [_, paginationInfo] = queryKey
  return getPaginatedCall(paginationInfo)
}

const usePaginatedQuery = ({ page, pageSize }) => {
  const { isLoading, data: { admins, paginationInfo } = {} } = useQuery(
    ['admins', { page, pageSize }],
    queryWrapper,
    { keepPreviousData: true }
  )

  return { isLoading, admins, paginationInfo }
}

export default usePaginatedQuery
