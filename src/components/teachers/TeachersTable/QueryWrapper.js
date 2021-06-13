import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { usePaginatedQuery, useDeleteMutation } from 'api/teachers'

import TeachersTable from './Presentation'

const QueryWrapper = (props) => {
  const history = useHistory()

  const [pageNumber, setPageNumber] = useState(1)
  const [pagesCount, setPagesCount] = useState(1)

  const { isLoading, teachers, paginationInfo } = usePaginatedQuery({
    page: pageNumber,
    pageSize: 20,
  })

  useEffect(() => {
    if (paginationInfo) setPagesCount(paginationInfo.pagesCount)
  }, [paginationInfo, setPagesCount])

  const { $delete } = useDeleteMutation()

  return (
    <TeachersTable
      {...props}
      isLoading={isLoading}
      teachers={teachers}
      pageNumber={pageNumber}
      pagesCount={pagesCount}
      onPageChange={setPageNumber}
      onEdit={(id) => history.push(`teachers/edit/${id}`)}
      onDelete={$delete}
    />
  )
}

export default QueryWrapper
