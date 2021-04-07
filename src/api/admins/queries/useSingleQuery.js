import { useQuery } from 'react-query'
import { getSingleCall } from '../calls'

const queryWrapper = ({ queryKey }) => {
  const [_, id] = queryKey
  return getSingleCall(id)
}

const useSingleQuery = (id, { onNotFoundError }) => {
  const { isLoading, data: admin } = useQuery(['admins', id], queryWrapper, {
    onError: ({ notFound }) => {
      if (notFound) {
        onNotFoundError()
      }
    },
  })

  return { isLoading, admin }
}

export default useSingleQuery
