import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import { Pagination } from 'components/common'

const StudentsTable = ({
  className,
  students,
  pageNumber,
  pagesCount,
  onPageChange,
  onTestingResults: testingResults,
  onEdit: edit,
  onDelete: $delete,
  ...props
}) => (
  <div className={className}>
    <Table {...props} striped bordered hover>
      <thead>
        <tr>
          <th>Имя</th>
          <th>Группа</th>
          <th>Операции</th>
        </tr>
      </thead>
      <tbody>
        {students.map(({ id, fullName, group }) => (
          <tr key={id}>
            <td className="align-middle">{fullName}</td>
            <td className="align-middle">{group}</td>
            <td>
              <Form inline className="justify-content-around">
                <Button variant="outline-secondary" onClick={() => testingResults(id)}>
                  Успеваемость
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

    <div className="d-flex justify-content-center">
      <Pagination
        selectedPageNumber={pageNumber}
        pagesCount={pagesCount}
        onPageChange={onPageChange}
      />
    </div>
  </div>
)

export default StudentsTable
