import { useHistory, useParams } from 'react-router-dom'
import { useSingleQuery } from 'api/disciplines'

import Button from 'react-bootstrap/Button'
import { Loadable } from 'components/common'
import { TestsList } from 'components/testing'

const TestsListPage = () => {
  const history = useHistory()

  const { disciplineId } = useParams()
  const { isLoading, discipline } = useSingleQuery(disciplineId, {
    onNotFoundError: () => history.push('/notfound'),
  })

  return (
    <>
      <Loadable loaded={!isLoading}>
        <h1>
          Тесты по дисциплине &quot;{discipline?.title} ({discipline?.grade}й класс)&quot;
        </h1>
      </Loadable>

      <TestsList className="my-4" disciplineId={disciplineId} />

      <Button variant="outline-primary" onClick={() => history.push('/testing')}>
        Назад
      </Button>
    </>
  )
}

export default TestsListPage
