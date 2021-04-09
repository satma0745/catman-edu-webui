import { useState } from 'react'
import { TestsFilter, TestsTable } from 'components/tests'

const TestsPage = () => {
  const [filter, setFilter] = useState({})

  return (
    <>
      <h1>Страница управления тестами</h1>
      <TestsFilter className="my-4" onApply={setFilter} />
      <TestsTable className="my-4" filter={filter} />
    </>
  )
}

export default TestsPage
