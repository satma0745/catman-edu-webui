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
        render={TestingResultsStudentDisciplinesPage}
      />
      <PrivateRoute
        path={`${path}/student-discipline`}
        render={TestingResultsStudentDisciplinePage}
      />
    </Switch>
  )
}

export default TestingResultsSwitch
