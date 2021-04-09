import { useSearch } from 'routing/utils'
import { AddDisciplineForm } from 'components/disciplines'

const AddDisciplinePage = () => {
  const [params] = useSearch()
  const { grade } = params

  return <AddDisciplineForm defaultGrade={grade} />
}

export default AddDisciplinePage
