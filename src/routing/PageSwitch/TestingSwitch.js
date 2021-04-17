import { Switch, useRouteMatch } from 'react-router-dom'
import { PrivateRoute } from 'routing/routes'

import { TestPage, TestingDisciplinesPage, TestsListPage } from 'pages/testing'

const StudentsSwitch = () => {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <PrivateRoute studentOnly path={`${path}/discipline/:disciplineId`} render={TestsListPage} />
      <PrivateRoute studentOnly path={`${path}/:testId`} render={TestPage} />
      <PrivateRoute studentOnly path={`${path}`} render={TestingDisciplinesPage} />
    </Switch>
  )
}

export default StudentsSwitch
