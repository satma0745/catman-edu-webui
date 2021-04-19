import { useQuery } from 'react-query'
import { getSingleCall } from '../calls'

const queryWrapper = ({ queryKey }) => {
  const [_, id] = queryKey
  return getSingleCall(id)
}

const useSingleQuery = (id, { onNotFoundError }) => {
  const { isSuccess, isLoading, data: test } = useQuery(['tests', id], queryWrapper, {
    onError: ({ notFound }) => {
      if (notFound) {
        onNotFoundError()
      }
    },
  })

  return { isSuccess, isLoading, test }
}

export default useSingleQuery
