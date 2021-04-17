import { useQuery } from 'react-query'
import { getSingleCall } from '../calls'

const queryWrapper = ({ queryKey }) => {
  const [_, id] = queryKey
  return getSingleCall(id)
}

const useSingleQuery = (id, { onNotFoundError, ...options }) => {
  const { isSuccess, isLoading, data: group } = useQuery(['groups', id], queryWrapper, {
    onError: ({ notFound }) => {
      if (notFound) {
        onNotFoundError()
      }
    },
    ...options,
  })

  return { isSuccess, isLoading, group }
}

export default useSingleQuery
