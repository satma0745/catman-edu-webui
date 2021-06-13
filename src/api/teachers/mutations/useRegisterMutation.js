import { useMutation, useQueryClient } from 'react-query'
import { registerCall } from '../calls'

const useRegisterMutation = ({ onSuccess }) => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation(registerCall, {
    onSuccess: () => {
      queryClient.invalidateQueries('teachers')
      onSuccess()
    },
  })

  const register = (teacher, { onValidationError }) => {
    mutate(teacher, {
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
