import { Switch, useRouteMatch } from 'react-router-dom'
import { PrivateRoute } from 'routing/routes'

import { RegisterAdminPage, EditAdminPage, AdminsPage } from 'pages'

const StudentsSwitch = () => {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <PrivateRoute allowedRoles="Admin" path={`${path}/register`} render={RegisterAdminPage} />
      <PrivateRoute allowedRoles="Admin" path={`${path}/edit/:id`} render={EditAdminPage} />
      <PrivateRoute allowedRoles="Admin" path={`${path}`} render={AdminsPage} />
    </Switch>
  )
}

export default StudentsSwitch
