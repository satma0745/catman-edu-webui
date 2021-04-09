import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import { Loadable, Pagination } from 'components/common'

const TestsTable = ({
  className,
  isLoading,
  tests = [],
  pageNumber,
  pagesCount,
  onPageChange,
  onDetails: details,
  onDelete: $delete,
  ...props
}) => (
  <Loadable loaded={!isLoading}>
    <div className={className}>
      <Table {...props} striped bordered hover>
        <thead>
          <tr>
            <th>Название</th>
            <th>Дисциплина</th>
            <th>Класс</th>
            <th>Операции</th>
          </tr>
        </thead>
        <tbody>
          {tests.map(({ id, title, discipline, grade }) => (
            <tr key={id}>
              <td className="align-middle">{title}</td>
              <td className="align-middle">{discipline}</td>
              <td className="align-middle">{grade}</td>
              <td>
                <Form inline className="justify-content-around">
                  <Button variant="outline-secondary" onClick={() => details(id)}>
                    Подробнее
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
  </Loadable>
)

export default TestsTable
