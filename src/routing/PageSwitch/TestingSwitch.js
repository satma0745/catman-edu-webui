import { Switch, useRouteMatch } from 'react-router-dom'
import { PrivateRoute } from 'routing/routes'

import { TestPage, TestingDisciplinesPage, TestsListPage } from 'pages/testing'

const StudentsSwitch = () => {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <PrivateRoute
        allowedRoles="Student"
        path={`${path}/discipline/:disciplineId`}
        render={TestsListPage}
      />
      <PrivateRoute allowedRoles="Student" path={`${path}/:testId`} render={TestPage} />
      <PrivateRoute allowedRoles="Student" path={`${path}`} render={TestingDisciplinesPage} />
    </Switch>
  )
}

export default StudentsSwitch
