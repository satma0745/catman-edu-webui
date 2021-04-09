import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { usePaginatedQuery, useDeleteMutation } from 'api/tests'

import TestsTable from './Presentation'

const QueryWrapper = ({ filter, ...props }) => {
  const history = useHistory()

  const [pageNumber, setPageNumber] = useState(1)
  const [pagesCount, setPagesCount] = useState(1)

  const { isLoading, tests, paginationInfo } = usePaginatedQuery(
    {
      page: pageNumber,
      pageSize: 50,
    },
    filter
  )

  const { $delete } = useDeleteMutation()

  useEffect(() => {
    if (paginationInfo) setPagesCount(paginationInfo.pagesCount)
  }, [paginationInfo, setPagesCount])

  return (
    <TestsTable
      {...props}
      isLoading={isLoading}
      tests={tests}
      pageNumber={pageNumber}
      pagesCount={pagesCount}
      onPageChange={setPageNumber}
      onDetails={(id) => history.push(`/tests/${id}`)}
      onDelete={$delete}
    />
  )
}

export default QueryWrapper
