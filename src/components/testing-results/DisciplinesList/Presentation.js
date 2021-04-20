import { Loadable } from 'components/common'
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const isPresent = (value) => value !== null && value !== undefined

const Discipline = ({
  title,
  grade,
  performance: { testCoverage, averageAccuracy },
  onSelect,
  ...props
}) => {
  const prettyCoverage = isPresent(testCoverage) ? `${Math.round(testCoverage * 100)}%` : '-'
  const prettyAccuracy = isPresent(averageAccuracy) ? `${Math.round(averageAccuracy * 100)}%` : '-'

  return (
    <Card {...props}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="text-muted">{grade}й класс</Card.Subtitle>

        <div className="my-3">
          <p className="mb-0">Пройденно тестов: {prettyCoverage}</p>
          <p className="mb-0">Степень усвоения: {prettyAccuracy}</p>
        </div>

        <div className="d-flex justify-content-end">
          <Button variant="outline-primary" size="sm" onClick={onSelect}>
            Результаты тестирования
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

const DisciplinesList = ({ isLoading, disciplines = [], performance = {}, onSelect, ...props }) => (
  <Loadable loaded={!isLoading}>
    <CardColumns {...props}>
      {disciplines.map(({ id: disciplineId, title, grade }) => (
        <Discipline
          key={disciplineId}
          className="shadow-sm"
          title={title}
          grade={grade}
          performance={performance.disciplinesPerformance?.[disciplineId]}
          onSelect={() => onSelect(disciplineId)}
        />
      ))}
    </CardColumns>
  </Loadable>
)

export default DisciplinesList
