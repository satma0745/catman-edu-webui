const AddQuestion = ({ question }) => {
  switch (question.type) {
    case 'Choice':
      return <p>New choice question</p>
    case 'Order':
      return <p>New order question</p>
    case 'Value':
      return <p>New value question</p>
    case 'YesNo':
      return <p>New yes/no question</p>
    default:
      throw new Error(`Unknown question type "${question.type}"`)
  }
}

export default AddQuestion
