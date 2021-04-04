import { useLocation } from 'react-router-dom'
import { AddDisciplineForm } from 'components/disciplines'

const AddDisciplinePage = () => {
  const { search } = useLocation()

  const params = new URLSearchParams(search)
  const grade = params.get('grade')

  return <AddDisciplineForm defaultGrade={grade} />
}

export default AddDisciplinePage
