import Table from 'react-bootstrap/Table'

const Presentation = ({ className, groups, ...props }) => (
  <Table {...props} className={`mb-0 ${className}`} striped bordered hover>
    <thead>
      <tr>
        <th>Название класса</th>
        <th>Год обучения</th>
        <th>Операции</th>
      </tr>
    </thead>
    <tbody>
      {groups.map(({ id, title, grade }) => (
        <tr key={id}>
          <td>{title}</td>
          <td>{grade}</td>
          <td />
        </tr>
      ))}
    </tbody>
  </Table>
)

export default Presentation
