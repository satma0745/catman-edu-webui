import { useQuery } from 'react-query'
import { getSingleCall } from '../calls'

const queryWrapper = ({ queryKey }) => {
  const [_, id] = queryKey
  return getSingleCall(id)
}

const useSingleQuery = (id, { onNotFoundError }) => {
  const { isSuccess, isLoading, data: student } = useQuery(['students', id], queryWrapper, {
    onError: ({ notFound }) => {
      if (notFound) {
        onNotFoundError()
      }
    },
  })

  return { isSuccess, isLoading, student }
}

export default useSingleQuery
