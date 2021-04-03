import { useMutation, useQueryClient } from 'react-query'
import { updateCall } from '../calls'

const useSaveMutation = (id, { onSuccess, onNotFoundError }) => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation((discipline) => updateCall(id, discipline), {
    onSuccess: () => {
      queryClient.invalidateQueries('/disciplines')
      onSuccess()
    },
    onError: ({ notFound }) => {
      if (notFound) {
        onNotFoundError()
      }
    },
  })

  const save = (discipline, { onValidationError }) => {
    mutate(discipline, {
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
