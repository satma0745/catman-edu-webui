import { useAuth } from 'auth'
import { useTaughtDisciplinesQuery } from 'api/teachers'

import TestsFilter from './Presentation'

const QueryWrapper = ({ initials, onApply, ...props }) => {
  const [userInfo] = useAuth()
  const { isLoading, disciplines } = useTaughtDisciplinesQuery(userInfo.id)

  const selectableDisciplines = () =>
    disciplines
      ?.filter((discipline) => discipline.isTaught)
      ?.reduce(
        (selectables, { id, title, grade }) => ({
          ...selectables,
          [id]: `${title} (${grade}й год обучения)`,
        }),
        { any: 'Все дисциплины' }
      )

  return (
    <TestsFilter
      isLoading={isLoading}
      disciplines={selectableDisciplines()}
      initials={initials}
      onApply={onApply}
      {...props}
    />
  )
}

export default QueryWrapper
