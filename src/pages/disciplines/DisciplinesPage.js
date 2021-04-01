import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Button from 'react-bootstrap/Button'

import { DisciplinesFilter, DisciplinesTable } from '../../components/disciplines'
import { deleteDiscipline, getFilteredDisciplines } from '../../api'

const DisciplinesPage = () => {
  const history = useHistory()

  const [disciplines, setDisciplines] = useState()
  const [filter, setFilter] = useState({})

  const loadDisciplines = async () => {
    const { success, disciplines: fetchedDisciplines } = await getFilteredDisciplines(filter)
    if (success) {
      setDisciplines(fetchedDisciplines)
    }
  }

  const onDelete = async (id) => {
    const { success } = await deleteDiscipline(id)
    if (success) {
      await loadDisciplines()
    }
  }

  useEffect(() => {
    loadDisciplines()
  }, [filter])

  return (
    <>
      <h1>Страница управления дисциплинами</h1>
      <DisciplinesFilter onApply={(options) => setFilter(options)} />
      {disciplines && (
        <DisciplinesTable
          disciplines={disciplines}
          onEdit={(id) => {
            history.push(`/disciplines/edit/${id}`)
          }}
          onDelete={onDelete}
        />
      )}

      <div className="d-flex justify-content-center">
        <Button onClick={() => history.push('/disciplines/add')}>Добавить дисциплину</Button>
      </div>
    </>
  )
}

export default DisciplinesPage
