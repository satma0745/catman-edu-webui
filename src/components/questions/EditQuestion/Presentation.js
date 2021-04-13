// import EditChoiceQuestion from './EditChoiceQuestion'
// import EditOrderQuestion from './EditOrderQuestion'
import EditValueQuestion from './EditValueQuestion'
import EditYesNoQuestion from './EditYesNoQuestion'

const Question = ({ question, onCancel: cancel, onSave: save, ...props }) => {
  switch (question.type) {
    // case 'Choice':
    //   return <EditChoiceQuestion {...props} {...question} onCancel={cancel} onSave={() => save()} />
    // case 'Order':
    //   return <EditOrderQuestion {...props} {...question} onCancel={cancel} onSave={() => save()} />
    case 'Value':
      return <EditValueQuestion {...props} oldQuestion={question} onCancel={cancel} onSave={save} />
    case 'YesNo':
      return <EditYesNoQuestion {...props} oldQuestion={question} onCancel={cancel} onSave={save} />
    default:
      throw new Error(`Unknown question type "${question.type}"`)
  }
}

export default Question
