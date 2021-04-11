import ChoiceQuestion from './ChoiceQuestion'
import OrderQuestion from './OrderQuestion'
import ValueQuestion from './ValueQuestion'
import YesNoQuestion from './YesNoQuestion'

const Question = ({ question, ...props }) => {
  switch (question.type) {
    case 'Choice':
      return <ChoiceQuestion {...props} {...question} />
    case 'Order':
      return <OrderQuestion {...props} {...question} />
    case 'Value':
      return <ValueQuestion {...props} {...question} />
    case 'YesNo':
      return <YesNoQuestion {...props} {...question} />
    default:
      throw new Error(`Unknown question type "${question.type}"`)
  }
}

export default Question
