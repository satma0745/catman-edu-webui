const prepareChoiceTestQuestionForSubmition = (question) => ({
  id: question.id,
  type: question.type,
  selectedAnswerOptionIds: question.answerOptions
    .filter((answerOption) => answerOption.selected)
    .map((answerOption) => answerOption.id),
})

const prepareOrderTestQuestionForSubmition = (question) => ({
  id: question.id,
  type: question.type,
  orderedItemIds: question.items.map((item) => item.id),
})

const prepareValueTestQuestionForSubmition = (question) => ({
  id: question.id,
  type: question.type,
  givenAnswer: question.givenAnswer,
})

const prepareYesNoTestQuestionForSubmition = (question) => ({
  id: question.id,
  type: question.type,
  givenAnswer: question.givenAnswer,
})

const prepareTestQuestionForSubmition = (question) => {
  switch (question.type) {
    case 'Choice':
      return prepareChoiceTestQuestionForSubmition(question)
    case 'Order':
      return prepareOrderTestQuestionForSubmition(question)
    case 'Value':
      return prepareValueTestQuestionForSubmition(question)
    case 'YesNo':
      return prepareYesNoTestQuestionForSubmition(question)
    default:
      throw new Error(`Unknown question type "${question.type}"`)
  }
}

const prepareTestForSubmition = (test) => ({
  questions: test.questions.map(prepareTestQuestionForSubmition),
})

export { prepareTestForSubmition }
