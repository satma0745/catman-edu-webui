import { useQuery } from 'react-query'
import { getTestCall } from '../calls'

const queryWrapper = ({ queryKey }) => {
  const [_, id] = queryKey
  return getTestCall(id)
}

const useSingleQuery = (id, { onNotFoundError }) => {
  const { isLoading, data: test } = useQuery(['testing', id], queryWrapper, {
    onError: ({ notFound }) => {
      if (notFound) {
        onNotFoundError()
      }
    },
  })

  return { isLoading, test }
}

export default useSingleQuery
