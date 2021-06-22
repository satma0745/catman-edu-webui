import { useHistory, useParams } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import { Test } from 'components/tests'

const TestPage = () => {
  const { id, disciplineId } = useParams()
  const history = useHistory()

  return (
    <>
      <Test id={id} />

      <div>
        <Button
          variant="outline-primary"
          onClick={() => history.push(`/disciplines/${disciplineId}/tests`)}
        >
          Назад
        </Button>
      </div>
    </>
  )
}

export default TestPage
