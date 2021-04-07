import { useParams } from 'react-router-dom'
import { EditStudentForm } from 'components/students'

const EditStudentPage = () => {
  const { id } = useParams()

  return <EditStudentForm id={id} />
}

export default EditStudentPage
