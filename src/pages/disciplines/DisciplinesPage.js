import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import { DisciplinesFilter, DisciplinesTable } from 'components/disciplines'

const DisciplinesPage = () => {
  const history = useHistory()
  const [filter, setFilter] = useState({})

  return (
    <>
      <h1>Страница управления дисциплинами</h1>
      <DisciplinesFilter onApply={(options) => setFilter(options)} />

      <DisciplinesTable className="my-4" filter={filter} />

      <div className="d-flex justify-content-center">
        <Button onClick={() => history.push('/disciplines/add')}>Добавить дисциплину</Button>
      </div>
    </>
  )
}

export default DisciplinesPage
