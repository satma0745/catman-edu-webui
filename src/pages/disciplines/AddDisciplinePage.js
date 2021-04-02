import { useHistory } from 'react-router-dom'
import { useMutation, useQueryClient } from 'react-query'

import { AddDisciplineForm } from '../../components/disciplines'
import { addDiscipline } from '../../api/disciplines'

const AddDisciplinePage = () => {
  const queryClient = useQueryClient()
  const history = useHistory()

  const { mutate: add } = useMutation(addDiscipline, {
    onSuccess: () => {
      queryClient.invalidateQueries('disciplines')
      history.push('/disciplines')
    },
  })

  const onCancel = () => {
    history.push('/disciplines')
  }

  const onSubmit = ({ title, grade }, { setErrors }) => {
    add(
      { title, grade },
      {
        onError: ({ validation }) => {
          if (validation) setErrors(validation)
        },
      }
    )
  }

  return <AddDisciplineForm onCancel={onCancel} onSubmit={onSubmit} />
}

export default AddDisciplinePage
