import { Switch, useRouteMatch } from 'react-router-dom'
import { PrivateRoute } from 'routing/routes'

import { AddTestPage, TestPage, TestsPage } from 'pages/tests'

const TestsSwitch = () => {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <PrivateRoute allowedRoles="Teacher" path={`${path}/add`} render={AddTestPage} />
      <PrivateRoute allowedRoles="Teacher" path={`${path}/:id`} render={TestPage} />
      <PrivateRoute allowedRoles="Teacher" path={`${path}`} render={TestsPage} />
    </Switch>
  )
}

export default TestsSwitch
