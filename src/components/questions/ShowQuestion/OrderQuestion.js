import ListGroup from 'react-bootstrap/ListGroup'
import QuestionTemplate from './QuestionTemplate'

const OrderQuestion = ({ cost, text, items = [], onEdit: edit, onDelete: $delete }) => {
  console.log({ items })

  return (
    <QuestionTemplate cost={cost} text={text} onEdit={edit} onDelete={$delete}>
      <ListGroup variant="flush">
        {items
          .sort((left, right) => left.orderIndex - right.orderIndex)
          .map(({ id, text: optionText }, index) => (
            <ListGroup.Item key={id}>
              <span className="text-primary">{index + 1}.</span>
              <span className="ml-1">{optionText}</span>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </QuestionTemplate>
  )
}

export default OrderQuestion
