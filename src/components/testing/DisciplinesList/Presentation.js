import { Loadable } from 'components/common'
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Discipline = ({ title, grade, onSelect, ...props }) => (
  <Card {...props}>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Subtitle className="text-muted">{grade}й год обучения</Card.Subtitle>

      <div className="mt-3 d-flex justify-content-end">
        <Button variant="outline-primary" size="sm" onClick={onSelect}>
          Тесты
        </Button>
      </div>
    </Card.Body>
  </Card>
)

const DisciplinesList = ({ isLoading, disciplines = [], onSelect, ...props }) => (
  <Loadable loaded={!isLoading}>
    <CardColumns {...props}>
      {disciplines.map(({ id, title, grade }) => (
        <Discipline
          key={id}
          className="shadow-sm"
          title={title}
          grade={grade}
          onSelect={() => onSelect(id)}
        />
      ))}
    </CardColumns>
  </Loadable>
)

export default DisciplinesList
