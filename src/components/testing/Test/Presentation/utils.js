const yesNoQuestionInitialValues = (question) => ({
  ...question,
  givenAnswer: false,
})

const questionInitialValues = (question) => {
  switch (question.type) {
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
