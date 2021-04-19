import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { usePaginatedResultsQuery as useTestingResultsQuery } from 'api/testing'

import TestingResults from './Presentation'

const QueryWrapper = ({ studentId, disciplineId, ...props }) => {
  const history = useHistory()

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
      onDetails={({ studentId: studId, testId }) =>
        history.push(`/testing/results/student/${studId}/${testId}`)
      }
    />
  )
}

export default QueryWrapper
