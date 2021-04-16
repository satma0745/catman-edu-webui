import { useState } from 'react'

import Button from 'react-bootstrap/Button'
import { Loadable } from 'components/common'

import Title from './Title'
import QuestionsList from './QuestionsList'
import NewQuestionsList from './NewQuestionsList'

const Test = ({
  className,
  isLoading,
  test: { id: testId, title, discipline, questions } = {
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

  return (
    <Loadable loaded={!isLoading}>
      <div className={`d-flex flex-column ${className}`} {...props}>
        <Title title={title} discipline={discipline} />

        <QuestionsList
          className="my-4"
          questions={questions}
          getStatus={(questionId) => questionStatuses[questionId] ?? 'show'}
          setStatus={setStatus}
        />

        <NewQuestionsList testId={testId} />

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
