import { useDeleteMutation } from 'api/questions'
import Question from './Presentation'

const QueryWrapper = (question) => {
  const { $delete } = useDeleteMutation()

  return <Question question={question} onDelete={() => $delete(question.id)} />
}

export default QueryWrapper
