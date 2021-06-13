import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'

import { Loadable } from 'components/common'

const Presentation = ({ className, isLoading, disciplines = [], onTests: tests, ...props }) => (
  <Loadable loaded={!isLoading}>
    <Table {...props} className={`mb-0 ${className}`} striped bordered hover>
      <thead>
        <tr>
          <th>Название</th>
          <th>Год обучения</th>
          <th>Операции</th>
        </tr>
      </thead>
      <tbody>
        {disciplines.map(({ id, title, grade }) => (
          <tr key={id}>
            <td className="align-middle">{title}</td>
            <td className="align-middle">{grade}</td>
            <td>
              <Form inline className="justify-content-around">
                <Button variant="outline-info" onClick={() => tests(id)}>
                  Тесты
                </Button>
              </Form>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </Loadable>
)

export default Presentation
