import { useMutation } from 'react-query'
import { signInCall } from '../calls'

const useSignInMutation = ({ onSuccess }) => {
  const { mutate } = useMutation(signInCall, { onSuccess })

  const signIn = (credentials, { onValidationError }) => {
    mutate(credentials, {
      onError: ({ validation }) => {
        if (validation) {
          onValidationError(validation)
        }
      },
    })
  }

  return { signIn }
}

export default useSignInMutation
