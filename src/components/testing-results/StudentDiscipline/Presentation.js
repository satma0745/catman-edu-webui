import Table from 'react-bootstrap/Table'
import { Loadable, Pagination } from 'components/common'

const TestingResults = ({
  isLoading,
  results = [],
  pageNumber,
  pagesCount,
  onPageChange,
  onDetails: details,
  ...props
}) => (
  <Loadable loaded={!isLoading}>
    <div {...props}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Название теста</th>
            <th>Балл</th>
            <th>Степень усвоения</th>
          </tr>
        </thead>
        <tbody>
          {results.map(({ studentId, testId, testTitle, actualScore, maxScore }) => (
            <tr key={`${studentId}-${testId}`} onClick={() => details({ studentId, testId })}>
              <td className="align-middle">{testTitle}</td>
              <td className="align-middle">
                {actualScore} / {maxScore}
              </td>
              <td>{Math.round((actualScore * 100) / maxScore)} %</td>
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

export default TestingResults
