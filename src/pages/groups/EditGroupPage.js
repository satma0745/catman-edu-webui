import { useParams } from 'react-router-dom'
import { EditGroupForm } from 'components/groups'

const EditGroupPage = () => {
  const { id } = useParams()

  return <EditGroupForm id={id} />
}

export default EditGroupPage
