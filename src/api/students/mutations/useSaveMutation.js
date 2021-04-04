import { useMutation, useQueryClient } from 'react-query'
import { updateCall } from '../calls'

const useSaveMutation = (id, { onSuccess, onNotFoundError }) => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation((student) => updateCall(id, student), {
    onSuccess: async () => {
      await queryClient.invalidateQueries('students')
      onSuccess()
    },
    onError: ({ notFound }) => {
      if (notFound) {
        onNotFoundError()
      }
    },
  })

  const save = (student, { onValidationError }) => {
    mutate(student, {
      onError: ({ validation }) => {
        if (validation) {
          onValidationError(validation)
        }
      },
    })
  }

  return { save }
}

export default useSaveMutation
