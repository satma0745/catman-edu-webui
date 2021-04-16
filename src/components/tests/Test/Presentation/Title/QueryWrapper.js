import { useSaveMutation } from 'api/tests'
import { useHistory } from 'react-router-dom'
import Title from './Presentation'

const QueryWrapper = ({ id, title, discipline = {}, ...props }) => {
  const history = useHistory()

  const { save } = useSaveMutation(id, { onNotFoundError: () => history.push('/notfound') })

  const onSave = (values, { setErrors }) =>
    save({ ...values, disciplineId: discipline.id }, { onValidationError: setErrors })

  return <Title {...props} title={title} discipline={discipline} onSave={onSave} />
}

export default QueryWrapper
