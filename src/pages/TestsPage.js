import { useSearch } from 'routing/utils'
import { TestsFilter, TestsTable } from 'components/tests'

const TestsPage = () => {
  const [filter, setFilter] = useSearch()

  return (
    <>
      <h1>Страница управления тестами</h1>
      <TestsFilter className="my-4" initials={filter} onApply={setFilter} />
      <TestsTable className="my-4" filter={filter} />
    </>
  )
}

export default TestsPage
