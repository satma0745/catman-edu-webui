import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

const DisciplinesTable = ({ disciplines = [], onDelete }) => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Название</th>
        <th>Класс</th>
        <th>Операции</th>
      </tr>
    </thead>
    <tbody>
      {disciplines.map(({ id, title, grade }) => (
        <tr key={id}>
          <td>{title}</td>
          <td>{grade}</td>
          <td>
            <Button variant="outline-danger" onClick={() => onDelete(id)}>
              Удалить
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
)

export default DisciplinesTable
