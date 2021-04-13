import { useHistory } from 'react-router-dom'
import { useSaveMutation } from 'api/questions'

import Question from './Presentation'

const QueryWrapper = ({ question, onCancel: cancel, onSave: onAfterSave, ...props }) => {
  const history = useHistory()
  const { save } = useSaveMutation(question.id, {
    onSuccess: () => onAfterSave(question.id),
    onNotFoundError: () => history.push('/notfound'),
  })

  const onSave = (submittedQuestion, { setErrors }) => {
    save(submittedQuestion, { onValidationError: setErrors })
  }

  return (
    <Question {...props} question={question} onCancel={() => cancel(question.id)} onSave={onSave} />
  )
}

export default QueryWrapper
