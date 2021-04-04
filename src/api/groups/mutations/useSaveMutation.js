import { useMutation, useQueryClient } from 'react-query'
import { updateCall } from '../calls'

const useSaveMutation = (id, { onSuccess, onNotFoundError }) => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation((group) => updateCall(id, group), {
    onSuccess: async () => {
      await queryClient.invalidateQueries('/groups')
      onSuccess()
    },
    onError: ({ notFound }) => {
      if (notFound) {
        onNotFoundError()
      }
    },
  })

  const save = (group, { onValidationError }) => {
    mutate(group, {
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
