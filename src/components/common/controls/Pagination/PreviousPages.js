import BSPagination from 'react-bootstrap/Pagination'
import { numbers, PageNumbers } from './utils'

const PreviousPages = ({
  selectedPageNumber,
  firstPagesCount,
  nearPagesCount,
  onPageChange: gotoPage,
}) => {
  if (selectedPageNumber - 1 <= firstPagesCount + nearPagesCount) {
    const lastPageNumber = Math.min(firstPagesCount + nearPagesCount, selectedPageNumber - 1)
    const pageNumbers = numbers({ from: 1, to: lastPageNumber })
    return <PageNumbers pageNumbers={pageNumbers} onPageChange={gotoPage} />
  }

  const firstPageNumbers = numbers({ from: 1, to: firstPagesCount })
  const nearPageNumbers = numbers({
    from: selectedPageNumber - nearPagesCount,
    to: selectedPageNumber - 1,
  })

  return (
    <>
      <PageNumbers pageNumbers={firstPageNumbers} onPageChange={gotoPage} />
      <BSPagination.Ellipsis disabled />
      <PageNumbers pageNumbers={nearPageNumbers} onPageChange={gotoPage} />
    </>
  )
}

export default PreviousPages
