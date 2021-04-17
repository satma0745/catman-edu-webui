import { Switch, useRouteMatch } from 'react-router-dom'
import { PrivateRoute } from 'routing/routes'

import { TestingDisciplinesPage, TestsListPage } from 'pages/testing'

const StudentsSwitch = () => {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <PrivateRoute studentOnly path={`${path}/:disciplineId`} render={TestsListPage} />
      <PrivateRoute studentOnly path={`${path}`} render={TestingDisciplinesPage} />
    </Switch>
  )
}

export default StudentsSwitch
