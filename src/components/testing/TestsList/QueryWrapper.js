import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { usePaginatedQuery as useTestsQuery } from 'api/tests'

import TestsList from './Presentation'

const QueryWrapper = ({ disciplineId, ...props }) => {
  const history = useHistory()

  const [pageNumber, setPageNumber] = useState(1)
  const [pagesCount, setPagesCount] = useState(1)

  const { isLoading, tests, paginationInfo } = useTestsQuery(
    {
      page: pageNumber,
      pageSize: 50,
    },
    { disciplineId }
  )

  useEffect(() => {
    if (paginationInfo) setPagesCount(paginationInfo.pagesCount)
  }, [paginationInfo, setPagesCount])

  return (
    <TestsList
      {...props}
      isLoading={isLoading}
      tests={tests}
      onSelect={(testId) => history.push(`/testing/${testId}`)}
      pageNumber={pageNumber}
      pagesCount={pagesCount}
      onPageChange={setPageNumber}
    />
  )
}

export default QueryWrapper
