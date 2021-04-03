import { useHistory } from 'react-router-dom'

import { useQuery, useMutation, useQueryClient } from 'react-query'
import { getDiscipline, updateDiscipline } from '../../../api/disciplines'

import { Loadable } from '../../common'
import Presentation from './Presentation'

const QueryWrapper = ({ id }) => {
  const history = useHistory()
  const queryClient = useQueryClient()

  const { isLoading, data: existingDiscipline } = useQuery(['disciplines', id], getDiscipline, {
    onError: ({ notFound }) => {
      if (notFound) history.push('/notfound')
    },
  })

  const { mutate: save } = useMutation((discipline) => updateDiscipline(id, discipline), {
    onSuccess: () => {
      queryClient.invalidateQueries('/disciplines')
      history.push('/disciplines')
    },
    onError: ({ notFound }) => {
      if (notFound) history.push('/notfound')
    },
  })

  const cancel = () => {
    history.push('/disciplines')
  }

  const onSubmit = (discipline, { setErrors }) => {
    save(discipline, {
      onError: ({ validation }) => {
        if (validation) setErrors(validation)
      },
    })
  }

  return (
    <Loadable loaded={!isLoading}>
      <Presentation initialValues={existingDiscipline} onCancel={cancel} onSubmit={onSubmit} />
    </Loadable>
  )
}

export default QueryWrapper
