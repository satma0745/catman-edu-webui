import { useHistory } from 'react-router-dom'
import { useSearch } from 'routing/utils'

import Button from 'react-bootstrap/Button'
import { DisciplinesFilter, DisciplinesTable } from 'components/disciplines'

const DisciplinesPage = () => {
  const history = useHistory()
  const [filter, setFilter] = useSearch()

  const onAddClick = () => {
    const { grade } = filter
    if (grade) {
      const params = new URLSearchParams({ grade })
      history.push(`/disciplines/add?${params}`)
    } else {
      history.push('disciplines/add')
    }
  }

  return (
    <>
      <h1>Управление дисциплинами</h1>

      <DisciplinesFilter initials={filter} onApply={setFilter} />

      <DisciplinesTable className="my-4" filter={filter} />

      <div className="d-flex justify-content-center">
        <Button onClick={onAddClick}>Добавить дисциплину</Button>
      </div>
    </>
  )
}

export default DisciplinesPage
