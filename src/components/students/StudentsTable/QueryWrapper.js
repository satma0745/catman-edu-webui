import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { usePaginatedQuery, useDeleteMutation } from 'api/students'

import { Loadable } from 'components/common'
import Presentation from './Presentation'

const QueryWrapper = ({ filter, ...props }) => {
  const history = useHistory()

  const [pageNumber, setPageNumber] = useState(1)
  const [pagesCount, setPagesCount] = useState(1)

  const { isLoading, students, paginationInfo } = usePaginatedQuery(
    {
      page: pageNumber,
      pageSize: 50,
    },
    filter
  )

  const { $delete } = useDeleteMutation()

  useEffect(() => {
    if (paginationInfo) {
      setPagesCount(paginationInfo.pagesCount)
    }
  }, [paginationInfo, setPagesCount])

  return (
    <Loadable loaded={!isLoading}>
      <Presentation
        {...props}
        students={students}
        pageNumber={pageNumber}
        pagesCount={pagesCount}
        onPageChange={setPageNumber}
        onTestingResults={(id) => history.push(`/testing/results/student/${id}`)}
        onEdit={(id) => history.push(`/students/edit/${id}`)}
        onDelete={$delete}
      />
    </Loadable>
  )
}

export default QueryWrapper
