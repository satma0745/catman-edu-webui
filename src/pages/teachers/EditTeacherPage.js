import { useParams } from 'react-router-dom'
import { EditTeacherForm } from 'components/teachers'

const EditTeacherPage = () => {
  const { id } = useParams()

  return <EditTeacherForm id={id} />
}

export default EditTeacherPage
