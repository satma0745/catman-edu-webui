import { useMutation, useQueryClient } from 'react-query'
import { deleteCall } from '../calls'

const useDeleteMutation = () => {
  const queryClient = useQueryClient()

  const { mutate: $delete } = useMutation(deleteCall, {
    onSuccess: async () => {
      await queryClient.invalidateQueries('groups')
    },
  })

  return { $delete }
}

export default useDeleteMutation
