import { Switch, useRouteMatch } from 'react-router-dom'
import { PrivateRoute } from 'routing/routes'

import { RegisterAdminPage, AdminsPage } from 'pages'

const StudentsSwitch = () => {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <PrivateRoute adminOnly path={`${path}/register`} render={RegisterAdminPage} />
      <PrivateRoute adminOnly path={`${path}`} render={AdminsPage} />
    </Switch>
  )
}

export default StudentsSwitch
