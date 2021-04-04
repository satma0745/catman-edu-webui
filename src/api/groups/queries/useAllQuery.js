import { useQuery } from 'react-query'
import { getAllCall } from '../calls'

const useAllQuery = () => {
  const { isLoading, data: groups } = useQuery('groups', getAllCall)
  return { isLoading, groups }
}

export default useAllQuery
