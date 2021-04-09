import Table from 'react-bootstrap/Table'
import { Loadable, Pagination } from 'components/common'

const TestsTable = ({
  className,
  isLoading,
  tests = [],
  pageNumber,
  pagesCount,
  onPageChange,
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
              <td />
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
