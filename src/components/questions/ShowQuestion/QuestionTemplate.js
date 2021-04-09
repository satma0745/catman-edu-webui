import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const QuestionTitle = ({ text, cost }) => (
  <div className="d-flex align-items-center">
    <div className="bg-primary py-1 px-2 text-light rounded">{cost}</div>
    <div className="ml-2">{text}</div>
  </div>
)

const QuestionTemplate = ({
  text,
  cost,
  onEdit: edit,
  onDelete: $delete,
  contentBackground,
  children,
}) => (
  <Card style={{ overflow: 'hidden' }}>
    <Card.Header>
      <QuestionTitle text={text} cost={cost} />
    </Card.Header>

    <Card.Body className="p-0" style={{ background: contentBackground }}>
      {children}
    </Card.Body>

    <Card.Footer className="d-flex justify-content-between">
      <Button variant="outline-primary" onClick={() => edit()}>
        Изменить
      </Button>
      <Button variant="outline-danger" onClick={() => $delete()}>
        Удалить
      </Button>
    </Card.Footer>
  </Card>
)

export default QuestionTemplate
