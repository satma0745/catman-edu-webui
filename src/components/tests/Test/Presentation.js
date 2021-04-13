import { useState } from 'react'

import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'

import { Loadable } from 'components/common'
import { EditQuestion, ShowQuestion } from 'components/questions'

const Question = ({ status, question, onEdit: edit, ...props }) => {
  switch (status) {
    case 'edit':
      return <EditQuestion question={question} {...props} />
    case 'show':
      return <ShowQuestion {...question} onEdit={edit} {...props} />
    default:
      throw new Error(`Unknown question status "${status}"`)
  }
}

const Test = ({
  className,
  isLoading,
  title,
  discipline = {},
  questions = [],
  onCancel: cancel,
  ...props
}) => {
  const [editQuestionsIds, setEditQuestionsIds] = useState([])
  const getStatus = (questionId) => (editQuestionsIds.includes(questionId) ? 'edit' : 'show')
  const setStatus = (questionId, status) => {
    if (status === 'show') {
      setEditQuestionsIds(editQuestionsIds.filter((id) => id !== questionId))
      return
    }

    if (status === 'edit' && getStatus(questionId) !== 'edit') {
      setEditQuestionsIds([...editQuestionsIds, questionId])
    }
  }

  return (
    <Loadable loaded={!isLoading}>
      <div className={`d-flex flex-column ${className}`} {...props}>
        <div>
          <h2>Тест &quot;{title}&quot;</h2>
          <h4>
            По дисциплине &quot;{discipline.title}&quot; ({discipline.grade}й класс)
          </h4>
        </div>

        <ListGroup className="my-4" variant="flush">
          {questions
            .sort((left, right) => left.cost - right.cost)
            .map((question) => (
              <ListGroup.Item key={question.id}>
                <Question
                  status={getStatus(question.id)}
                  question={question}
                  onEdit={(questionId) => setStatus(questionId, 'edit')}
                  onCancel={(questionId) => setStatus(questionId, 'show')}
                  onSave={(questionId) => setStatus(questionId, 'show')}
                />
              </ListGroup.Item>
            ))}
        </ListGroup>

        <div className="d-flex justify-content-between">
          <Button variant="outline-primary" onClick={() => cancel()}>
            Назад
          </Button>
        </div>
      </div>
    </Loadable>
  )
}

export default Test
