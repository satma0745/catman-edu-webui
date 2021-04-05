import { useQuery } from 'react-query'
import { useAllQuery as useGroupsQuery } from 'api/groups'
import { getPaginatedCall } from '../calls'

const queryWrapper = ({ queryKey }) => {
  const [_, paginationInfo] = queryKey
  return getPaginatedCall(paginationInfo)
}

const usePaginatedQuery = ({ page, pageSize }) => {
  const { isLoading: groupsLoading, groups } = useGroupsQuery()

  const { isLoading: studentsLoading, data: { students, paginationInfo } = {} } = useQuery(
    ['students', { page, pageSize }],
    queryWrapper,
    { keepPreviousData: true }
  )

  const groupTitle = (groupId) => groups.find((group) => group.id === groupId)?.title

  const studentsWithGroupTitles = () => {
    if (groupsLoading || studentsLoading) {
      return undefined
    }

    return students.map((student) => ({
      ...student,
      group: groupTitle(student.groupId),
    }))
  }

  return {
    isLoading: groupsLoading || studentsLoading,
    students: studentsWithGroupTitles(),
    paginationInfo,
  }
}

export default usePaginatedQuery
