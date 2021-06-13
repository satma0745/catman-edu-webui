import { useMutation, useQueryClient } from 'react-query'
import { updateCall } from '../calls'

const useSaveMutation = (id, { onSuccess, onNotFoundError }) => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation((teacher) => updateCall(id, teacher), {
    onSuccess: async () => {
      await queryClient.invalidateQueries('teacher')
      onSuccess()
    },
    onError: ({ notFound }) => {
      if (notFound) {
        onNotFoundError()
      }
    },
  })

  const save = (teacher, { onValidationError }) => {
    mutate(teacher, {
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
