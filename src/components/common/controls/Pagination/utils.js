import BSPagination from 'react-bootstrap/Pagination'

const numbers = ({ from, to }) =>
  Array.from({ length: to - from + 1 }).map((_, index) => index + from)

const PageNumbers = ({ pageNumbers, onPageChange: gotoPage }) => (
  <>
    {pageNumbers.map((pageNumber) => (
      <BSPagination.Item key={`page-${pageNumber}`} onClick={() => gotoPage(pageNumber)}>
        {pageNumber}
      </BSPagination.Item>
    ))}
  </>
)

export { numbers, PageNumbers }
