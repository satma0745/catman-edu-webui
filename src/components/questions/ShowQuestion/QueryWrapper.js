import { useDeleteMutation } from 'api/questions'
import Question from './Presentation'

const QueryWrapper = ({ onEdit: edit, ...question }) => {
  const { $delete } = useDeleteMutation()

  return (
    <Question
      question={question}
      onEdit={() => edit(question.id)}
      onDelete={() => $delete(question.id)}
    />
  )
}

export default QueryWrapper
