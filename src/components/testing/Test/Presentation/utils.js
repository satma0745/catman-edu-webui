const choiceQuestionInitialValues = (question) => ({
  ...question,
  answerOptions: question.answerOptions.map((answer) => ({ ...answer, selected: false })),
})

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
    case 'Value':
      return valueQuestionInitialValues(question)
    case 'YesNo':
      return yesNoQuestionInitialValues(question)
    default:
      return question
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
