import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useQuery, useMutation, useQueryClient } from 'react-query'

import Button from 'react-bootstrap/Button'
import { Loadable } from '../../components/common'

import { DisciplinesFilter, DisciplinesTable } from '../../components/disciplines'
import { deleteDiscipline, getFilteredDisciplines } from '../../api'

const DisciplinesPage = () => {
  const queryClient = useQueryClient()
  const history = useHistory()
  const [filter, setFilter] = useState({})

  const { isLoading, data: disciplines } = useQuery(['disciplines', filter], getFilteredDisciplines)
  const { mutate: $delete } = useMutation(deleteDiscipline, {
    onSuccess: () => queryClient.invalidateQueries('disciplines'),
  })

  return (
    <>
      <h1>Страница управления дисциплинами</h1>
      <DisciplinesFilter onApply={(options) => setFilter(options)} />

      <Loadable loaded={!isLoading} className="my-4">
        <DisciplinesTable
          disciplines={disciplines}
          onEdit={(id) => history.push(`/disciplines/edit/${id}`)}
          onDelete={(id) => $delete(id)}
        />
      </Loadable>

      <div className="d-flex justify-content-center">
        <Button onClick={() => history.push('/disciplines/add')}>Добавить дисциплину</Button>
      </div>
    </>
  )
}

export default DisciplinesPage
