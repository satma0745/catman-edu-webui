import { useMutation, useQueryClient } from 'react-query'
import { addCall } from '../calls'

const useAddMutation = ({ onSuccess }) => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation(addCall, {
    onSuccess: () => {
      queryClient.invalidateQueries('questions')
      queryClient.invalidateQueries('tests')
      onSuccess()
    },
  })

  const add = (question, { onValidationError }) => {
    mutate(question, {
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
