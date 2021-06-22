import { Switch, useRouteMatch } from 'react-router-dom'
import { PrivateRoute } from 'routing/routes'

import { AddDisciplinePage, DisciplinesPage, EditDisciplinePage } from 'pages/disciplines'
import { AddTestPage, TestPage, TestsPage } from 'pages/tests'

const DisciplinesSwitch = () => {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <PrivateRoute
        allowedRoles="Teacher"
        path={`${path}/:disciplineId/tests/add`}
        render={AddTestPage}
      />
      <PrivateRoute
        allowedRoles="Teacher"
        path={`${path}/:disciplineId/tests/:id`}
        render={TestPage}
      />
      <PrivateRoute
        allowedRoles="Teacher"
        path={`${path}/:disciplineId/tests`}
        render={TestsPage}
      />

      <PrivateRoute allowedRoles="Admin" path={`${path}/:id/edit`} render={EditDisciplinePage} />
      <PrivateRoute allowedRoles="Admin" path={`${path}/add`} render={AddDisciplinePage} />
      <PrivateRoute allowedRoles={['Admin', 'Teacher']} path={`${path}`} render={DisciplinesPage} />
    </Switch>
  )
}

export default DisciplinesSwitch
