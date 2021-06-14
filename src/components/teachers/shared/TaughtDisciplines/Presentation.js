import { Checkbox } from 'components/common/controls/formik'
import Table from 'react-bootstrap/Table'

const TaughtDisciplines = ({ disciplines, ...props }) => (
  <Table {...props} striped bordered hover>
    <thead>
      <tr>
        <th>Преподаёт</th>
        <th>Дисциплина</th>
        <th>Год обучения</th>
      </tr>
    </thead>

    <tbody>
      {disciplines.map(({ id, title, grade }, index) => (
        <tr key={id}>
          <td>
            <div className="d-flex justify-content-center">
              <Checkbox className="mb-0" name={`disciplines[${index}].isTaught`} />
            </div>
          </td>
          <td>{title}</td>
          <td>{grade}</td>
        </tr>
      ))}
    </tbody>
  </Table>
)

export default TaughtDisciplines
