import { useMutation, useQueryClient } from 'react-query'
import { updateCall } from '../calls'

const useSaveMutation = (id, { onSuccess, onNotFoundError }) => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation((admin) => updateCall(id, admin), {
    onSuccess: async () => {
      await queryClient.invalidateQueries('admin')
      onSuccess()
    },
    onError: ({ notFound }) => {
      if (notFound) {
        onNotFoundError()
      }
    },
  })

  const save = (admin, { onValidationError }) => {
    mutate(admin, {
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
