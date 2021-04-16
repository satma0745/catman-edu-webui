import Button from 'react-bootstrap/Button'

const ShowTitle = ({ title, discipline, onEdit: edit, ...props }) => (
  <div {...props}>
    <h2>Тест &quot;{title}&quot;</h2>

    <h4>
      По дисциплине &quot;{discipline.title}&quot; ({discipline.grade}й класс)
    </h4>

    <div className="d-flex justify-content-end">
      <Button variant="outline-primary" onClick={() => edit()}>
        Изменить
      </Button>
    </div>
  </div>
)

export default ShowTitle
