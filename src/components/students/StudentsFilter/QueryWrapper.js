import { useAllQuery as useGroupsQuery } from 'api/groups'
import StudentsFilter from './Presentation'

const QueryWrapper = ({ onApply, ...props }) => {
  const { isLoading, groups } = useGroupsQuery()

  const selectableGroups = () =>
    groups?.reduce((selectables, { id, title }) => ({ ...selectables, [id]: title }), {
      any: 'Все классы',
    })

  return (
    <StudentsFilter
      isLoading={isLoading}
      groups={selectableGroups()}
      onApply={onApply}
      {...props}
    />
  )
}

export default QueryWrapper