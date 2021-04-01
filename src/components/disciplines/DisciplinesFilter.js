import { useState } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Dropdown } from '../common/controls'

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

const DisciplinesFilter = ({ onApply }) => {
  const [grade, setGrade] = useState()
  const [title, setTitle] = useState()

  return (
    <Form inline className="my-4">
      <Dropdown
        className="mr-2"
        variant="outline-primary"
        title="Выберите класс"
        items={grades}
        onSelect={(selectedGrade) => setGrade(selectedGrade || undefined)}
      />

      <Form.Control
        className="mr-2 flex-grow-1"
        type="text"
        placeholder="Название дисциплины"
        onChange={(event) => setTitle(event.target.value)}
      />

      <Button onClick={() => onApply({ title, grade })}>Поиск</Button>
    </Form>
  )
}

export default DisciplinesFilter
