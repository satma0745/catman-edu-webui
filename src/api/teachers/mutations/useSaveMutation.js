import { useMutation, useQueryClient } from 'react-query'
import { updateCall } from '../calls'

const useSaveMutation = (id, { onSuccess, onNotFoundError }) => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation(
    (teacher) => {
      const taughtDisciplines = teacher.disciplines
        .filter((discipline) => discipline.isTaught)
        .map((discipline) => discipline.id)

      const updateTeacherRequest = {
        username: teacher.username,
        fullName: teacher.fullName,
        password: teacher.password,
        taughtDisciplines,
      }

      updateCall(id, updateTeacherRequest)
    },
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries('teachers')
        await queryClient.invalidateQueries('teachers.disciplines')
        onSuccess()
      },
      onError: ({ notFound }) => {
        if (notFound) {
          onNotFoundError()
        }
      },
    }
  )

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
