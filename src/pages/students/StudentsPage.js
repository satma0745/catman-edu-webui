import { useHistory } from 'react-router-dom'
import { useAuth } from 'auth'
import { useSearch } from 'routing/utils'

import Button from 'react-bootstrap/Button'
import { StudentsFilter, StudentsTable } from 'components/students'

const StudentsPage = () => {
  const history = useHistory()
  const [userInfo] = useAuth()
  const [filter, setFilter] = useSearch()

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
      <h1>Учащиеся</h1>

      <StudentsFilter className="my-4" initials={filter} onApply={setFilter} />

      <StudentsTable className="my-4" filter={filter} />

      {userInfo.role === 'Admin' && (
        <div className="d-flex justify-content-center">
          <Button onClick={onRegisterClick}>Зарегистрировать нового учащегося</Button>
        </div>
      )}
    </>
  )
}

export default StudentsPage
