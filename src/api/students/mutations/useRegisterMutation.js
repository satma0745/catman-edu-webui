import { useMutation, useQueryClient } from 'react-query'
import { registerCall } from '../calls'

const useRegisterMutation = ({ onSuccess }) => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation(registerCall, {
    onSuccess: () => {
      queryClient.invalidateQueries('students')
      onSuccess()
    },
  })

  const register = (student, { onValidationError }) => {
    mutate(student, {
      onError: ({ validation }) => {
        if (validation) {
          onValidationError(validation)
        }
      },
    })
  }

  return { register }
}

export default useRegisterMutation
