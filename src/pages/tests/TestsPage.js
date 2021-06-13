import { useSearch } from 'routing/utils'
import { useHistory } from 'react-router-dom'

import { TestsFilter, TestsTable } from 'components/tests'
import Button from 'react-bootstrap/Button'

const TestsPage = () => {
  const history = useHistory()

  const [filter, setFilter] = useSearch()

  return (
    <>
      <h1>Тесты</h1>

      <TestsFilter className="my-4" initials={filter} onApply={setFilter} />

      <TestsTable className="my-4" filter={filter} />

      <div className="d-flex justify-content-center">
        <Button
          variant="primary"
          onClick={() => history.push(`/tests/add?${new URLSearchParams(filter)}`)}
        >
          Добавить тест
        </Button>
      </div>
    </>
  )
}

export default TestsPage
