import { useParams } from 'react-router-dom'
import { useSearch } from 'routing/utils'

import { EditDisciplineForm } from 'components/disciplines'

const EditDisciplinePage = () => {
  const { id } = useParams()
  const [{ filterGrade }] = useSearch()

  return <EditDisciplineForm id={id} filterGrade={filterGrade} />
}

export default EditDisciplinePage
