import { Switch, useRouteMatch } from 'react-router-dom'
import { PrivateRoute } from 'routing/routes'

import { RegisterTeacherPage, EditTeacherPage, TeachersPage } from 'pages/teachers'

const TeachersSwitch = () => {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <PrivateRoute adminOnly path={`${path}/register`} render={RegisterTeacherPage} />
      <PrivateRoute adminOnly path={`${path}/edit/:id`} render={EditTeacherPage} />
      <PrivateRoute adminOnly path={`${path}`} render={TeachersPage} />
    </Switch>
  )
}

export default TeachersSwitch
