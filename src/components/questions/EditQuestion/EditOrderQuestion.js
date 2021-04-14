import ListGroup from 'react-bootstrap/ListGroup'
import EditQuestionTemplate from './EditQuestionTemplate'

const EditOrderQuestion = ({ cost, text, items = [], onEdit: edit, onDelete: $delete }) => (
  <EditQuestionTemplate cost={cost} text={text} onEdit={edit} onDelete={$delete}>
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
  </EditQuestionTemplate>
)

export default EditOrderQuestion
