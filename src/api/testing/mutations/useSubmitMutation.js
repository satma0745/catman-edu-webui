import { useMutation } from 'react-query'
import { submitCall } from '../calls'

const useSubmitMutation = ({ onSuccess, onNotFoundError }) => {
  const { mutate: submit } = useMutation(({ testId, test }) => submitCall(testId, test), {
    onSuccess,
    onError: ({ notFound }) => {
      if (notFound) {
        onNotFoundError()
      }
    },
  })

  return { submit }
}

export default useSubmitMutation
