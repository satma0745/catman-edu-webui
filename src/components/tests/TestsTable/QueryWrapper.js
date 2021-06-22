import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { useAuth } from 'auth'
import { usePaginatedQuery, useDeleteMutation } from 'api/tests'

import TestsTable from './Presentation'

const QueryWrapper = ({ filter, disciplineId, ...props }) => {
  const history = useHistory()
  const [userInfo] = useAuth()

  const [pageNumber, setPageNumber] = useState(1)
  const [pagesCount, setPagesCount] = useState(1)

  const { isLoading, tests, paginationInfo } = usePaginatedQuery(
    {
      page: pageNumber,
      pageSize: 50,
    },
    { ...filter, disciplineId, teacherId: userInfo.id }
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
      onDetails={(id) => history.push(`/disciplines/${disciplineId}/tests/${id}`)}
      onDelete={$delete}
    />
  )
}

export default QueryWrapper
