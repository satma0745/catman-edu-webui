import ValueQuestion from './ValueQuestion'

const AddQuestion = ({ question, onCancel, onSave, ...props }) => {
  switch (question.type) {
    case 'Choice':
      return <p>New choice question</p>
    case 'Order':
      return <p>New order question</p>
    case 'Value':
      return <ValueQuestion {...props} onCancel={onCancel} onSave={onSave} />
    case 'YesNo':
      return <p>New yes/no question</p>
    default:
      throw new Error(`Unknown question type "${question.type}"`)
  }
}

export default AddQuestion
