import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

const GroupsTable = ({
  className,
  groups,
  onStudents: students,
  onEdit: edit,
  onDelete: $delete,
  ...props
}) => (
  <Table {...props} className={`mb-0 ${className}`} striped bordered hover>
    <thead>
      <tr>
        <th>Название группы</th>
        <th>Год обучения</th>
        <th>Операции</th>
      </tr>
    </thead>
    <tbody>
      {groups.map(({ id, title, grade }) => (
        <tr key={id}>
          <td className="align-middle">{title}</td>
          <td className="align-middle">{grade}</td>
          <td>
            <Form inline className="justify-content-around">
              <Button variant="outline-secondary" onClick={() => students(id)}>
                Учащиеся
              </Button>
              <Button variant="outline-primary" onClick={() => edit(id)}>
                Изменить
              </Button>
              <Button variant="outline-danger" onClick={() => $delete(id)}>
                Удалить
              </Button>
            </Form>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
)

export default GroupsTable
