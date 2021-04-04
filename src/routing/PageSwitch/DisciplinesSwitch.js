import { Switch, useRouteMatch } from 'react-router-dom'
import { PrivateRoute } from 'routing/routes'

import { AddDisciplinePage, DisciplinesPage, EditDisciplinePage } from 'pages'

const DisciplinesSwitch = () => {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <PrivateRoute adminOnly path={`${path}/add`} render={AddDisciplinePage} />
      <PrivateRoute adminOnly path={`${path}/edit/:id`} render={EditDisciplinePage} />
      <PrivateRoute adminOnly path={`${path}`} render={DisciplinesPage} />
    </Switch>
  )
}

export default DisciplinesSwitch
