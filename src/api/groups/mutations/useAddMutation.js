import { useMutation, useQueryClient } from 'react-query'
import { addCall } from '../calls'

const useAddMutation = ({ onSuccess, onNotFoundError }) => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation(addCall, {
    onSuccess: () => {
      queryClient.invalidateQueries('groups')
      onSuccess()
    },
    onError: ({ notFound }) => {
      if (notFound) {
        onNotFoundError()
      }
    },
  })

  const add = (group, { onValidationError }) => {
    mutate(group, {
      onError: ({ validation }) => {
        if (validation) {
          onValidationError(validation)
        }
      },
    })
  }

  return { add }
}

export default useAddMutation
