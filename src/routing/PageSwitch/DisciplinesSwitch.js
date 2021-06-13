import { Switch, useRouteMatch } from 'react-router-dom'
import { PrivateRoute } from 'routing/routes'

import { AddDisciplinePage, DisciplinesPage, EditDisciplinePage } from 'pages'

const DisciplinesSwitch = () => {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <PrivateRoute allowedRoles="Admin" path={`${path}/add`} render={AddDisciplinePage} />
      <PrivateRoute allowedRoles="Admin" path={`${path}/edit/:id`} render={EditDisciplinePage} />
      <PrivateRoute allowedRoles={['Admin', 'Teacher']} path={`${path}`} render={DisciplinesPage} />
    </Switch>
  )
}

export default DisciplinesSwitch
