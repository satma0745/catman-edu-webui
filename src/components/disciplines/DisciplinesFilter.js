import { useState } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Dropdown } from 'components/common/controls'

const grades = [
  'Любой год обучения',
  '1й год обучения',
  '2й год обучения',
  '3й год обучения',
  '4й год обучения',
  '5й год обучения',
  '6й год обучения',
  '7й год обучения',
  '8й год обучения',
  '9й год обучения',
  '10й год обучения',
  '11й год обучения',
]

const DisciplinesFilter = ({ initials, onApply }) => {
  const [grade, setGrade] = useState(initials.grade)
  const [title, setTitle] = useState(initials.title)

  return (
    <Form inline className="my-4">
      <Dropdown
        className="mr-2"
        variant="outline-primary"
        title="Выберите год обучения"
        items={grades}
        initialValue={initials.grade}
        onSelect={(selectedGrade) => setGrade(selectedGrade || undefined)}
      />

      <Form.Control
        className="mr-2 flex-grow-1"
        type="text"
        placeholder="Название дисциплины"
        defaultValue={initials.title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <Button onClick={() => onApply({ title, grade })}>Поиск</Button>
    </Form>
  )
}

export default DisciplinesFilter
