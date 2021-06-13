import { Switch, useRouteMatch } from 'react-router-dom'
import { PrivateRoute } from 'routing/routes'

import { AddGroupPage, EditGroupPage, GroupsPage } from 'pages'

const GroupsSwitch = () => {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <PrivateRoute allowedRoles="Admin" path={`${path}/add`} render={AddGroupPage} />
      <PrivateRoute allowedRoles="Admin" path={`${path}/edit/:id`} render={EditGroupPage} />
      <PrivateRoute allowedRoles={['Admin', 'Teacher']} path={`${path}`} render={GroupsPage} />
    </Switch>
  )
}

export default GroupsSwitch
