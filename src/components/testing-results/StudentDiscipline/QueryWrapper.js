import { useState, useEffect } from 'react'
import { usePaginatedResultsQuery as useTestingResultsQuery } from 'api/testing'

import TestingResults from './Presentation'

const QueryWrapper = ({ studentId, disciplineId, ...props }) => {
  const [pageNumber, setPageNumber] = useState(1)
  const [pagesCount, setPagesCount] = useState(1)

  const { isLoading, results, paginationInfo } = useTestingResultsQuery(
    { page: pageNumber, pageSize: 50 },
    { studentId, disciplineId }
  )

  useEffect(() => {
    if (paginationInfo) setPagesCount(paginationInfo.pagesCount)
  }, [paginationInfo, setPagesCount])

  return (
    <TestingResults
      {...props}
      isLoading={isLoading}
      results={results}
      pageNumber={pageNumber}
      pagesCount={pagesCount}
      onPageChange={setPageNumber}
    />
  )
}

export default QueryWrapper
