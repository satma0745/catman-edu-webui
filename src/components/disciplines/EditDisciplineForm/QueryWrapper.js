import { useHistory } from 'react-router-dom'
import { useSingleQuery, useSaveMutation } from 'api/disciplines'

import { Loadable } from 'components/common'
import Presentation from './Presentation'

const QueryWrapper = ({ id }) => {
  const history = useHistory()

  const { isLoading, discipline: existingDiscipline } = useSingleQuery(id, {
    onNotFoundError: () => history.push('/notfound'),
  })

  const { save } = useSaveMutation(id, { onSuccess: () => history.push('/disciplines') })
  const onSubmit = (discipline, { setErrors }) => {
    save(discipline, { onValidationError: setErrors })
  }

  const cancel = () => {
    history.push('/disciplines')
  }

  return (
    <Loadable loaded={!isLoading}>
      <Presentation initialValues={existingDiscipline} onCancel={cancel} onSubmit={onSubmit} />
    </Loadable>
  )
}

export default QueryWrapper
