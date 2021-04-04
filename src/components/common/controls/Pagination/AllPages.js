import BSPagination from 'react-bootstrap/Pagination'

import PreviousPages from './PreviousPages'
import NextPages from './NextPages'

const AllPages = ({
  selectedPageNumber,
  pagesCount,
  onPageChange: gotoPage,
  edgePagesCount = 2,
  nearPagesCount = 2,
}) => (
  <BSPagination>
    <BSPagination.First disabled={selectedPageNumber === 1} onClick={() => gotoPage(1)} />
    <BSPagination.Prev
      disabled={selectedPageNumber === 1}
      onClick={() => gotoPage(selectedPageNumber - 1)}
    />

    <PreviousPages
      selectedPageNumber={selectedPageNumber}
      firstPagesCount={edgePagesCount}
      nearPagesCount={nearPagesCount}
      onPageChange={gotoPage}
    />

    <BSPagination.Item active>{selectedPageNumber}</BSPagination.Item>

    <NextPages
      selectedPageNumber={selectedPageNumber}
      pagesCount={pagesCount}
      lastPagesCount={edgePagesCount}
      nearPagesCount={nearPagesCount}
      onPageChange={gotoPage}
    />

    <BSPagination.Next
      disabled={selectedPageNumber === pagesCount}
      onClick={() => gotoPage(selectedPageNumber + 1)}
    />
    <BSPagination.Last
      disabled={selectedPageNumber === pagesCount}
      onClick={() => gotoPage(pagesCount)}
    />
  </BSPagination>
)

export default AllPages
