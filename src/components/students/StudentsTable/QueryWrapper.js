import { useState, useEffect } from 'react'
import { usePaginatedQuery } from 'api/students'

import { Loadable } from 'components/common'
import Presentation from './Presentation'

const QueryWrapper = ({ ...props }) => {
  const [pageNumber, setPageNumber] = useState(1)
  const { isLoading, students, paginationInfo } = usePaginatedQuery({
    page: pageNumber,
    pageSize: 50,
  })

  const [pagesCount, setPagesCount] = useState(1)
  useEffect(() => {
    if (paginationInfo) setPagesCount(paginationInfo.pagesCount)
  }, [paginationInfo, setPagesCount])

  return (
    <Loadable loaded={!isLoading}>
      <Presentation
        {...props}
        students={students}
        pageNumber={pageNumber}
        pagesCount={pagesCount}
        onPageChange={setPageNumber}
      />
    </Loadable>
  )
}

export default QueryWrapper
