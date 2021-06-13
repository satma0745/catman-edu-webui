import { useQuery } from 'react-query'
import { getSingleCall } from '../calls'

const queryWrapper = ({ queryKey }) => {
  const [_, id] = queryKey
  return getSingleCall(id)
}

const useSingleQuery = (id, { onNotFoundError }) => {
  const { isLoading, data: teacher } = useQuery(['teachers', id], queryWrapper, {
    onError: ({ notFound }) => {
      if (notFound) {
        onNotFoundError()
      }
    },
  })

  return { isLoading, teacher }
}

export default useSingleQuery
