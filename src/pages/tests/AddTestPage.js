import { useSearch } from 'routing/utils'
import { AddTestForm } from 'components/tests'

const AddTestPage = () => {
  const [defaults] = useSearch()

  return <AddTestForm defaults={defaults} />
}

export default AddTestPage
