import { Switch, useRouteMatch } from 'react-router-dom'
import { PrivateRoute } from 'routing/routes'

import { TestPage, TestsPage } from 'pages/tests'

const TestsSwitch = () => {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <PrivateRoute adminOnly path={`${path}/:id`} render={TestPage} />
      <PrivateRoute adminOnly path={`${path}`} render={TestsPage} />
    </Switch>
  )
}

export default TestsSwitch