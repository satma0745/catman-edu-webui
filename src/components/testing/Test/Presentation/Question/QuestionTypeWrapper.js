import ChoiceQuestion from './ChoiceQuestion'
import ValueQuestion from './ValueQuestion'
import YesNoQuestion from './YesNoQuestion'

const QuestionDummy = ({ question: { type, cost, text }, ...props }) => (
  <p {...props}>
    &lt;{type}&gt; [{cost}] {text}
  </p>
)

const QuestionTypeWrapper = ({ name, question, ...props }) => {
  switch (question.type) {
    case 'YesNo':
      return <YesNoQuestion {...props} name={name} question={question} />
    case 'Value':
      return <ValueQuestion {...props} name={name} question={question} />
    case 'Choice':
      return <ChoiceQuestion {...props} name={name} question={question} />
    case 'Order':
      return <QuestionDummy {...props} question={question} />
    default:
      throw new Error(`Unknown question type "${question.type}"`)
  }
}

export default QuestionTypeWrapper
