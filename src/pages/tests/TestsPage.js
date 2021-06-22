import { useHistory, useParams } from 'react-router-dom'
import { useSearch } from 'routing/utils'

import { useSingleQuery } from 'api/disciplines'

import Button from 'react-bootstrap/Button'
import { Loadable } from 'components/common'
import { TestsFilter, TestsTable } from 'components/tests'

const TestsPage = () => {
  const history = useHistory()

  const { disciplineId } = useParams()
  const [filter, setFilter] = useSearch()

  const { isLoading, discipline } = useSingleQuery(disciplineId, {
    onNotFoundError: () => history.push('/notfound'),
  })

  return (
    <Loadable loaded={!isLoading}>
      <h1>Тесты по дисциплине &quot;{discipline?.title}&quot;</h1>

      <TestsFilter className="my-4" initials={filter} onApply={setFilter} />

      <TestsTable className="my-4" disciplineId={disciplineId} filter={filter} />

      <div className="d-flex">
        {/* use flex-basis and flex-grow of side blocks to center add button */}
        <div style={{ flexBasis: 1, flexGrow: 1 }}>
          <Button variant="outline-primary" onClick={() => history.push('/disciplines')}>
            Вернуться к дисциплинам
          </Button>
        </div>

        <Button
          variant="primary"
          onClick={() =>
            history.push(
              `/disciplines/${disciplineId}/tests/add?${new URLSearchParams({
                ...filter,
                disciplineId,
              })}`
            )
          }
        >
          Добавить тест
        </Button>

        {/* use flex-basis and flex-grow of side blocks to center add button */}
        <div style={{ flexBasis: 1, flexGrow: 1 }} />
      </div>
    </Loadable>
  )
}

export default TestsPage
