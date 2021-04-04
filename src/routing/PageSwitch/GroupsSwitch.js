import { Switch, useRouteMatch } from 'react-router-dom'
import { PrivateRoute } from 'routing/routes'

import { AddGroupPage, EditGroupPage, GroupsPage } from 'pages'

const GroupsSwitch = () => {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <PrivateRoute adminOnly path={`${path}/add`} render={AddGroupPage} />
      <PrivateRoute adminOnly path={`${path}/edit/:id`} render={EditGroupPage} />
      <PrivateRoute adminOnly path={`${path}`} render={GroupsPage} />
    </Switch>
  )
}

export default GroupsSwitch
