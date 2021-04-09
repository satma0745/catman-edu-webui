import { Input } from 'components/common/controls/formik'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ListGroup from 'react-bootstrap/ListGroup'

const OrderItems = ({ move, remove, push, items, newOrderItem }) => (
  <div className="px-4">
    <ListGroup variant="flush">
      {items.map(({ id }, index) => (
        <ListGroup.Item key={id} className="px-0 py-4">
          <Input label="Текст пункта" name={`items[${index}].text`} />

          <div className="d-flex justify-content-between">
            <ButtonGroup>
              <Button
                variant="secondary"
                size="sm"
                disabled={index === 0}
                onClick={() => move(index, index - 1)}
              >
                Выше
              </Button>
              <Button
                variant="secondary"
                size="sm"
                disabled={index === items.length - 1}
                onClick={() => move(index, index + 1)}
              >
                Ниже
              </Button>
            </ButtonGroup>
            <Button variant="outline-danger" size="sm" onClick={() => remove(index)}>
              Удалить вариант ответа
            </Button>
          </div>
        </ListGroup.Item>
      ))}

      <ListGroup.Item className="px-0 py-4">
        <div className="d-flex justify-content-center">
          <Button onClick={() => push(newOrderItem())}>Добавить вариант ответа</Button>
        </div>
      </ListGroup.Item>
    </ListGroup>
  </div>
)

export default OrderItems
