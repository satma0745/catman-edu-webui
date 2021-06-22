import { useFilteredQuery as useDisciplinesQuery } from 'api/disciplines'
import { useAddMutation } from 'api/tests'

import { useHistory } from 'react-router-dom'

import AddTestForm from './Presentation'

const QueryWrapper = ({ disciplineId, defaults, ...props }) => {
  const history = useHistory()

  const redirectToDisciplines = () => {
    history.push(`/disciplines/${disciplineId}/tests`)
  }

  const { isLoading, disciplines: rawDisciplines } = useDisciplinesQuery()
  const disciplines = () =>
    rawDisciplines?.reduce(
      (selectables, { id, title, grade }) => ({
        ...selectables,
        [id]: `${title} (${grade}й год обучения)`,
      }),
      {
        any: 'Все дисциплины',
      }
    )

  const { add } = useAddMutation({ onSuccess: redirectToDisciplines })
  const onAdd = (test, { setError }) => {
    add(test, { onValidationError: setError })
  }

  return (
    <AddTestForm
      {...props}
      isLoading={isLoading}
      defaults={defaults}
      disciplines={disciplines()}
      onCancel={redirectToDisciplines}
      onSubmit={onAdd}
    />
  )
}

export default QueryWrapper
