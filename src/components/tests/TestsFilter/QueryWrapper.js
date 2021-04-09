import { useFilteredQuery as useDisciplinesQuery } from 'api/disciplines'
import TestsFilter from './Presentation'

const QueryWrapper = ({ onApply, ...props }) => {
  const { isLoading, disciplines } = useDisciplinesQuery()

  const selectableDisciplines = () =>
    disciplines?.reduce(
      (selectables, { id, title, grade }) => ({
        ...selectables,
        [id]: `${title} (${grade}й класс)`,
      }),
      {
        any: 'Все дисциплины',
      }
    )

  return (
    <TestsFilter
      isLoading={isLoading}
      disciplines={selectableDisciplines()}
      onApply={onApply}
      {...props}
    />
  )
}

export default QueryWrapper
