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
    const registerRequest = {
      username: teacher.username,
      fullName: teacher.fullName,
      password: teacher.password,
      taughtDisciplines: teacher.disciplines
        .filter((discipline) => discipline.isTaught)
        .map((discipline) => discipline.id),
    }

    mutate(registerRequest, {
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
