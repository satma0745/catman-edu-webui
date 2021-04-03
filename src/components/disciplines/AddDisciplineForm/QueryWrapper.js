import { useHistory } from 'react-router-dom'

import { useMutation, useQueryClient } from 'react-query'
import { addDiscipline } from '../../../api'

import Presentation from './Presentation'

const QueryWrapper = () => {
  const history = useHistory()
  const queryClient = useQueryClient()

  const { mutate: add } = useMutation(addDiscipline, {
    onSuccess: () => {
      queryClient.invalidateQueries('disciplines')
      history.push('/disciplines')
    },
  })

  const cancel = () => {
    history.push('/disciplines')
  }

  const onSubmit = (discipline, { setErrors }) => {
    add(discipline, {
      onError: ({ validation }) => {
        if (validation) setErrors(validation)
      },
    })
  }

  return <Presentation onCancel={cancel} onSubmit={onSubmit} />
}

export default QueryWrapper
