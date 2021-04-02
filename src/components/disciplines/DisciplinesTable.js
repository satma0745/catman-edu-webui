import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'

const DisciplinesTable = ({ disciplines = [], onEdit, onDelete }) => (
  <Table className="mb-0" striped bordered hover>
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
            <Form inline className="justify-content-around">
              <Button variant="outline-primary" onClick={() => onEdit(id)}>
                Изменить
              </Button>
              <Button variant="outline-danger" onClick={() => onDelete(id)}>
                Удалить
              </Button>
            </Form>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
)

export default DisciplinesTable
