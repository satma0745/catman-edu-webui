import { useQuery, useMutation, useQueryClient } from 'react-query'
import { useHistory, useParams } from 'react-router-dom'

import { Loadable } from '../../components/common'

import { EditDisciplineForm } from '../../components/disciplines'
import { getDiscipline, updateDiscipline } from '../../api/disciplines'

const EditDisciplinePage = () => {
  const queryClient = useQueryClient()
  const history = useHistory()
  const { id } = useParams()

  const { isLoading, data: discipline } = useQuery(['disciplines', id], getDiscipline, {
    onError: ({ notFound }) => {
      if (notFound) history.push('/notfound')
    },
  })
  const { mutate: update } = useMutation(
    ({ title, grade }) => updateDiscipline(id, { title, grade }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('disciplines')
        history.push('/disciplines')
      },
      onError: ({ notFound }) => {
        if (notFound) history.push('/notfound')
      },
    }
  )

  const onCancel = () => {
    history.push('/disciplines')
  }

  const onSubmit = async ({ title, grade }, { setErrors }) => {
    update(
      { title, grade },
      {
        onError: ({ validation }) => {
          if (validation) setErrors(validation)
        },
      }
    )
  }

  return (
    <Loadable loaded={!isLoading}>
      <EditDisciplineForm initialValues={discipline} onCancel={onCancel} onSubmit={onSubmit} />
    </Loadable>
  )
}

export default EditDisciplinePage
