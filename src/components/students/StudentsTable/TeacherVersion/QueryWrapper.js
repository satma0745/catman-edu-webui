import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { usePaginatedQuery } from 'api/students'

import { Loadable } from 'components/common'
import StudentsTable from './Presentation'

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

  useEffect(() => {
    if (paginationInfo) {
      setPagesCount(paginationInfo.pagesCount)
    }
  }, [paginationInfo, setPagesCount])

  return (
    <Loadable loaded={!isLoading}>
      <StudentsTable
        {...props}
        students={students}
        pageNumber={pageNumber}
        pagesCount={pagesCount}
        onPageChange={setPageNumber}
        onTestingResults={(id) => history.push(`/testing/results/student/${id}`)}
      />
    </Loadable>
  )
}

export default QueryWrapper
