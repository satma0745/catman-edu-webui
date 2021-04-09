import { useMutation, useQueryClient } from 'react-query'
import { updateCall } from '../calls'

const useSaveMutation = (id, { onSuccess, onNotFoundError }) => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation((question) => updateCall(id, question), {
    onSuccess: async () => {
      await queryClient.invalidateQueries('questions')
      await queryClient.invalidateQueries('tests')
      onSuccess()
    },
    onError: ({ notFound }) => {
      if (notFound) {
        onNotFoundError()
      }
    },
  })

  const save = (question, { onValidationError }) =>
    mutate(question, {
      onError: ({ validation }) => {
        if (validation) {
          onValidationError(validation)
        }
      },
    })

  return { save }
}

export default useSaveMutation
