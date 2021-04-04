import { useHistory } from 'react-router-dom'
import { useAddMutation } from 'api/groups'

import Presentation from './Presentation'

const QueryWrapper = () => {
  const history = useHistory()

  const { add } = useAddMutation({ onSuccess: () => history.push('/groups') })
  const onSubmit = (group, { setErrors }) => {
    add(group, { onValidationError: setErrors })
  }

  const cancel = () => {
    history.push('/groups')
  }

  return <Presentation onCancel={cancel} onSubmit={onSubmit} />
}

export default QueryWrapper
