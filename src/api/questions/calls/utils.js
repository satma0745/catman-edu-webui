const questionController = (questionType) => {
  switch (questionType) {
    case 'Choice':
      return 'questions/choice'
    case 'Order':
      return 'questions/order'
    case 'Value':
      return 'questions/value'
    case 'YesNo':
      return 'questions/yesNo'
    default:
      throw new Error(`Unknown question type "${questionType}"`)
  }
}

export { questionController }
