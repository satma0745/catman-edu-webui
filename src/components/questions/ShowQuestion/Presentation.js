import ChoiceQuestion from './ChoiceQuestion'
import OrderQuestion from './OrderQuestion'
import ValueQuestion from './ValueQuestion'
import YesNoQuestion from './YesNoQuestion'

const Question = ({ question, onDelete: $delete, ...props }) => {
  switch (question.type) {
    case 'Choice':
      return <ChoiceQuestion {...props} {...question} onDelete={() => $delete()} />
    case 'Order':
      return <OrderQuestion {...props} {...question} onDelete={() => $delete()} />
    case 'Value':
      return <ValueQuestion {...props} {...question} onDelete={() => $delete()} />
    case 'YesNo':
      return <YesNoQuestion {...props} {...question} onDelete={() => $delete()} />
    default:
      throw new Error(`Unknown question type "${question.type}"`)
  }
}

export default Question
