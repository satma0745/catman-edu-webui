import { useHistory } from 'react-router-dom'

import { AddDisciplineForm } from '../../components/disciplines'
import { addDiscipline } from '../../api/disciplines'

const AddDisciplinePage = () => {
  const history = useHistory()

  const onCancel = () => {
    history.push('/disciplines')
  }

  const onSubmit = async ({ title, grade }, { setErrors }) => {
    const { success, validation } = await addDiscipline({ title, grade })

    if (success) {
      history.push('/disciplines')
    } else if (validation) {
      setErrors(validation)
    }
  }

  return <AddDisciplineForm onCancel={onCancel} onSubmit={onSubmit} />
}

export default AddDisciplinePage
