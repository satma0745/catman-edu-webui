import { useState, useEffect } from 'react'

import Form from 'react-bootstrap/Form'
import { Dropdown } from '../components/common/controls'

import { DisciplinesTable } from '../components/disciplines'
import { getFilteredDisciplines } from '../api'

const grades = [
  'Все классы',
  '1й класс',
  '2й класс',
  '3й класс',
  '4й класс',
  '5й класс',
  '6й класс',
  '7й класс',
  '8й класс',
  '9й класс',
  '10й класс',
  '11й класс',
]

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
      <Dropdown
        className="mb-3"
        title="Выберите класс"
        items={grades}
        onSelect={(grade) => {
          setFilter({ ...filter, grade: grade || undefined })
        }}
      />
      <Form.Group>
        <Form.Label>Название дисциплины:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Название дисциплины"
          onChange={(event) => {
            setFilter({ ...filter, title: event.target.value })
          }}
        />
      </Form.Group>
      {disciplines && <DisciplinesTable disciplines={disciplines} />}
    </>
  )
}

export default DisciplinesPage
