import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import { Loadable } from 'components/common'

const Test = ({ isLoading, test = { questions: [] }, onCancel, ...props }) => (
  <Loadable loaded={!isLoading}>
    <div {...props}>
      <h1>{test.title}</h1>

      <ListGroup className="my-4" variant="flush">
        {test.questions
          .sort((left, right) => left.cost - right.cost)
          .map(({ id, type, cost, text }) => (
            <ListGroup.Item key={id}>
              <div>
                <p>
                  [{cost}] &lt;{type}&gt; {text}
                </p>
              </div>
            </ListGroup.Item>
          ))}
      </ListGroup>

      <Button variant="outline-primary" onClick={onCancel}>
        Отменить
      </Button>
    </div>
  </Loadable>
)

export default Test
