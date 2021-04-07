import { useParams } from 'react-router-dom'
import { EditAdminForm } from 'components/admins'

const EditAdminPage = () => {
  const { id } = useParams()

  return <EditAdminForm id={id} />
}

export default EditAdminPage
