import { useFilteredQuery as useDisciplinesQuery } from 'api/disciplines'
import { useAddMutation } from 'api/tests'

import { useHistory } from 'react-router-dom'

import AddTestForm from './Presentation'

const QueryWrapper = () => {
  const history = useHistory()

  const { isLoading, disciplines: rawDisciplines } = useDisciplinesQuery()
  const disciplines = () =>
    rawDisciplines?.reduce(
      (selectables, { id, title, grade }) => ({
        ...selectables,
        [id]: `${title} (${grade}й класс)`,
      }),
      {
        any: 'Все дисциплины',
      }
    )

  const { add } = useAddMutation({ onSuccess: () => history.push('/tests') })
  const onAdd = (test, { setError }) => {
    add(test, { onValidationError: setError })
  }

  return (
    <AddTestForm
      isLoading={isLoading}
      disciplines={disciplines()}
      onCancel={() => history.push('/tests')}
      onSubmit={onAdd}
    />
  )
}

export default QueryWrapper
