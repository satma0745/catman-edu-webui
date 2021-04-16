import { useState } from 'react'

import ListGroup from 'react-bootstrap/ListGroup'
import { AddQuestion } from 'components/questions'

import AddButton from './AddButton'

const QuestionsList = ({ testId, ...props }) => {
  const [newQuestions, setNewQuestions] = useState([])

  const add = (question) => setNewQuestions((questions) => [...questions, question])

  const remove = (questionId) =>
    setNewQuestions((questions) => questions.filter((question) => question.id !== questionId))

  return (
    <div {...props}>
      <h3 className="text-center">Новые вопросы</h3>

      <ListGroup variant="flush">
        {newQuestions.map((question) => (
          <ListGroup.Item key={question.id}>
            <AddQuestion
              question={question}
              testId={testId}
              onCancel={() => remove(question.id)}
              onSave={() => remove(question.id)}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>

      <div className="d-flex justify-content-center">
        <AddButton testId={testId} onAdd={add} />
      </div>
    </div>
  )
}

export default QuestionsList
