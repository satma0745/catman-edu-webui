import { useState } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Dropdown } from 'components/common/controls'

import { Loadable } from 'components/common'

const TestsFilter = ({ isLoading, disciplines, onApply, ...props }) => {
  const [disciplineId, setDisciplineId] = useState()
  const [title, setTitle] = useState()

  const onDisciplineSelect = (selectedDisciplineId) => {
    setDisciplineId(selectedDisciplineId !== 'any' ? selectedDisciplineId : undefined)
  }

  const apply = () => {
    onApply({ disciplineId, title })
  }

  return (
    <Loadable loaded={!isLoading}>
      <Form inline {...props}>
        <Dropdown
          className="mr-2"
          variant="outline-primary"
          title="Выберите дисциплину"
          items={disciplines}
          onSelect={onDisciplineSelect}
        />

        <Form.Control
          className="mr-2 flex-grow-1"
          type="text"
          placeholder="Название теста"
          onChange={(event) => setTitle(event.target.value)}
        />

        <Button onClick={() => apply()}>Поиск</Button>
      </Form>
    </Loadable>
  )
}

export default TestsFilter
