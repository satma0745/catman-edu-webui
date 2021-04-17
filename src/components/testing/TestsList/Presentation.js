import Table from 'react-bootstrap/Table'
import { Loadable, Pagination } from 'components/common'

const TestsList = ({ isLoading, tests = [], pageNumber, pagesCount, onPageChange, ...props }) => (
  <Loadable loaded={!isLoading}>
    <div {...props}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Название</th>
            <th>Операции</th>
          </tr>
        </thead>
        <tbody>
          {tests.map(({ id, title }) => (
            <tr key={id}>
              <td className="align-middle">{title}</td>
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

export default TestsList
