import { useQuery } from 'react-query'
import { useAllQuery as useGroupsQuery } from 'api/groups'
import { getPaginatedCall } from '../calls'

const queryWrapper = ({ queryKey }) => {
  const [_, paginationInfo, filter] = queryKey
  return getPaginatedCall(paginationInfo, filter)
}

const usePaginatedQuery = ({ page, pageSize }, filter) => {
  const { isLoading: groupsLoading, groups } = useGroupsQuery()

  const { isLoading: studentsLoading, data: { students, paginationInfo } = {} } = useQuery(
    ['students', { page, pageSize }, filter],
    queryWrapper,
    { keepPreviousData: true }
  )

  const groupTitle = (id) => groups.find((group) => group.id === id)?.title

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
