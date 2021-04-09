import { useState } from 'react'

import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { Dropdown } from 'components/common'

import { newQuestion } from './utils'

const AddButton = ({ testId, onAdd: add }) => {
  const [typeIndex, setIndexType] = useState()

  const onAdd = () => {
    if (typeIndex >= 0 && typeIndex < 4) {
      add(newQuestion(typeIndex, testId))
    }
  }

  return (
    <ButtonGroup>
      <Button variant="outline-primary" onClick={onAdd}>
        Добавить вопрос
      </Button>

      <Dropdown
        as={ButtonGroup}
        title="Выберите тип вопроса"
        items={['Множественный выбор', 'Упорядочивание', 'Правда/ложь', 'Произвольный ввод']}
        onSelect={(index) => setIndexType(index)}
      />
    </ButtonGroup>
  )
}

export default AddButton
