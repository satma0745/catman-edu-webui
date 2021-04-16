import { useMutation, useQueryClient } from 'react-query'
import { updateCall } from '../calls'

const useSaveMutation = (id, { onNotFoundError }) => {
  const queryClient = useQueryClient()

  const { mutateAsync } = useMutation((test) => updateCall(id, test), {
    onSuccess: async () => {
      await queryClient.invalidateQueries('tests')
    },
    onError: ({ notFound }) => {
      if (notFound) {
        onNotFoundError()
      }
    },
  })

  const save = (group, { onValidationError }) =>
    mutateAsync(group, {
      onError: ({ validation }) => {
        if (validation) {
          onValidationError(validation)
        }
      },
    })

  return { save }
}

export default useSaveMutation
