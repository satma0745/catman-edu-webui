import { useState, useEffect } from 'react'

import { DisciplinesTable } from '../components/disciplines'
import { getFilteredDisciplines } from '../api'

const DisciplinesPage = () => {
  const [disciplines, setDisciplines] = useState()
  useEffect(() => {
    const loadDisciplines = async () => {
      const result = await getFilteredDisciplines()
      if (result.success) {
        setDisciplines(result.disciplines)
      }
    }

    loadDisciplines()
  }, [])

  return (
    <>
      <h1>Страница управления дисциплинами</h1>
      {disciplines && <DisciplinesTable disciplines={disciplines} />}
    </>
  )
}

export default DisciplinesPage
