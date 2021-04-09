import { useQuery } from 'react-query'
import { useFilteredQuery as useDisciplinesQuery } from 'api/disciplines'
import { getPaginatedCall } from '../calls'

const queryWrapper = ({ queryKey }) => {
  const [_, paginationInfo, filter] = queryKey
  return getPaginatedCall(paginationInfo, filter)
}

const usePaginatedQuery = ({ page, pageSize }, filter) => {
  const { isLoading: disciplinesLoading, disciplines } = useDisciplinesQuery()

  const { isLoading: testsLoading, data: { tests, paginationInfo } = {} } = useQuery(
    ['tests', { page, pageSize }, filter],
    queryWrapper,
    { keepPreviousData: true }
  )

  const disciplineTitle = (id) => disciplines.find((discipline) => discipline.id === id)?.title
  const disciplineGrade = (id) => disciplines.find((discipline) => discipline.id === id)?.grade

  const testsWithDisciplineTitles = () => {
    if (disciplinesLoading || testsLoading) {
      return undefined
    }

    return tests.map((test) => ({
      ...test,
      discipline: disciplineTitle(test.disciplineId),
      grade: disciplineGrade(test.disciplineId),
    }))
  }

  return {
    isLoading: disciplinesLoading || testsLoading,
    tests: testsWithDisciplineTitles(),
    paginationInfo,
  }
}

export default usePaginatedQuery
