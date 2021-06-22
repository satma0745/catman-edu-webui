import { useHistory } from 'react-router-dom'
import { useAddMutation } from 'api/disciplines'

import Presentation from './Presentation'

const QueryWrapper = ({ defaultGrade }) => {
  const history = useHistory()
  const redirectToDisciplines = () => {
    if (defaultGrade) {
      history.push(`/disciplines?grade=${defaultGrade}`)
    } else {
      history.push('/disciplines')
    }
  }

  const { add } = useAddMutation({ onSuccess: redirectToDisciplines })
  const onSubmit = (discipline, { setErrors }) => {
    add(discipline, { onValidationError: setErrors })
  }

  return (
    <Presentation
      defaultGrade={defaultGrade}
      onCancel={redirectToDisciplines}
      onSubmit={onSubmit}
    />
  )
}

export default QueryWrapper
