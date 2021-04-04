import { useHistory } from 'react-router-dom'
import { useSingleQuery, useSaveMutation } from 'api/groups'

import { Loadable } from 'components/common'
import Presentation from './Presentation'

const QueryWrapper = ({ id }) => {
  const history = useHistory()

  const { isLoading, group: existingGroup } = useSingleQuery(id, {
    onNotFoundError: () => history.push('/notfound'),
  })

  const { save } = useSaveMutation(id, { onSuccess: () => history.push('/groups') })
  const onSubmit = (group, { setErrors }) => {
    save(group, { onValidationError: setErrors })
  }

  const cancel = () => {
    history.push('/groups')
  }

  return (
    <Loadable loaded={!isLoading}>
      <Presentation initialValues={existingGroup} onCancel={cancel} onSubmit={onSubmit} />
    </Loadable>
  )
}

export default QueryWrapper
