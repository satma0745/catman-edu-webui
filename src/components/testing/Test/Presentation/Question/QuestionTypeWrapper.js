import ChoiceQuestion from './ChoiceQuestion'
import OrderQuestion from './OrderQuestion'
import ValueQuestion from './ValueQuestion'
import YesNoQuestion from './YesNoQuestion'

const QuestionTypeWrapper = ({ name, question, ...props }) => {
  switch (question.type) {
    case 'YesNo':
      return <YesNoQuestion {...props} name={name} question={question} />
    case 'Value':
      return <ValueQuestion {...props} name={name} question={question} />
    case 'Choice':
      return <ChoiceQuestion {...props} name={name} question={question} />
    case 'Order':
      return <OrderQuestion {...props} name={name} question={question} />
    default:
      throw new Error(`Unknown question type "${question.type}"`)
  }
}

export default QuestionTypeWrapper
