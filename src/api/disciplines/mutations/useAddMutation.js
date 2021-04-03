import { useMutation, useQueryClient } from 'react-query'
import { addCall } from '../calls'

const useAddMutation = ({ onSuccess }) => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation(addCall, {
    onSuccess: () => {
      queryClient.invalidateQueries('disciplines')
      onSuccess()
    },
  })

  const add = (discipline, { onValidationError }) => {
    mutate(discipline, {
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
