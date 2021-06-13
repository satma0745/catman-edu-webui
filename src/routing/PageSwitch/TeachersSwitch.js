import { Switch, useRouteMatch } from 'react-router-dom'
import { PrivateRoute } from 'routing/routes'

import { RegisterTeacherPage, EditTeacherPage, TeachersPage } from 'pages/teachers'

const TeachersSwitch = () => {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <PrivateRoute allowedRoles="Admin" path={`${path}/register`} render={RegisterTeacherPage} />
      <PrivateRoute allowedRoles="Admin" path={`${path}/edit/:id`} render={EditTeacherPage} />
      <PrivateRoute allowedRoles="Admin" path={`${path}`} render={TeachersPage} />
    </Switch>
  )
}

export default TeachersSwitch
