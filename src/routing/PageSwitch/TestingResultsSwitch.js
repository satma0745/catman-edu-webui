import { Switch, useRouteMatch } from 'react-router-dom'
import { PrivateRoute } from 'routing/routes'

import {
  TestingResultsStudentDisciplinePage,
  TestingResultsStudentDisciplinesPage,
} from 'pages/testing-results'

const TestingResultsSwitch = () => {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <PrivateRoute
        path={`${path}/student/:studentId`}
        predicate={({ userInfo, params }) =>
          userInfo.role === 'Admin' || userInfo.id === params.studentId
        }
        render={TestingResultsStudentDisciplinesPage}
      />
      <PrivateRoute
        path={`${path}/student-discipline`}
        predicate={({ userInfo, search }) =>
          userInfo.role === 'Admin' || userInfo.id === search.studentId
        }
        render={TestingResultsStudentDisciplinePage}
      />
    </Switch>
  )
}

export default TestingResultsSwitch
