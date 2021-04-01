import { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { EditDisciplineForm } from '../../components/disciplines'
import { getDiscipline, updateDiscipline } from '../../api/disciplines'

const EditDisciplinePage = () => {
  const history = useHistory()
  const { id } = useParams()
  const [discipline, setDiscipline] = useState()

  useEffect(() => {
    const loadDiscipline = async () => {
      const { success, discipline: fetchedDiscipline, notFound } = await getDiscipline(id)

      if (success) {
        setDiscipline(fetchedDiscipline)
      } else if (notFound) {
        history.push('/notfound')
      }
    }

    loadDiscipline()
  }, [id])

  const onCancel = () => {
    history.push('/disciplines')
  }

  const onSubmit = async ({ title, grade }, { setErrors }) => {
    const { success, notFound, validation } = await updateDiscipline(id, { title, grade })

    if (success) {
      history.push('/disciplines')
    } else if (notFound) {
      history.push('/notfound')
    } else if (validation) {
      setErrors(validation)
    }
  }

  if (!discipline) return <p>Loading . . .</p>

  return <EditDisciplineForm initialValues={discipline} onCancel={onCancel} onSubmit={onSubmit} />
}

export default EditDisciplinePage
