import { Switch, useRouteMatch } from 'react-router-dom'
import { PrivateRoute } from 'routing/routes'

import { EditStudentPage, RegisterStudentPage, StudentsPage } from 'pages'

const StudentsSwitch = () => {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <PrivateRoute allowedRoles="Admin" path={`${path}/register`} render={RegisterStudentPage} />
      <PrivateRoute allowedRoles="Admin" path={`${path}/edit/:id`} render={EditStudentPage} />
      <PrivateRoute allowedRoles={['Admin', 'Teacher']} path={`${path}`} render={StudentsPage} />
    </Switch>
  )
}

export default StudentsSwitch
