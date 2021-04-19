import { useQuery } from 'react-query'
import { getSingleCall } from '../calls'

const useSingleQuery = (id, { onNotFoundError, ...preferences }) => {
  const { isSuccess, isLoading, data: discipline } = useQuery(['disciplines', id], getSingleCall, {
    onError: ({ notFound }) => {
      if (notFound) {
        onNotFoundError()
      }
    },
    ...preferences,
  })

  return { isSuccess, isLoading, discipline }
}

export default useSingleQuery
