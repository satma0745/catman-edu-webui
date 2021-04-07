import { useState, useEffect } from 'react'
import { usePaginatedQuery } from 'api/admins'

import AdminsTable from './Presentation'

const QueryWrapper = (props) => {
  const [pageNumber, setPageNumber] = useState(1)
  const [pagesCount, setPagesCount] = useState(1)

  const { isLoading, admins, paginationInfo } = usePaginatedQuery({
    page: pageNumber,
    pageSize: 20,
  })

  useEffect(() => {
    if (paginationInfo) setPagesCount(paginationInfo.pagesCount)
  }, [paginationInfo, setPagesCount])

  return (
    <AdminsTable
      {...props}
      isLoading={isLoading}
      admins={admins}
      pageNumber={pageNumber}
      pagesCount={pagesCount}
      onPageChange={setPageNumber}
    />
  )
}

export default QueryWrapper
