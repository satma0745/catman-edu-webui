import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'

import { Loadable } from 'components/common'
import { ShowQuestion } from 'components/questions'

const Test = ({
  className,
  isLoading,
  title,
  discipline = {},
  questions = [],
  onCancel: cancel,
  ...props
}) => (
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
              <ShowQuestion {...question} />
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

export default Test
