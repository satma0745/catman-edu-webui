import { useQuery } from 'react-query'
import { useFilteredQuery as useDisciplinesQuery } from 'api/disciplines'

import { getTaughtDisciplinesCall } from '../calls'

const queryWrapper = ({ queryKey }) => {
  const [_, teacherId] = queryKey
  return getTaughtDisciplinesCall(teacherId)
}

const compose = (disciplines, taughtDisciplinesIds) =>
  disciplines.map((discipline) => ({
    ...discipline,
    isTaught: taughtDisciplinesIds.includes(discipline.id),
  }))

const useTaughtDisciplinesQuery = (
  teacherId,
  { onNotFoundError, filter } = { onNotFoundError: () => {}, filter: {} }
) => {
  const { isLoading: disciplinesLoading, disciplines } = useDisciplinesQuery(filter)

  const { isLoading: taughtDisciplinesLoading, data: taughtDisciplinesIds } = useQuery(
    ['teachers.disciplines', teacherId],
    queryWrapper,
    {
      onError: ({ notFound }) => {
        if (notFound) {
          onNotFoundError()
        }
      },
    }
  )

  const isLoading = disciplinesLoading || taughtDisciplinesLoading
  const composed = isLoading ? [] : compose(disciplines, taughtDisciplinesIds)

  return { isLoading, disciplines: composed }
}

export default useTaughtDisciplinesQuery
