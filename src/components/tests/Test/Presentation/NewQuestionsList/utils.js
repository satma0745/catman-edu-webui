import id from 'uniqid'

const newQuestion = (selectedTypeIndex, testId) => {
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
      throw new Error(`Unknown question type with index "${selectedTypeIndex}"`)
  }
}

export { newQuestion }
