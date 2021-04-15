import { useState } from 'react'

import Button from 'react-bootstrap/Button'
import { Loadable } from 'components/common'

import List from './List'
import Title from './Title'

const Test = ({
  className,
  isLoading,
  test: { title, discipline, questions } = { discipline: {}, questions: [] },
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
        <Title title={title} discipline={discipline} />

        <List className="my-4" questions={questions} getStatus={getStatus} setStatus={setStatus} />

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
