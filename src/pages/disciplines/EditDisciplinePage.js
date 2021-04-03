import { useParams } from 'react-router-dom'
import { EditDisciplineForm } from '../../components/disciplines'

const EditDisciplinePage = () => {
  const { id } = useParams()

  return <EditDisciplineForm id={id} />
}

export default EditDisciplinePage
