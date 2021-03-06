import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { usePaginatedQuery, useDeleteMutation } from 'api/admins'

import AdminsTable from './Presentation'

const QueryWrapper = (props) => {
  const history = useHistory()

  const [pageNumber, setPageNumber] = useState(1)
  const [pagesCount, setPagesCount] = useState(1)

  const { isLoading, admins, paginationInfo } = usePaginatedQuery({
    page: pageNumber,
    pageSize: 20,
  })

  useEffect(() => {
    if (paginationInfo) setPagesCount(paginationInfo.pagesCount)
  }, [paginationInfo, setPagesCount])

  const { $delete } = useDeleteMutation()

  return (
    <AdminsTable
      {...props}
      isLoading={isLoading}
      admins={admins}
      pageNumber={pageNumber}
      pagesCount={pagesCount}
      onPageChange={setPageNumber}
      onEdit={(id) => history.push(`admins/edit/${id}`)}
      onDelete={$delete}
    />
  )
}

export default QueryWrapper
