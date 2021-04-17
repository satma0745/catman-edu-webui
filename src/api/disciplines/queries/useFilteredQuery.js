import { useQuery } from 'react-query'

import { getFilteredCall } from '../calls'

const useFilteredQuery = (filter, options) => {
  const { isSuccess, isLoading, data: disciplines } = useQuery(
    ['disciplines', filter],
    getFilteredCall,
    options
  )
  return { isSuccess, isLoading, disciplines }
}

export default useFilteredQuery
