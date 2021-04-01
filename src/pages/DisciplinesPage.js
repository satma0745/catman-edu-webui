import { useState, useEffect } from 'react'

import { DisciplinesFilter, DisciplinesTable } from '../components/disciplines'
import { getFilteredDisciplines } from '../api'

const DisciplinesPage = () => {
  const [disciplines, setDisciplines] = useState()
  const [filter, setFilter] = useState({})

  useEffect(() => {
    const loadDisciplines = async () => {
      const result = await getFilteredDisciplines(filter)
      if (result.success) {
        setDisciplines(result.disciplines)
      }
    }

    loadDisciplines()
  }, [filter])

  return (
    <>
      <h1>Страница управления дисциплинами</h1>
      <DisciplinesFilter onApply={(options) => setFilter(options)} />
      {disciplines && <DisciplinesTable disciplines={disciplines} />}
    </>
  )
}

export default DisciplinesPage
