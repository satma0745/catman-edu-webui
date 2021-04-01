import Table from 'react-bootstrap/Table'

const DisciplinesTable = ({ disciplines = [] }) => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Название</th>
        <th>Класс</th>
      </tr>
    </thead>
    <tbody>
      {disciplines.map(({ id, title, grade }) => (
        <tr key={id}>
          <td>{title}</td>
          <td>{grade}</td>
        </tr>
      ))}
    </tbody>
  </Table>
)

export default DisciplinesTable
