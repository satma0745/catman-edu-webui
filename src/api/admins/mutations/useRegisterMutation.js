import { useMutation, useQueryClient } from 'react-query'
import { registerCall } from '../calls'

const useRegisterMutation = ({ onSuccess }) => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation(registerCall, {
    onSuccess: () => {
      queryClient.invalidateQueries('admins')
      onSuccess()
    },
  })

  const register = (admin, { onValidationError }) => {
    mutate(admin, {
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
