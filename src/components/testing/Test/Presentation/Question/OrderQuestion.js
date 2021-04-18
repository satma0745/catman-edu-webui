import { FieldArray } from 'formik'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ListGroup from 'react-bootstrap/ListGroup'
import QuestionTemplate from './QuestionTemplate'

const OrderItem = ({ className, text, isFirst, isLast, moveUp, moveDown, ...props }) => (
  <div className={`d-flex justify-content-between align-items-center ${className}`} {...props}>
    <p className="mb-0">{text}</p>

    <ButtonGroup size="sm">
      <Button variant="outline-primary" disabled={isFirst} onClick={() => moveUp()}>
        ▲
      </Button>
      <Button variant="outline-primary" disabled={isLast} onClick={() => moveDown()}>
        ▼
      </Button>
    </ButtonGroup>
  </div>
)

const OrderItems = ({ items, helpers: { move }, ...props }) => (
  <ListGroup variant="flush" {...props}>
    {items.map(({ id, text }, index) => (
      <ListGroup.Item key={id} className="px-4 py-3">
        <OrderItem
          text={text}
          isLast={index === items.length - 1}
          isFirst={index === 0}
          moveUp={() => move(index, index - 1)}
          moveDown={() => move(index, index + 1)}
        />
      </ListGroup.Item>
    ))}
  </ListGroup>
)

const OrderQuestion = ({ name, question, ...props }) => (
  <QuestionTemplate {...props} question={question}>
    <FieldArray
      name={`${name}.items`}
      render={(helpers) => <OrderItems items={question.items} helpers={helpers} />}
    />
  </QuestionTemplate>
)

export default OrderQuestion
