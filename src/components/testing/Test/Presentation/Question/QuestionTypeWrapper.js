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
      return <QuestionDummy {...props} question={question} />
    case 'Choice':
      return <QuestionDummy {...props} question={question} />
    case 'Order':
      return <QuestionDummy {...props} question={question} />
    default:
      throw new Error(`Unknown question type "${question.type}"`)
  }
}

export default QuestionTypeWrapper
