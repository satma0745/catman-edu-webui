import { useState } from 'react'
import id from 'uniqid'

import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { Dropdown } from 'components/common'

const types = ['Множественный выбор', 'Упорядочивание', 'Правда/ложь', 'Произвольный ввод']

const AddQuestionButton = ({ testId, onAdd: add }) => {
  const [typeIndex, setIndexType] = useState()

  const create = (selectedTypeIndex) => {
    const question = { id: id(), text: '', cost: undefined, testId }
    switch (selectedTypeIndex) {
      case 0:
        return { ...question, type: 'Choice', answerOptions: [] }
      case 1:
        return { ...question, type: 'Order', items: [] }
      case 2:
        return { ...question, type: 'YesNo', correctAnswer: false }
      case 3:
        return { ...question, type: 'Value', correctAnswer: '' }
      default:
        throw new Error(`Unknown question type with index "${typeIndex}"`)
    }
  }

  const onAdd = () => {
    if (!(typeIndex >= 0 && typeIndex < 4)) {
      return
    }

    add(create(typeIndex))
  }

  return (
    <ButtonGroup>
      <Button variant="outline-primary" onClick={onAdd}>
        Добавить вопрос
      </Button>
      <Dropdown
        as={ButtonGroup}
        title="Выберите тип вопроса"
        items={types}
        onSelect={(index) => setIndexType(index)}
      />
    </ButtonGroup>
  )
}

export default AddQuestionButton
