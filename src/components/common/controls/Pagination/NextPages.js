import BSPagination from 'react-bootstrap/Pagination'
import { numbers, PageNumbers } from './utils'

const NextPages = ({
  selectedPageNumber,
  pagesCount,
  lastPagesCount,
  nearPagesCount,
  onPageChange: gotoPage,
}) => {
  if (selectedPageNumber + lastPagesCount + nearPagesCount >= pagesCount) {
    const pageNumbers = numbers({ from: selectedPageNumber + 1, to: pagesCount })
    return <PageNumbers pageNumbers={pageNumbers} onPageChange={gotoPage} />
  }

  const nearPageNumbers = numbers({
    from: selectedPageNumber + 1,
    to: selectedPageNumber + nearPagesCount,
  })
  const lastPageNumbers = numbers({ from: pagesCount - nearPagesCount + 1, to: pagesCount })

  return (
    <>
      <PageNumbers pageNumbers={nearPageNumbers} onPageChange={gotoPage} />
      <BSPagination.Ellipsis disabled />
      <PageNumbers pageNumbers={lastPageNumbers} onPageChange={gotoPage} />
    </>
  )
}

export default NextPages
