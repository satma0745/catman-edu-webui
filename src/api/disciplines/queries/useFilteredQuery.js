import { useQuery } from 'react-query'

import { getFilteredCall } from '../calls'

const useFilteredQuery = (filter) => {
  const { isLoading, data: disciplines } = useQuery(['disciplines', filter], getFilteredCall)
  return { isLoading, disciplines }
}

export default useFilteredQuery
