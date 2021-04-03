import { useHistory } from 'react-router-dom'
import { useAddMutation } from 'api/disciplines'

import Presentation from './Presentation'

const QueryWrapper = () => {
  const history = useHistory()

  const { add } = useAddMutation({ onSuccess: () => history.push('/disciplines') })
  const onSubmit = (discipline, { setErrors }) => {
    add(discipline, { onValidationError: setErrors })
  }

  const cancel = () => {
    history.push('/disciplines')
  }

  return <Presentation onCancel={cancel} onSubmit={onSubmit} />
}

export default QueryWrapper
