import { useHistory } from 'react-router-dom'
import { useSingleQuery, useSaveMutation } from 'api/disciplines'

import { Loadable } from 'components/common'
import Presentation from './Presentation'

const QueryWrapper = ({ id, filterGrade, ...props }) => {
  const history = useHistory()

  const redirectToDisciplines = () => {
    if (filterGrade) {
      history.push(`/disciplines?grade=${filterGrade}`)
    } else {
      history.push('/disciplines')
    }
  }

  const { isLoading, discipline: existingDiscipline } = useSingleQuery(id, {
    onNotFoundError: () => history.push('/notfound'),
  })

  const { save } = useSaveMutation(id, { onSuccess: redirectToDisciplines })
  const onSubmit = (discipline, { setErrors }) => {
    save(discipline, { onValidationError: setErrors })
  }

  return (
    <Loadable loaded={!isLoading}>
      <Presentation
        {...props}
        initialValues={existingDiscipline}
        onCancel={redirectToDisciplines}
        onSubmit={onSubmit}
      />
    </Loadable>
  )
}

export default QueryWrapper
