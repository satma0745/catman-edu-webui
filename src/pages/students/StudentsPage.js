import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import { StudentsFilter, StudentsTable } from 'components/students'

const DisciplinesPage = () => {
  const history = useHistory()
  const [filter, setFilter] = useState({})

  const onRegisterClick = () => {
    const { groupId } = filter
    if (groupId) {
      const params = new URLSearchParams({ groupId })
      history.push(`students/register?${params}`)
    } else {
      history.push('students/register')
    }
  }

  return (
    <>
      <h1>Страница управления студентами</h1>

      <StudentsFilter className="my-4" onApply={setFilter} />

      <StudentsTable className="my-4" filter={filter} />

      <div className="d-flex justify-content-center">
        <Button onClick={onRegisterClick}>Зарегистрировать нового студента</Button>
      </div>
    </>
  )
}

export default DisciplinesPage
