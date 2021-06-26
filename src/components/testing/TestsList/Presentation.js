import { useAuth } from 'auth'

import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import { Loadable } from 'components/common'

const TestControl = ({ className, testInfo, onSelect, ...props }) => {
  const [userInfo] = useAuth()

  if (testInfo.isTaken) {
    const score = Math.round((testInfo.actualScore / testInfo.maxScore) * 100)

    return (
      <div {...props} className={`d-flex justify-content-center ${className}`}>
        <p className="my-2">
          Тест уже пройден.{' '}
          <Link to={`/testing/results/student/${userInfo.id}/${testInfo.id}`}>
            Степень усвоения: {score}%
          </Link>
        </p>
      </div>
    )
  }

  return (
    <Form inline {...props} className={`justify-content-center ${className}`}>
      <Button variant="outline-primary" onClick={() => onSelect(testInfo.id)}>
        Пройти
      </Button>
    </Form>
  )
}

const TestsList = ({ isLoading, testsInfo = [], onSelect, ...props }) => (
  <Loadable loaded={!isLoading}>
    <Table {...props} striped bordered hover>
      <thead>
        <tr>
          <th>Название</th>
          <th className="text-center">Операции</th>
        </tr>
      </thead>
      <tbody>
        {testsInfo.map((testInfo) => (
          <tr key={testInfo.id}>
            <td className="align-middle">{testInfo.title}</td>
            <td>
              <TestControl testInfo={testInfo} onSelect={onSelect} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </Loadable>
)

export default TestsList
