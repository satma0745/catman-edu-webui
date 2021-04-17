const choiceQuestionInitialValues = (question) => ({
  ...question,
  answerOptions: question.answerOptions.map((answer) => ({ ...answer, selected: false })),
})

const orderQuestionInitialValues = (question) => question

const valueQuestionInitialValues = (question) => ({
  ...question,
  givenAnswer: '',
})

const yesNoQuestionInitialValues = (question) => ({
  ...question,
  givenAnswer: false,
})

const questionInitialValues = (question) => {
  switch (question.type) {
    case 'Choice':
      return choiceQuestionInitialValues(question)
    case 'Order':
      return orderQuestionInitialValues(question)
    case 'Value':
      return valueQuestionInitialValues(question)
    case 'YesNo':
      return yesNoQuestionInitialValues(question)
    default:
      throw new Error(`Unknown question type "${question.type}"`)
  }
}

const testInitialValues = (test) => {
  if (!test) {
    return {}
  }

  return {
    ...test,
    questions: test.questions.map(questionInitialValues),
  }
}

export { testInitialValues }
