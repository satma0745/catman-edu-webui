import { useParams } from 'react-router-dom'
import { useSearch } from 'routing/utils'

import { AddTestForm } from 'components/tests'

const AddTestPage = () => {
  const { disciplineId } = useParams()
  const [defaults] = useSearch()

  return <AddTestForm disciplineId={disciplineId} defaults={defaults} />
}

export default AddTestPage
