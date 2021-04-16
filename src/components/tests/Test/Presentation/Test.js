import { useState, useEffect } from 'react'

import Button from 'react-bootstrap/Button'
import { Loadable } from 'components/common'

import Title from './Title'
import List from './List'
import AddQuestionButton from './AddQuestionButton'

const Test = ({
  className,
  isLoading,
  test: { id: testId, title, discipline, questions: initialQuestions } = {
    discipline: {},
    questions: [],
  },
  onCancel: cancel,
  ...props
}) => {
  const [questionStatuses, setQuestionStatuses] = useState({})
  const setStatus = (questionId, status) => {
    setQuestionStatuses((oldStatuses) => ({ ...oldStatuses, [questionId]: status }))
  }

  const [questions, setQuestions] = useState([])
  useEffect(() => {
    setQuestions(initialQuestions)
  }, [initialQuestions])

  return (
    <Loadable loaded={!isLoading}>
      <div className={`d-flex flex-column ${className}`} {...props}>
        <Title title={title} discipline={discipline} />

        <List
          className="my-4"
          questions={questions}
          getStatus={(questionId) => questionStatuses[questionId] ?? 'show'}
          setStatus={setStatus}
        />

        <div className="d-flex justify-content-center">
          <AddQuestionButton
            testId={testId}
            onAdd={(question) => {
              setQuestions([...questions, question])
              setStatus(question.id, 'add')
            }}
          />
        </div>

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
