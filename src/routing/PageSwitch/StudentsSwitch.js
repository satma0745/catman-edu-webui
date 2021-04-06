import { Switch, useRouteMatch } from 'react-router-dom'
import { PrivateRoute } from 'routing/routes'

import { RegisterStudentPage, StudentsPage } from 'pages'

const StudentsSwitch = () => {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <PrivateRoute adminOnly path={`${path}/register`} render={RegisterStudentPage} />
      <PrivateRoute adminOnly path={`${path}`} render={StudentsPage} />
    </Switch>
  )
}

export default StudentsSwitch
